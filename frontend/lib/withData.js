import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/link-error';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { createUploadLink } from 'apollo-upload-client';
import withApollo from 'next-with-apollo';
import { endpoint, prodEndpoint } from '../config';

function createClient({ headers, initialState }) {
  // create an instance of Apollo
  return new ApolloClient({
    // Error handling link
    // Take two different types of error
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        // #1 error:  password is wrong or you request a field that doesn't exist
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        // #2 netword error, network is down, having cors issue
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
          );
      }),
      // this uses apollo-link-http under the hood, so all the options here come from that package
      // responsible for fetching data and making POST request
      // apollo-upload-client allows us to do file upload
      createUploadLink({
        uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
        fetchOptions: {
          // Send the cookie along to see if the user is logged in
          // Send JWT in the cookie, not localStorage
          // because localStorage cannot be sent to the server
          // when somedoby refreshes the page, but the cookie can be
          credentials: 'include',
        },
        // Send along the headers along from this request
        // This enables server-side rendering (SSR) with "logged in" state
        // No logged out flicker
        headers,
      }),
    ]),
    // Store cache in the browser
    // If you refresh the page, that cache is gone
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO: We will add this together!
            // allProducts: paginationField(),
          },
        },
      },
      // restore initially render the view on the server
      // hot potato all the data that was collected on the server
    }).restore(initialState || {}),
  });
}

// withApollo allows us to crawl all our pages
// look for queries that we have
// wait for all data to be fetched
// before the server sends data to the client
export default withApollo(createClient, { getDataFromTree });
