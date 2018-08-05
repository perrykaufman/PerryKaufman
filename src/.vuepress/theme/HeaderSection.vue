<template>
  <header class="header">
      <h1 class="header-title">
        <router-link to="/">{{$site.title}}</router-link>
      </h1>
    <button class="menu-icon" @click="toggle()" :class="{'sidebar-open': sidebarOpen}">Toggle Menu</button>
    <navigation-menu class="header-nav"/>
  </header>
  
</template>

<script>
import NavigationMenu from './NavigationMenu.vue';

export default {
  components: {
    NavigationMenu
  },
  data() {
    return {
      sidebarOpen: false
    }
  },
  methods: {
    toggle() {
      this.sidebarOpen = !this.sidebarOpen;
      this.$emit('toggleSidebar');
    }
  }
}
</script>

<style src="./styles/header.css" />
