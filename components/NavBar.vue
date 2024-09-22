<template>
  <header class="header">
    <h3>Voxel Store</h3>
    <div class="cart">
      <img
        src="~/assets/images/cart.svg"
        alt="Cart Logo"
        @click="store.cartToggle(true)"
      />
      <span class="number">{{ store.cartItems }}</span>
    </div>
  </header>
</template>
<script setup lang="ts">
const store = useAppStore();
</script>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  .cart {
    position: relative;
    cursor: pointer;
    .number {
      position: absolute;
      top: 0px;
      right: -14px;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      background-color: #f23b3b;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
    }
  }
}
</style>
