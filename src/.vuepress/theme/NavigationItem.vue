<template>
  <li class="menu-item" :class="{current: isCurrent}">
    <router-link class="menu-link" :to="item.link" @click.native="closeSidebar">{{item.title}}</router-link>
  </li>
</template>

<script>
import EventBus from './EventBus.js';
import {isPage, isParentPage} from './util.js';

export default {
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  data() {
    return {

    }
  },
  computed: {
    isCurrent() {
      return isPage(this.item.link, this.$page) || isParentPage(this.item.link, this.$page);
    }
  },
  methods: {
    closeSidebar() {
      EventBus.$emit('close-sidebar');
    }
  }
}
</script>

<style>

</style>
