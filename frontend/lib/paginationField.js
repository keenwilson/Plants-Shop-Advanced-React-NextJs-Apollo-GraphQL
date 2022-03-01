import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    // Apollo asks the read function for all products
    keyArgs: false, // tell apollo that we will take care of everything
    // args is the first and skip values
    // cache is a reference to apollo cache to query all our items
    read(existing = [], { args, cache }) {
      const { skip, first } = args;
      // Read the number of items on the page from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });

      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // Check if we have existing items
      // Filter out if the item is undefined
      const items = existing.slice(skip, skip + first).filter((item) => item);
      if (items.length && items.length !== first && page === pages) {
        // If
        //  There are items
        //   AND there aren't enough items to satisfy how many were requested
        //   AND we are on the last page
        // Then, just send it
        return items;
      }
      if (items.length !== first) {
        // We don't have any items
        // return false (Apollo will make a network request)
        return false;
      }

      // If there are items, return them from the cache
      if (items.length) {
        // return the items because they are already in the cache
        return items;
      }

      return false; // fallback to network request
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      // Apollo client comes back from a network with products
      // How do you want to put into the cache?
      const merged = existing ? existing.slice(0) : [];

      for (let i = skip; i < skip + incoming.length; ++i) {
        // Allow empty spots im merged array before the skip index
        merged[i] = incoming[i - skip];
      }

      return merged;
    },
  };
}
