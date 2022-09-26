<template>
  <div>
    <div v-if="loading" class="flex justify-center items-center mt-60">
      <DotLoader size="200px" color="#164e63" />
    </div>
    <div v-else class="mt-4 grid md:grid-cols-2 lg:grid-cols-3 m-auto">
      <li
        v-for="item in content"
        :key="item.id"
        class="list-none font-bold cursor-pointer hover-effect"
      >
        <MatchBoxes :contents="item" />
      </li>
    </div>
  </div>
</template>

<script>
import MatchBoxes from "../components/MatchBoxes.vue";
import DotLoader from "vue-spinner/src/DotLoader.vue";
import { Api } from "../../axios.js";
export default {
  components: {
    MatchBoxes,
    DotLoader,
  },
  data() {
    return {
      loading: false,
      content: [],
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const res = await Api.get("/get-data");
        const data = res.data;
        this.loading = false;
        return data;
      } catch (error) {
        console.log(error.message);
        this.loading = false;
      }
    },
  },
  async created() {
    const data = await this.fetchData();
    this.content = data.data.dataItems;
  },
};
</script>
