<template>
  <header class="header">
    <router-link class="logo-link" to="/" @click.native="closeSidebar">
      <picture v-if="$site.themeConfig.logo" class="logo">
        <img
          :src="$site.themeConfig.logo"
          :alt="$site.title.toLowerCase() + ' logo'"
        />
      </picture>
      <h1 v-else class="header-title">
        {{ $site.title }}
      </h1>
    </router-link>
    <button
      class="menu-icon"
      :class="{ 'sidebar-open': sidebarOpen }"
      @click="toggle()"
    >
      Toggle Menu
    </button>
    <navigation-menu :type="'header'" />
  </header>
</template>

<script>
import store from "../store";
import NavigationMenu from "./NavigationMenu.vue";

export default {
  components: {
    NavigationMenu
  },
  computed: {
    sidebarOpen() {
      return store.sidebarOpen;
    }
  },
  methods: {
    closeSidebar() {
      store.$emit("close-sidebar");
    },
    toggle() {
      store.$emit("toggle-sidebar");
    }
  }
};
</script>

<style src="../styles/header.styl" />
