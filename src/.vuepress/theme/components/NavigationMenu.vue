<template>
  <nav :class="classes">
    <ul class="menu-list">
      <template v-for="item in menu">
        <navigation-group v-if="item.children" :group="item" :sidebar="isSidebar" :type="type"/>
        <navigation-item v-else :item="item"/>
      </template>
    </ul>
  </nav>
</template>

<script>
import store from '../store'
import {processNav} from '../scripts/nav.js';
import NavigationItem from './NavigationItem.vue';
import NavigationGroup from './NavigationGroup.vue';

export default {
  components: {
    NavigationItem,
    NavigationGroup
  },
  props: {
    type: {
      required: true,
      validator(value) {
        return value === 'sidebar' || value === 'header'
      }
    }
  },
  data() {
    return {
      menu: null
    }
  },
  computed: {
    classes() {
      return {'menu-nav': true, [this.type + '-menu']: true}
    },
    isSidebar() {
      return this.type === 'sidebar'
    }
  },
  created() {
    this.menu = processNav(this.$site.themeConfig.nav, this.$site.pages);
  }
}
</script>

<style src="../styles/nav.styl" />
