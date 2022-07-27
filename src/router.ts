import * as Router from 'koa-router';
import PostController from './controllers/post.controller';
import UserController from './controllers/user.controller';

const router = new Router();

router.get('/posts', PostController.getPosts);

router.post('/add-post', PostController.addPost);

router.post('/update-post', PostController.updatePost);

router.post('/remove-post', PostController.removePost);

router.post('/login', UserController.loginUser);

export default router;
