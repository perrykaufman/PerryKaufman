import Vue from "vue";

/*
 * A simple store. Replace with Vuex if more complexity becomes necessary.
 */
export default new Vue({
  data: {
    sidebarOpen: false
  },
  created() {
    this.$on('close-sidebar', this.closeSidebar);
    this.$on('toggle-sidebar', this.toggleSidebar);
  },
  methods: {
    closeSidebar() {
      this.sidebarOpen = false;
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    }
  }
});