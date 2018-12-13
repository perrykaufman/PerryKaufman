<template>
  <div v-show="sidebarOpen" @click="closeSidebar" class="sidebar-mask"></div>
</template>

<script>
import store from './store';

export default {
  methods: {
    closeSidebar() {
      store.$emit('close-sidebar');
    }
  },
  computed: {
    sidebarOpen() {
      return store.sidebarOpen;
    }
  }
}
</script>

<style src="./styles/sidebar.styl" />
