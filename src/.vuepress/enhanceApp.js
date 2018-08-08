import Layout from './theme/Layout.vue';

export default ({Vue, options, router, siteData}) => {
  router.beforeEach((to, from, next) => {
    console.log(to);
    if (!to.name) next({path: '/404.html'});
    else next();
  });
};