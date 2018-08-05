<template>
  <div class="page">
    <header-section @toggleSidebar="toggleSidebar()"/>
    <main-section :class="{'sidebar-open': sidebarOpen}" />
  </div>
</template>

<script>
import HeaderSection from './HeaderSection.vue';
import MainSection from './MainSection.vue';

export default {
  components: {
    HeaderSection,
    MainSection
  },
  data() {
    return {
      sidebarOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    }
  }
}
</script>

<style src="./styles/index.css">

</style>
