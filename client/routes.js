import Index from './components/Index.vue'

import Home from './components/Home.vue'
import Profile from './components/Profile.vue'

const routes = [
      {
          path: '/',
          component: Index,
          children: [
              {
                  path: 'profile',
                  component: Profile
              },
              {
                  path: '*',
                  component: Home
              },
          ]
      }
];

export default routes;
