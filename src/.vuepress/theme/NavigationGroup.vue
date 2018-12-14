<template>
  <li class="menu-group" :class="{'menu-sub-list-open': subListOpen}">
    <div class="menu-item" :class="{current: isCurrent}">
      <router-link class="menu-link" :to="group.link">{{group.title}}</router-link>
      <button class="sub-menu-icon" @click="toggle" v-if="sidebar">Toggle Sub-Menu</button>
    </div>
    <ul class="menu-sub-list">
      <template v-for="item in group.children">
        <navigation-item :item="item" />
      </template>
    </ul>
  </li>
</template>

<script>
import NavigationItem from './NavigationItem.vue';
import { isParentPage } from './scripts/util.js';

export default {
  components: {
    NavigationItem
  },
  props: {
    sidebar: {
      required: true,
      type: Boolean
    },
    group: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      subListOpen: false
    }
  },
  methods: {
    toggle() {
      this.subListOpen = !this.subListOpen;
    }
  },
  computed: {
    isCurrent() {
      return isParentPage(this.group.link, this.$page);
    }
  }
};
</script>