import Index from './components/Index.vue'
import Home from './components/Home.vue'

const routes = [
  {
		path: '/',
		component: Index,
	},
  {
		path: '/index',
		component: Index,
	},
	{
		path: '/home',
		component: Home,
	}
];

export default routes;
