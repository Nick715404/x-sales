export const getAllReviews = async () => {
  try {
    const responce = await fetch(`${process.env.SERVER_URL}/api/reviews/all`, {
      next: { revalidate: 60 }
    });
    const data = await responce.json();
    return data;
  }
  catch (error) {
    throw new Error('Something wrong with this reviews');
  }
}