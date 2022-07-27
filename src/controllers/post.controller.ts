import PostModel from '../models/post.model';

export default class PostController {
  public static async getPosts(ctx) {
    console.log(ctx.state);
    const posts = await PostModel.getPostsFromDB();
    ctx.body = posts;
  }

  public static async addPost(ctx) {
    const body = ctx.request.body;
    const addedPost = await PostModel.addPostToDB(body);
    if (addedPost) ctx.status = 200;
  }

  public static async updatePost(ctx) {
    const body = ctx.request.body;
    const updatedPost = await PostModel.updatePostInDB(body);
    if (updatedPost) ctx.status = 200;
  }

  public static async removePost(ctx) {
    const body = ctx.request.body;
    const removedPost = await PostModel.removePostFromDB(body);
    if (removedPost) ctx.status = 200;
  }
}
