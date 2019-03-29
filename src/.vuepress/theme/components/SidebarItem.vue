<template>
  <li class="sidebar-item" :class="{ current: isCurrent }">
    <router-link
      class="sidebar-link"
      :to="item.link"
      @click.native="closeSidebar"
      >{{ item.title }}</router-link
    >
  </li>
</template>

<script>
import { isPage } from "../scripts/util.js";
import store from "../store";

export default {
  props: {
    item: {
      required: true,
      type: Object,
      validator(item) {
        return typeof item.title == "string" && typeof item.link == "string";
      }
    }
  },
  computed: {
    isCurrent() {
      return isPage(this.item.link, this.$page);
    }
  },
  methods: {
    closeSidebar() {
      store.$emit("close-sidebar");
    }
  }
};
</script>
