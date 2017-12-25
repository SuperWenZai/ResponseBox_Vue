<template>

  <div id="app">

    <m-nav :items="items"></m-nav>

    <router-view></router-view>

  </div>

</template>


<script>

import mNav from "@/components/nav/nav.vue"
import navItems from "./rebox.json"

export default {
  name: 'app',
  components: {
    mNav,
  },
  data() {
    return {
      selectId: 0,
      items : [],
    }
  },
  created() {
    this.items = navItems.navItem;
    console.log("-----------" + Object.keys(navItems.navItem) + "-----------");
    let item = Object.keys(navItems.navItem);
    for (let i in item) {
      console.log(i)
    }
  }
}

</script>


