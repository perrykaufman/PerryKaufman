<template>
  <div v-show="sidebarOpen" class="sidebar-mask" @click="closeSidebar"></div>
</template>

<script>
import store from "../store";

export default {
  computed: {
    sidebarOpen() {
      return store.sidebarOpen;
    }
  },
  methods: {
    closeSidebar() {
      store.$emit("close-sidebar");
    }
  }
};
</script>

<style src="../styles/sidebar.styl" />
