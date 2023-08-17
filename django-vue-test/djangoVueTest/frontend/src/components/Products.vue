<template>
    <section class="products-section-container">
        <div class="product-container border-2 border-black m-4" v-for="product in productList" :key="product.slug">
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
            <img src="{{ product.image.url }}" alt="an image of my mate raul">
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            productList: []
        };
    },
    created() {
        this.fetchProducts();
    },
    methods: {
        async fetchProducts() {
            try {
                const response = await axios.get('http://localhost:8000/api/products');
                this.productList = response.data;
            } catch (error) {
                console.error('Error fetching dummy data:', error);
            }
        }
    }
};
</script>