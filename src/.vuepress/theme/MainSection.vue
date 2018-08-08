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
import EventBus from './EventBus.js'
import { processSidebar } from "./util.js";
import SidebarMenu from "./SidebarMenu.vue";

export default {
  components: {
    SidebarMenu
  },
  data() {
    return {
      sidebarOpen: false
    };
  },
  created() {
    EventBus.$on('close-sidebar', this.closeSidebar);
    EventBus.$on('toggle-sidebar', this.toggleSidebar);
  },
  methods: {
    closeSidebar() {
      this.sidebarOpen = false;
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    }
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
    }
  }
};
</script>

<style src="./styles/main.css" />

