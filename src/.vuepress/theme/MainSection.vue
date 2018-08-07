<template>
  <div class="main-wrapper" :class="{'no-sidebar': !isSidebar}">
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
import {processSidebar} from './util.js';
import SidebarMenu from './SidebarMenu.vue';

export default {
  components: {
    SidebarMenu
  },
  computed: {
    isSidebar() {
      return this.sidebar && this.sidebar.items && this.sidebar.items.length > 0;
    },
    sidebar() {
      return processSidebar(this.$site.themeConfig.sidebar, this.$site.pages, this.$page);
    }
  }
}
</script>

<style src="./styles/main.css" />

