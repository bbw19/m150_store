<template>
  <div>
    <VmSubheader />
    <VmProductsList />
  </div>
</template>

<script>
import VmProductsList from '@/components/products_list/ProductsListContainer';
import VmHero from '@/components/hero/Hero';
import VmSubheader from '@/components/subheader/Subheader';
import { mapState } from 'vuex';

export default {
  name: 'index',
  components: {
    VmProductsList,
    VmHero,
    VmSubheader
  },

  data() {
    return {
      text: ''
    }
  },

  computed: mapState(['loading', 'ip']),

  watch: {
    loading() {
      if (!this.loading) {
        console.log('whatup')
        this.transformData();
      }
    }
  },

  mounted() {
    this.$store.dispatch('loadData')
    console.log('Hello')
    console.log(this.$store.getters.getApiProducts)
    console.log('Dolly')
  },

  methods: {
    transformData() {
      console.log(this.$store.getters.getApiProducts)
    }
  }
};
</script>
