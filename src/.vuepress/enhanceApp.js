import Layout from './theme/Layout.vue';

export default ({Vue, options, router, siteData}) => {
  /*
   * Redirect to custom 404 page.
   */
  router.beforeEach((to, from, next) => {
    if (!to.name) next({path: '/404.html'});
    else next();
  });
};