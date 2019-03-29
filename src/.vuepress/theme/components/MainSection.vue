<template>
  <div
    class="main-wrapper"
    :class="{ 'no-sidebar': !isSidebar, 'sidebar-open': sidebarOpen }"
  >
    <sidebar-mask />
    <sidebar-menu :sidebar="sidebar" />
    <main class="main">
      <Home v-if="$page.frontmatter.home" />
      <Content v-else />
    </main>
    <footer-section />
  </div>
</template>

<script>
import Home from "./Home.vue";
import FooterSection from "./FooterSection.vue";
import store from "../store";
import { processSidebar, findSidebar } from "../lib/sidebar.js";
import SidebarMask from "./SidebarMask.vue";
import SidebarMenu from "./SidebarMenu.vue";

export default {
  components: {
    Home,
    FooterSection,
    SidebarMask,
    SidebarMenu
  },
  data() {
    return {
      sidebars: {}
    };
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
    this.sidebars = processSidebar(
      this.$site.themeConfig.sidebar,
      this.$site.pages
    );
  }
};
</script>

<style src="../styles/main.styl" />
