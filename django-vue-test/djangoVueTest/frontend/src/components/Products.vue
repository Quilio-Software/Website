<template>
    <section class="products-section-container">
        <div class="product-container border-2 border-black m-4" v-for="product in productList" :key="product.slug">
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
            <img :src="'http://localhost:8000/' + product.image" alt="...">
            <div v-if="product.audio_demo.length">
                <h4>Audio Demos:</h4>
                <ul>
                    <li v-for="(audioDemo, index) in product.audio_demo" :key="index">
                        <h5>Original:</h5>
                        <audio controls>
                            <source :src="'http://localhost:8000/' + audioDemo.original_file" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                        <h5>Processed:</h5>
                        <audio controls>
                            <source :src="'http://localhost:8000/' + audioDemo.processed_file" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                    </li>
                </ul>
            </div>
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
                const response = await axios.get('http://localhost:8000/' + 'api/products');
                this.productList = response.data;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }
};
</script>