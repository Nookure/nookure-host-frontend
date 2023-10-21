<script lang="ts" setup>
const { t } = useI18n();

const performance = {
  name: "Performance",
  url: "/minecraft/performance",
  image: "/resources/performance.png",
};

useHead({
  title: t("products.meta.title"),
  meta: [
    {
      name: "description",
      content: t("products.meta.description"),
    },
  ],
});
</script>

<template>
  <header class="text-center pulse xl:text-7xl md:text-6xl text-4xl my-8">
    <h1 v-html="$t('categories.header')" />
  </header>

  <section class="flex justify-center mt-24 flex-wrap gap-4 my-16">
    <Plan :plan="performance">
      <span v-html="$t('categories.performance.description')" />
    </Plan>
  </section>
</template>
