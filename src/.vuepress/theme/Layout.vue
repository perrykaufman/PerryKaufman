<template>
  <div class="page">
    <header-section />
    <main-section />
  </div>
</template>

<script>
import HeaderSection from './HeaderSection.vue';
import MainSection from './MainSection.vue';

export default {
  components: {
    HeaderSection,
    MainSection
  }
}
</script>

<style src="./styles/index.styl" />
