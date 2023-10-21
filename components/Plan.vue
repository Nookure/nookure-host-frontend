<script lang="ts" setup>
import type Plan from "~/interfaces/plan";

defineProps({
  plan: {
    type: Object as PropType<Plan>,
    required: true,
  },
});
</script>

<template>
  <div class="max-w-sm min-w-[24rem] border rounded-lg shadow bg-gray-800 border-gray-700">
    <img
      v-if="plan.image"
      class="rounded-t-lg max-h-[180px] object-cover object-center w-full"
      :src="plan.image"
      alt=""
    />

    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
        {{ plan.name }}
      </h5>
      <p class="mb-3 font-normal text-gray-400">
        <span v-if="plan.description">
          {{ $t(plan.description) }}
        </span>
        
        <slot />
      </p>
      <nuxt-link
        :to="plan.url"
        :target="plan.blank ? '__blank' : ''"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-cente rounded-lg focus:ring-4 focus:outline-none bg-cyan-600 hover:bg-cyan-500 focus:ring-cyan-700 transition-all duration-500"
      >
        {{ $t("go") }}
        <svg
          class="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>