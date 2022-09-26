<template>
  <ul
    class="flex space-x-8 text-center border-b-[1px] p-4 justify-center bg-white"
  >
    <li class="hover-effect" v-for="compt in competitions" :key="compt.compId">
      <router-link
        :to="{
          name: 'compt',
          params: { compId: compt.compCode },
        }"
        ><img
          :src="require(`../assets/${compt.imageLink}`)"
          alt="L"
          class="h-6 w-6"
      /></router-link>
    </li>
  </ul>
</template>

<script>
import Data from "../data/data.json";
export default {
  data() {
    return {
      competitions: {},
    };
  },

  created() {
    this.competitions = Data;
  },
};
</script>
