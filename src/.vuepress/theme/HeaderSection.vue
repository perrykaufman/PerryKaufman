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
import EventBus from './EventBus';
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
  created() {
    EventBus.$on('close-sidebar', this.closeSidebar);
  },
  methods: {
    closeSidebar() {
      this.sidebarOpen = false;
    },
    toggle() {
      this.sidebarOpen = !this.sidebarOpen;
      EventBus.$emit('toggle-sidebar');
    }
  }
}
</script>

<style src="./styles/header.css" />
