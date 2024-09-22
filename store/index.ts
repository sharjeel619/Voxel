import type { Product, Cart } from "~/types";
// For some reason pinia-plugin-persistedstate doesn't install via npm, hence can't persist data to localstorage.
export const useStore = defineStore("mainStore", () => {
  const cart = ref<Cart[]>([]);
  const openCart = ref<boolean>(false);
  const cartItems = computed(() => cart.value.length);
  const cartTotal = computed(() =>
    cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );
  const addToCart = (product: Cart) => {
    const item = cart.value.find((item: Product) => item.id === product.id);
    if (item) {
      cart.value = cart.value.map((item: Cart) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
    cartToggle(true);
  };
  const removeFromCart = (id: number) => {
    cart.value = cart.value.filter((item: Product) => item.id !== id);
  };
  const cartToggle = (visibility: boolean) => {
    openCart.value = visibility;
  };
  return {
    cart,
    openCart,
    cartItems,
    cartTotal,
    cartToggle,
    addToCart,
    removeFromCart,
  };
});
