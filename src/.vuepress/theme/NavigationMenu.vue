<template>
  <nav class="menu-nav">
    <ul class="menu-list">
      <template v-for="item in menu">
        <navigation-group v-if="item.children" :group="item"/>
        <navigation-item v-else :item="item"/>
      </template>
    </ul>
  </nav>
</template>

<script>
import store from './store'
import {processNav} from './scripts/nav.js';
import NavigationItem from './NavigationItem.vue';
import NavigationGroup from './NavigationGroup.vue';

export default {
  components: {
    NavigationItem,
    NavigationGroup
  },
  data() {
    return {
      menu: null
    }
  },
  created() {
    this.menu = processNav(this.$site.themeConfig.nav, this.$site.pages);
  }
}
</script>

<style src="./styles/nav.styl" />
