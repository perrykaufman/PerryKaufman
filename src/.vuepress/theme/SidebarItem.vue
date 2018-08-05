<template>
  <li class="sidebar-item" :class="{current: isCurrent}">
    <router-link class="sidebar-link" :to="item.link">{{item.title}}</router-link>
  </li>
</template>

<script>
import {isPage} from './util.js';

export default {
  props: {
    item: {
      required: true,
      type: Object,
      validator(item) {
        return typeof item.title == 'string'
          && typeof item.link == 'string';
      }
    }
  },
  computed: {
      isCurrent() {
        return isPage(this.item.link, this.$page);
      }
    }
}
</script>
