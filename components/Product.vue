<template>
  <div class="product">
    <div class="image-container">
      <img :src="info.image" :alt="info.title" />
    </div>
    <div class="info">
      <p>{{ info.title }}</p>
      <p class="secondary-color">${{ info.price }}</p>
    </div>
    <button @click="addItemToCart">&plus; Add to Cart</button>
  </div>
</template>
<script setup lang="ts">
const props = defineProps(["info"]);

const store = useAppStore();

function addItemToCart() {
  store.addToCart(props.info);
}
</script>
<style scoped lang="scss">
.product {
  border: 1px solid #efefef;
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .info {
    margin-top: 24px;
  }
  .image-container {
    display: flex;
    justify-content: center;
    overflow: hidden;
    img {
      background-size: cover;
      height: 280px;
    }
  }
  button {
    margin-top: 16px;
    background: #f4f4f4;
    height: 50px;
    padding: 16px 20px 16px 16px;
    border-radius: 12px;
    cursor: pointer;
    width: 100%;
    border-color: transparent;
  }
}
</style>
