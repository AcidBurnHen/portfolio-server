import * as Router from 'koa-router';
import IndexController from './controllers/index.controller';
import PostController from './controllers/post.controller';

const router = new Router();

router.get('/', IndexController.getIndex);

router.get('/posts', PostController.getPosts);

router.post('/add-post', PostController.addPost);

export default router;
