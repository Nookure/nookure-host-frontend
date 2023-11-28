<script lang="ts" setup>
import type PlanType from "../../../interfaces/plan";
const { t } = useI18n();

const starter = {
  name: "Starter",
  image: "/resources/starter.jpeg",
  url: "https://billing.nookure.host/checkout/config/5",
  blank: true,
  price: 8,
  discount: 50,
  monthly: true,
} as PlanType;

const basic = {
  name: "Basic",
  image: "/resources/basic.jpeg",
  url: "https://billing.nookure.host/checkout/config/6",
  blank: true,
  price: 12,
  discount: 50,
  monthly: true,
} as PlanType;

const premium = {
  name: "Premium",
  image: "/resources/premium.jpeg",
  url: "https://billing.nookure.host/checkout/config/7",
  blank: true,
  price: 16,
  discount: 50,
  monthly: true,
} as PlanType;

const ultimate = {
  name: "Ultimate",
  image: "/resources/ultimate.jpeg",
  url: "https://billing.nookure.host/checkout/config/8",
  blank: true,
  price: 20,
  discount: 50,
  monthly: true,
} as PlanType;

const extreme = {
  name: "Extreme",
  image: "/resources/extreme.png",
  url: "https://billing.nookure.host/checkout/config/9",
  blank: true,
  price: 24,
  discount: 50,
  monthly: true,
} as PlanType;

const network = {
  name: "Network",
  image: "/resources/network.png",
  url: "https://billing.nookure.host/checkout/config/10",
  blank: true,
  price: 32,
  discount: 50,
  monthly: true,
} as PlanType;

const ultra = {
  name: "Ultra",
  image: "/resources/ultra.jfif",
  url: "https://billing.nookure.host/checkout/config/11",
  blank: true,
  price: 40,
  discount: 50,
  monthly: true,
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
    <h1 v-html="$t('categories.budget.header')" />
  </header>

  <section class="flex justify-center mt-24 flex-wrap gap-4 my-16">
    <Plan :plan="starter">
      <span v-html="$t('categories.budget.starter.description')" />
    </Plan>

    <Plan :plan="basic">
      <span v-html="$t('categories.budget.basic.description')" />
    </Plan>

    <Plan :plan="premium">
      <span v-html="$t('categories.budget.premium.description')" />
    </Plan>

    <Plan :plan="ultimate">
      <span v-html="$t('categories.budget.ultimate.description')" />
    </Plan>

    <Plan :plan="extreme">
      <span v-html="$t('categories.budget.extreme.description')" />
    </Plan>

    <Plan :plan="network">
      <span v-html="$t('categories.budget.network.description')" />
    </Plan>

    <Plan :plan="ultra">
      <span v-html="$t('categories.budget.ultra.description')" />
    </Plan>
  </section>

  <div class="m-4 flex justify-center">
    <UCard class="max-w-2xl self-center">
      <p
        class="text-center text-gray-400"
        v-html="$t('categories.budget.info')"
      />
    </UCard>
  </div>
</template>
