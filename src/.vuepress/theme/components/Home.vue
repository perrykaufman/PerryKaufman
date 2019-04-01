<template>
  <div class="home">
    <header
      :class="{
        'home-header': true,
        'home-background': frontmatter.background
      }"
      :style="`background-image: url('${frontmatter.background}')`"
    >
      <picture class="home-header-portrait">
        <img
          :src="frontmatter.portrait"
          :alt="'photo of ' + frontmatter.title.toLowerCase()"
        />
      </picture>
      <div class="home-panel">
        <h1 class="home-panel-title">{{ frontmatter.title }}</h1>
        <p class="home-panel-desc">{{ frontmatter.desc }}</p>
      </div>
    </header>
    <Content />
    <ul class="home-panels">
      <li
        v-for="panel in frontmatter.panels"
        :key="panel.title"
        class="home-panel"
      >
        <router-link class="home-panel-link" :to="panel.link">
          <h1 class="home-panel-title">{{ panel.title }}</h1>
          <p class="home-panel-desc">{{ panel.desc }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    frontmatter() {
      return this.$page.frontmatter.home;
    }
  }
};
</script>

<style src="../styles/home.styl" />
