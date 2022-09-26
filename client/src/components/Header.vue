<template>
  <header
    class="bg-white mx-2 flex justify-between items-center border-b-[1px] p-2 space-x-2"
  >
    <router-link to="/">
      <img src="../assets/logo.png" alt="L" class="h-10 w-30 hover-effect"
    /></router-link>

    <div class="hidden md:flex flex-grow justify-center items-center space-x-4">
      <SearchBox />
      <h1
        className="hidden lg:flex text-sm text-pink-500 cursor-pointer font-bold"
      >
        “No one ever drowned in sweat.”
      </h1>
    </div>
    <!-- <p class="text-red-500 text-center font-bold mx-4">Recent</p> -->

    <div class="flex justify-center items-center space-x-4">
      <a href="https://github.com/joerush18" target="_blank" rel="noreferrer">
        <h1 className="hover:underline cursor-pointer font-bold text-md">
          Github
        </h1>
      </a>
      <a href="https://www.buymeacoffee.com/journeyto" class="hidden lg:flex">
        <div className=" text-white rounded-md hover:opacity-80">
          <img
            src="https://raw.githubusercontent.com/joerush18/project-finder/main/public/images/bmc-button.png"
            class="h-8 w-44"
          />
        </div>
      </a>
    </div>
  </header>
</template>

<script>
import SearchBox from "./SearchBox.vue";
export default {
  components: {
    SearchBox,
  },
};
</script>
