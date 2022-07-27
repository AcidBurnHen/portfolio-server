import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class PostModel {
  public static async getPostsFromDB(ctx) {
    const posts = await prisma.post.findMany();

    ctx.body = posts;
  }

  public static async addPostToDB(ctx) {
    const body = ctx.request.body;

    const newPost = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
      },
    });

    ctx.body = newPost;
  }
}
