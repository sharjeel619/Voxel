<template>
  <div>
    <NuxtRouteAnnouncer />
    <NavBar />
    <Hero />
    <Cart />
    <Categories
      :categories="categories"
      @selected-category="onSelectedCategory"
    />
    <div class="container">
      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <Product
          v-for="product in products"
          :key="product.id"
          :info="product"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Product } from "./types";

useHead({
  title: "Voxel Store",
  meta: [
    {
      name: "description",
      content: "Voxel Store",
    },
  ],
});
const { data: products } = await useFetch<Product[]>(
  "https://fakestoreapi.com/products"
);
const { data: categories } = await useFetch(
  "https://fakestoreapi.com/products/categories"
);
categories.value = ["all", ...(categories.value as string[])];
async function onSelectedCategory(category: string) {
  if (category === "all") {
    products.value = await $fetch<Product[]>(
      `https://fakestoreapi.com/products`
    );
  } else {
    products.value = await $fetch<Product[]>(
      `https://fakestoreapi.com/products/category/${category}`
    );
  }
}
</script>
<style lang="scss">
.container {
  display: flex;
  justify-content: center;
  padding: 24px;
  max-width: 100% !important;
}
</style>
