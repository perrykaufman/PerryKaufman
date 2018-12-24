<template>
  <div class="page">
    <header-section />
    <main-section />
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import MainSection from './components/MainSection.vue';

export default {
  components: {
    HeaderSection,
    MainSection
  }
}
</script>

<style src="./styles/index.styl" />
