export const getAllProducts = async () => {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/product/all`, {
      next: { revalidate: 120 }
    });
    const data = await response.json();

    return data;
  }
  catch (error) {
    throw new Error('Something wrong with this products');
  }
};

export const getSingleProduct = async (id: string) => {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/product/${id}`);
    const data = await response.json();

    return data;
  }
  catch (error) {
    throw new Error('Something wrong with this product');
  }
}