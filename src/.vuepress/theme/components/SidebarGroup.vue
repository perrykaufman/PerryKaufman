<template>
  <li class="sidebar-item" :class="{ current: isCurrent }">
    <h3 v-if="group.title" class="sidebar-group-header">{{ group.title }}</h3>
    <ul class="sidebar-sub-list">
      <template v-for="item in group.children">
        <sidebar-item :item="item" />
      </template>
    </ul>
  </li>
</template>

<script>
import SidebarItem from "./SidebarItem.vue";

export default {
  components: {
    SidebarItem
  },
  props: {
    group: {
      required: true,
      type: Object,
      validator(group) {
        return (
          typeof group.title == "string" && group.children instanceof Array
        );
      }
    }
  },
  computed: {
    isCurrent() {
      return false;
    }
  }
};
</script>
