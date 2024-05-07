export const getAllPosts = async () => {
  try {
    const response = await fetch(`https://буккросинг.рф:3200/api/post/all`, {
      next: { revalidate: 360 }
    });
    const data = await response.json();
    return data;
  }
  catch (error) {
    throw new Error('Something wrong with this posts');
  }
}

export const getSinglePost = async (id: string) => {
  try {
    const response = await fetch(`https://буккросинг.рф:3200/api/post/${id}`);
    const data = await response.json();
    return data;
  }
  catch (error) {
    throw new Error('Something wrong with this post');
  }
}