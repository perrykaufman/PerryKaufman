<template>
  <aside class="sidebar">
    <navigation-menu class="sidebar-menu"/>
    <div class="sidebar-list-wrapper">
      <h2 class="sidebar-header" v-if="sidebar.title">{{sidebar.title}}</h2>
    <ul class="sidebar-list">
      <template v-for="item in sidebar.items">
        <sidebar-group v-if="item.children" :group="item" />
        <sidebar-item v-else :item="item" />
      </template>
    </ul>
    </div>
  </aside>
</template>

<script>
import NavigationMenu from './NavigationMenu.vue';
import SidebarItem from './SidebarItem.vue';
import SidebarGroup from './SidebarGroup.vue';

export default {
  components: {
    NavigationMenu,
    SidebarItem,
    SidebarGroup
  },
  props: {
    sidebar: {
      required: true,
      type: Object,
      validator(sidebar) {
        return sidebar.items && sidebar.items instanceof Array;
      }
    }
  }
}
</script>

<style src="./styles/sidebar.css" />
