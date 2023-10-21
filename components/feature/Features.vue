<template>
  <div
    class="bg-stone-800 grid md:grid-cols-3 lg:grid-cols-4 mt-96 auto-rows-max m-4 pb-4 rounded-lg"
    id="features"
  >
    <Feature v-for="feature in features" :key="feature.title" :icon="feature.icon" :title="feature.title" :description="feature.description" />
  </div>
</template>

<script lang="ts" setup>
interface feature {
  icon: string;
  title: string;
  description: string;
}

const features: feature[] = [
  {
    icon: "i-heroicons-arrow-trending-up",
    title: "index.features.performance.header",
    description: "index.features.performance.description",
  },
  {
    icon: "i-heroicons-shield-check",
    title: "index.features.protection.header",
    description: "index.features.protection.description",
  },
  {
    icon: "i-heroicons-bolt",
    title: "index.features.deployment.header",
    description: "index.features.deployment.description",
  },
  {
    icon: "i-heroicons-chat-bubble-left-right",
    title: "index.features.support.header",
    description: "index.features.support.description",
  },
];
</script>
