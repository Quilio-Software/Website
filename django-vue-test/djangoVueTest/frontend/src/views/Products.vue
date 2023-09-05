<template>
    <div ref="container">
        <Products :category="currentCategory" />
        <ProductsContact />
    </div>
</template>  

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Products from '../components/Products.vue';
import ProductsContact from '../components/ProductsContact.vue'
//globalAnimations.js
import { pageTransition } from '../composables/globalAnimations';

const route = useRoute();
const currentCategory = ref(route.params.category);

const container = ref(null);

pageTransition(container);

</script>