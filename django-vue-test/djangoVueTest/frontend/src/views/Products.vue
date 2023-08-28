<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Products from '../components/Products.vue';
import ProductsContact from '../components/ProductsContact.vue'

const route = useRoute();
const currentCategory = ref(route.params.category);

</script>

<template>
    <div>
        <Products :category="currentCategory" />
        <ProductsContact />
    </div>
</template>
  