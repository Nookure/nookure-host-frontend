<script lang="ts" setup>
import type PlanType from "~/interfaces/plan";
const { t } = useI18n();

const starter = {
  name: "Starter",
  image: "/resources/starter.jpeg",
  url: "https://discord.nookure.host",
  blank: true,
  price: 6,
  discount: 50,
} as PlanType;

const basic = {
  name: "Basic",
  image: "/resources/basic.jpeg",
  url: "https://discord.nookure.host",
  blank: true,
  price: 12,
  discount: 50,
} as PlanType;

const premium = {
  name: "Premium",
  image: "/resources/premium.jpeg",
  url: "https://discord.nookure.host",
  blank: true,
  price: 23,
  discount: 50,
} as PlanType;

const ultimate = {
  name: "Ultimate",
  image: "/resources/ultimate.jpeg",
  url: "https://discord.nookure.host",
  blank: true,
  price: 45,
  discount: 50,
} as PlanType;

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
  <header class="text-center pulse xl:text-7xl md:text-6xl text-4xl mt-8">
    <h1 v-html="$t('categories.performance.header')" />
  </header>

  <section class="flex justify-center mt-24 flex-wrap gap-4 my-16">
    <Plan :plan="starter">
      <span v-html="$t('categories.performance.starter.description')" />
    </Plan>

    <Plan :plan="basic">
      <span v-html="$t('categories.performance.basic.description')" />
    </Plan>

    <Plan :plan="premium">
      <span v-html="$t('categories.performance.premium.description')" />
    </Plan>

    <Plan :plan="ultimate">
      <span v-html="$t('categories.performance.ultimate.description')" />
    </Plan>
  </section>

  <p class="text-center text-stone-500" v-html="$t('categories.performance.info')" />
</template>
