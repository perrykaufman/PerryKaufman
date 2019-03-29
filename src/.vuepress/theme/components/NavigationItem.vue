<template>
  <li class="menu-item" :class="{ current: isCurrent }">
    <router-link
      class="menu-link"
      :to="item.link"
      @click.native="closeSidebar"
      >{{ item.title }}</router-link
    >
  </li>
</template>

<script>
import store from "../store";
import { isPage, isParentPage } from "../lib/util.js";

export default {
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  computed: {
    isCurrent() {
      return (
        isPage(this.item.link, this.$page) ||
        isParentPage(this.item.link, this.$page)
      );
    }
  },
  methods: {
    closeSidebar() {
      store.$emit("close-sidebar");
    }
  }
};
</script>

<style></style>
