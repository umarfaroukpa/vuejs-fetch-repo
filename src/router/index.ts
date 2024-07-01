import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SingleRepoView from '@/views/SingleRepoView.vue';
import RepoListView from '@/views/RepoListView.vue';
import NotFound from '@/views/NotFoundView.vue';
import { store } from '../store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/repos',
    name: 'RepoList',
    component: RepoListView
  },
  {
    path: '/repo/:owner/:repo',
    name: 'SingleRepo',
    component: SingleRepoView,
    props: (route: RouteLocationNormalized) => ({ owner: route.params.owner, repo: route.params.repo })
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


router.beforeEach((to, from, next) => {
  store.loading = true;
  next();
});

router.afterEach(() => {
  store.loading = false;
});

export default router;
