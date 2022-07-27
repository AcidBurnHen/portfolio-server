import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class UserModel {
  public static async getUsers() {
    const users = await prisma.user.findMany();

    return users;
  }

  public static async getUserByEmail(body) {
    const userByEmail = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    return userByEmail;
  }
}
