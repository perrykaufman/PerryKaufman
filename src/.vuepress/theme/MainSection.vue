<template>
  <div class="main-wrapper" :class="{'no-sidebar': !isSidebar, 'sidebar-open': sidebarOpen}">
    <sidebar-mask/>
    <sidebar-menu :sidebar="sidebar"/>
    <main class="main">
      <Content/>
    </main>
    <footer-section />
  </div>
</template>

<script>
import FooterSection from './FooterSection.vue';
import store from './store'
import { processSidebar, findSidebar } from "./scripts/sidebar.js";
import SidebarMask from './SidebarMask';
import SidebarMenu from "./SidebarMenu.vue";

export default {
  components: {
    FooterSection,
    SidebarMask,
    SidebarMenu
  },
  data() {
    return {
      sidebars: {}
    }
  },
  computed: {
    isSidebar() {
      return (
        this.sidebar && this.sidebar.items && this.sidebar.items.length > 0
      );
    },
    sidebar() {
      return findSidebar(this.sidebars, this.$page);
    },
    sidebarOpen() {
      return store.sidebarOpen;
    }
  },
  created() {
    this.sidebars = processSidebar(this.$site.themeConfig.sidebar, this.$site.pages)
  }
};
</script>

<style src="./styles/main.css" />

