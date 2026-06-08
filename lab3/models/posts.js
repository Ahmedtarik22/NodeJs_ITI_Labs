const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // referencing the User model
});

f;
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
