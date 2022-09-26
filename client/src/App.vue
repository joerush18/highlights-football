<template>
  <div>
    <div class="sticky top-0 z-20 shadow-md">
      <Header />
      <NavItems />
    </div>
    <div>
      <router-view />
      <!-- Lists of Recent Games -->
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import NavItems from "./components/NavItems.vue";
export default {
  name: "App",
  components: {
    Header,
    NavItems,
  },
};
</script>
