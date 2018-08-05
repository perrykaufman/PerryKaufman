<template>
  <li class="menu-group" :class="{'menu-sub-list-open': subListOpen}">
    <div class="menu-item" :class="{current: isCurrent}">
      <router-link class="menu-link" :to="group.link">{{group.title}}</router-link>
      <button class="sub-menu-icon" @click="toggle">Toggle Sub-Menu</button>
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
import {isParentPage} from './util.js';

export default {
  components: {
    NavigationItem
  },
  props: {
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
  computed: {
    isCurrent() {
      return isParentPage(this.group.link, this.$page);
    }
  },
  methods: {
    toggle() {
      this.subListOpen = !this.subListOpen;
    }
  }
};
</script>