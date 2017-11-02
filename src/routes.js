import Home from 'components/Home/home';
import Posts from 'components/Posts/posts';
import Post from 'components/Posts/post';
import CreatePost from 'components/Posts/createPost';
import EditPost from 'components/Posts/editPost';
import NotFound from 'components/NotFound/notFound';
import Projects from 'components/Projects/projects';
import Contact from 'components/Contact/contact';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/posts',
    component: Posts
  },
  {
    path: '/posts/create',
    name: 'createPost',
    component: CreatePost
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/projects',
    component: Projects
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post
  },
  {
    path: '/post/:id/edit',
    name: 'editPost',
    component: EditPost
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
