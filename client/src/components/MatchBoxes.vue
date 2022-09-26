<template>
  <div class="rounded shadow-md p-4 mx-4 mb-6">
    <router-link
      :to="{
        name: 'watch',
        params: { matchId: contents.id, link: contents.link },
      }"
    >
      <div class="flex justify-between items-center">
        <img
          :src="
            require(`../assets/${contents.competitionName
              .replaceAll(/\s/g, '')
              .toLowerCase()}.png`)
          "
          alt="L"
          class="h-8 w-8 shadow-md rounded-md p-[4px]"
        />
        <p class="text-xs font-bold text-gray-400">{{ contents.matchTime }}</p>
      </div>

      <p class="text-cyan-900 opacity-90 font-bold text-xl mt-2">
        {{ contents.scoreline }}
      </p>
      <p class="text-sm font-bold text-gray-400">
        {{ contents.competitionName }}
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    contents: Object,
  },
};
</script>
