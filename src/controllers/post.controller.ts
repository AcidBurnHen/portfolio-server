import PostModel from '../models/post.model';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default class PostController {
  public static async getPosts(ctx) {
    await PostModel.getPostsFromDB(ctx);
    ctx.status = 200;
  }

  public static async addPost(ctx) {
    await PostModel.addPostToDB(ctx);
    ctx.status = 200;
  }
}
