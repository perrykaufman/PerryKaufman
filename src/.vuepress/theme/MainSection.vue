<template>
  <div class="main-wrapper" :class="{'no-sidebar': !isSidebar, 'sidebar-open': sidebarOpen}">
    <sidebar-menu :sidebar="sidebar"/>
    <main class="main">
      <Content/>
    </main>
    <footer>
      {{this.$site.themeConfig.footer}}
    </footer>
  </div>
</template>

<script>
import store from './store.js'
import { processSidebar } from "./util.js";
import SidebarMenu from "./SidebarMenu.vue";

export default {
  components: {
    SidebarMenu
  },
  computed: {
    isSidebar() {
      return (
        this.sidebar && this.sidebar.items && this.sidebar.items.length > 0
      );
    },
    sidebar() {
      return processSidebar(
        this.$site.themeConfig.sidebar,
        this.$site.pages,
        this.$page
      );
    },
    sidebarOpen() {
      return store.sidebarOpen;
    }
  }
};
</script>

<style src="./styles/main.css" />

