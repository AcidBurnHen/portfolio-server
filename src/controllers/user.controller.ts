import UserModel from '../models/user.model';
const bcrypt = require('bcrypt');

export default class UserController {
  static async loginUser(ctx) {
    const body = ctx.request.body;

    const user = await UserModel.getUserByEmail(body);

    const checkPassword: boolean = await bcrypt.compare(
      body.password,
      user.password
    );

    if (checkPassword) {
      ctx.status = 200;
      ctx.state.user = user.email;
      ctx.set('Authorization', process.env.AUTH_TOKEN);
    } else {
      ctx.throw(500, 'Wrong email or password');
    }
  }
}
