<template>
  <div>
    <div class="h-[80vh] flex justify-left relative">
      <div class="w-[300px] py-8 px-2 hidden lg:flex flex-col">
        <ul>
          <li
            v-for="compt in competitions"
            :key="compt.compCode"
            class="list-buttons"
          >
            <router-link
              :to="{
                name: 'compt',
                params: { compId: compt.compCode },
              }"
              class="flex items-center space-x-2 justify-center"
            >
              <img
                :src="require(`../assets/${compt.imageLink}`)"
                alt="L"
                class="h-8 w-8 p-[4px]"
              />
              <p>{{ compt.name }}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div v-if="isLoading" class="m-auto">
        <MoonLoader size="100px" color="#164e63" />
      </div>
      <iframe
        v-else
        v-bind:src="wLink"
        frameborder="10px"
        width="100%"
        height="100%"
        class="mt-2 mr-2 rounded-md"
      ></iframe>
    </div>
  </div>
</template>

<script>
import Disclaimer from "../components/Disclaimer.vue";
import { Api } from "../../axios.js";
import MoonLoader from "vue-spinner/src/MoonLoader.vue";
import Data from "../data/data.json";
export default {
  components: {
    Disclaimer,
    MoonLoader,
  },
  data() {
    return {
      isLoading: false,
      wLink: "",
      link: "",
      competitions: {},
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      this.link = this.$route.params.link;
      try {
        const res = await Api.post("/post/get-wlink", {
          link: this.link,
        });
        const data = res.data;
        this.isLoading = false;
        return data;
      } catch (error) {
        console.log(error.message);
        this.isLoading = false;
      }
    },
  },
  async created() {
    const data = await this.fetchData();
    this.wLink = data.wLink;
    this.competitions = Data;
  },
};
</script>
