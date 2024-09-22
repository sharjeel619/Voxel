<template>
  <div class="categories">
    <p
      class="secondary-color"
      v-for="category in categories"
      :key="category"
      @click="onSelectedCategory(category)"
    >
      {{ category }}
    </p>
  </div>
</template>
<script setup lang="ts">
defineProps(["categories"]);
const emit = defineEmits(["selectedCategory"]);

function onSelectedCategory(category: string) {
  emit("selectedCategory", category);
}
</script>
<style scoped lang="scss">
.categories {
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #eee;
  padding: 12px 0 12px 60px;
  p {
    text-transform: capitalize;
    cursor: pointer;
    font-weight: 600;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: -12px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #111;
      transition: width 0.3s ease-in-out;
    }
    &:hover::after {
      width: 100%;
    }
  }
}
</style>
