<template>
  <footer class="footer">
    <p class="footer-text">{{ this.$site.themeConfig.footer.text }}</p>
    <ul class="footer-icons">
      <li
        v-for="icon in this.$site.themeConfig.footer.icons"
        :key="icon.name"
        class="footer-icon"
      >
        <a
          class="footer-icon-link"
          :href="icon.link"
          :title="icon.name"
          target="_blank"
        >
          <img
            class="footer-icon-image"
            :src="icon.img"
            :alt="`${icon.name} logo`"
          />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {};
</script>

<style src="../styles/footer.styl" />
