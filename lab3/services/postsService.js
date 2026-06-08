const fs = require('fs').promises;

const readPosts = async () => {
  const data = await fs.readFile('./posts.json', 'utf-8');
  return JSON.parse(data);
};

const writePosts = async (posts) => {
  await fs.writeFile('./posts.json', JSON.stringify(posts, null, 2));
};

const createPost = async (post) => {
  const posts = await readPosts();
  const newPost = {
    id: posts.length + 1,
    ...post,
    createdAt: new Date().toISOString(),
  };
  posts.push(newPost);
  await writePosts(posts);
  return newPost;
};

const getPostById = async (id) => {
  const posts = await readPosts();
  return posts.find((p) => p.id === Number(id));
};

const readPostsList = async () => {
  return await readPosts();
};

const updatePost = async (id, post) => {
  const posts = await readPosts();
  const idx = posts.findIndex((p) => p.id === Number(id));
  if (idx === -1) return null;
  posts[idx] = { ...posts[idx], ...post };
  await writePosts(posts);
  return posts[idx];
};

const deletePost = async (id) => {
  const posts = await readPosts();
  const idx = posts.findIndex((p) => p.id === Number(id));
  if (idx === -1) return null;
  posts.splice(idx, 1);
  await writePosts(posts);
  return true;
};

module.exports = {
  readPosts: readPostsList,
  createPost,
  getPostById,
  updatePost,
  deletePost,
  writePosts,
};
