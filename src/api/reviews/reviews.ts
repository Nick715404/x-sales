export const getAllReviews = async () => {
  try {
    const responce = await fetch(`https://буккросинг.рф:3200/api/api/reviews/all`, {
      next: { revalidate: 60 }
    });
    const data = await responce.json();
    return data;
  }
  catch (error) {
    throw new Error('Something wrong with this reviews');
  }
}