<template>
  <div class="m-5">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="product in products" :key="product.id">
        <Products :detail="false" :product="product" />
      </div>
    </div>
    <div class="text-center" v-if="products.length === 0">
      <h2 class="text-2xl">{{ noProductLabel }}</h2>
    </div>
  </div>
</template>

<script>
import Products from '../Products';
import { getByTitle } from '@/assets/filters';

export default {
  name: 'productsList',

  components: {
    Products
  },

  data () {
    return {
      id: '',
      noProductLabel: 'No product found'
    };
  },

  computed: {
    products () {
      const {
        api_products,
        userInfo: {
          hasSearched
        }
      } = this.$store.state

      console.log(api_products)

      if (hasSearched) {
        return this.getProductByTitle();
      } else {
        return api_products;
      }
    }
  },

  methods: {
    getProductByTitle () {
      const {
        api_products,
        userInfo: {
          productTitleSearched
        }
      } = this.$store.state

      return getByTitle(api_products, productTitleSearched);
    }
  }

};
</script>
