<template>
  <div class="cart-popup" :class="{ open: store.openCart }">
    <div class="header">
      <h3>Your Cart ({{ store.cartItems }})</h3>
      <img
        src="~/assets/images/close.svg"
        @click="store.cartToggle(false)"
        class="close-btn"
      />
    </div>
    <ul class="product-list">
      <li v-for="item in store.cart" :key="item.id">
        <div class="image-container">
          <img :src="item.image" alt="item.title" />
        </div>
        <div class="product-info">
          <h3 class="title">{{ item.title }}</h3>
          <p><b>Quantity:</b> {{ item.quantity }}</p>
          <div class="price">
            <p>${{ item.price }}</p>
            <p @click="store.removeFromCart(item.id)">Remove</p>
          </div>
        </div>
      </li>
    </ul>
    <hr v-if="store.cart.length" />
    <div class="total-price">
      <p>Total</p>
      <p>${{ store.cartTotal.toFixed(2) }}</p>
    </div>
    <button class="checkout-btn primary-bg-color">Continue to Checkout</button>
  </div>
</template>
<script setup lang="ts">
const store = useAppStore();
</script>
<style lang="scss" scoped>
.cart-popup {
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 100vh;
  background-color: #fff;
  transform: translateX(100%);
  transition: transform 0.1s ease-in-out;
  padding: 16px;
  &.open {
    transform: translateX(0);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  }

  .product-list {
    list-style: none;
    padding: 0;
    margin-top: 24px;
    li {
      display: flex;
      gap: 24px;
      margin-bottom: 24px;
      .image-container {
        min-width: 100px;
        height: 100px;
        border-radius: 6px;
        border: 1px solid #ddd;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 70px;
          width: 70px;
          background-size: contain;
        }
      }
      .title {
        margin: 0;
      }
      .product-info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        p {
          margin: 0;
        }
        .price {
          display: flex;
          justify-content: space-between;
          p {
            &:last-child {
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  .total-price {
    font-size: 22px;
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
  }

  .checkout-btn {
    text-align: center;
    border-radius: 8px;
    padding: 10px;
    color: #fff;
    border: 0;
    height: 50px;
    width: 100%;
    cursor: pointer;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    border-bottom: 1px solid #eee;
    .close-btn {
      cursor: pointer;
      width: 14px;
    }
  }

  .list {
    padding: 16px;

    li {
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
