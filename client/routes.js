import Index from './components/Index.vue'

import Home from './components/Home.vue'

const routes = [
      {
          path: '/index',
          component: Index,
          children: [
              {
                  path: '',
                  component: Home
              }
          ]
      }
];

export default routes;
