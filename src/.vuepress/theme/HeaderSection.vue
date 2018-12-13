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
import store from './store';
import NavigationMenu from './NavigationMenu.vue';

export default {
  components: {
    NavigationMenu
  },
  methods: {
    toggle() {
      store.$emit('toggle-sidebar');
    }
  },
  computed: {
    sidebarOpen() {
      return store.sidebarOpen;
    }
  }
}
</script>

<style src="./styles/header.styl" />
