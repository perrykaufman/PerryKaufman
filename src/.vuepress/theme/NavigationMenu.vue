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
import {processMenu} from './util.js';
import NavigationItem from './NavigationItem.vue';
import NavigationGroup from './NavigationGroup.vue';

export default {
  components: {
    NavigationItem,
    NavigationGroup
  },
  computed: {
    menu() {
      return processMenu(this.$site.themeConfig.nav, this.$site.pages);
    }
  }
}
</script>

<style src="./styles/nav.css" />
