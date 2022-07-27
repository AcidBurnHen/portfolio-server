import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class PostModel {
  static async getPostsFromDB() {
    const posts = await prisma.post.findMany();

    return posts;
  }

  static async addPostToDB(body) {
    const newPost = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return newPost;
  }

  static async updatePostInDB(body) {
    const updatePost = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return updatePost;
  }

  static async removePostFromDB(body) {
    const removedPost = await prisma.post.delete({
      where: {
        id: body.id,
      },
    });

    return removedPost;
  }
}
