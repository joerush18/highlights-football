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
      compId: "",
      loading: false,
      content: {},
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      this.compId = this.$route.params.compId;
      try {
        const res = await Api.post("/post/get-data", {
          id: this.compId,
        });
        const data = res.data;
        this.loading = false;
        return data;
      } catch (error) {
        console.log(error.message);
        this.loading = false;
      }
    },
  },
  created() {
    this.$watch(
      () => this.$route.params,
      async () => {
        const data = await this.fetchData();
        console.log(data.allData.dataItems);
        this.content = data.allData.dataItems;
      },
      { immediate: true }
    );
  },
};
</script>
