/* eslint-disable */
import { KeystoneContext } from '@keystone-next/types';
import { CartItemCreateInput } from '../.keystone/schema-types';
import { Session } from '../types';

async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  console.log('Adding to cart!');
  // Query the current user, see if they are signed in
  const sesh = context.session as Session;
  if (!sesh.itemId) {
    throw new Error('You must be logged in to add an item to cart');
  }
  // Query the current users cart
  // Go to the database right from our addToCart resolver
  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: sesh.itemId }, product: { id: productId } },
    resolveFields: 'id,quantity'
  });
  // See if the current item is in their cart
  // there is at least one item in an array
  console.log(allCartItems)
  const [existingCartItem] = allCartItems;
  console.log(existingCartItem)
  // If it is, increment quantity by 1
  if (existingCartItem) {
    console.log(
      `There are already ${existingCartItem.quantity}, increment by 1!`
    );
  return await context.lists.CartItem.updateOne({
    id: existingCartItem.id,
      data: {
      quantity: existingCartItem.quantity + 1,
      },
    });
  }

  // If it isn't, create a new cart item
  return context.lists.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: sesh.itemId } },
    },
  });
}

export default addToCart;
