<template>
    <section class="products-section-containers w-full flex bg-surface/secondary">
        <!-- <div class="product-container border-2 border-black m-4" v-for="product in filteredProducts" :key="product.slug">
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
        </div> -->

        <!-- TEMPPPP -->
        <div class="my-36 flex flex-row justify-center flex-wrap gap-20">
            <TempProduct />
            <TempProduct />
            <TempProduct />
            <TempProduct />
        </div>

    </section>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { defineProps } from 'vue';

import TempProduct from '../components/TempProduct.vue'

const props = defineProps({
    category: String,
});

const productList = ref([]);

const fetchProducts = async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/products/' + props.category);
        productList.value = response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

onMounted(fetchProducts);

const filteredProducts = computed(() => {
    console.log(productList.value.filter(product => product.category === props.category));
    return productList.value.filter(product => product.category === props.category);
});


//Hover element
const productContainers = document.querySelectorAll('.product-container');
console.log(productContainers);
productContainers.forEach((product) => {
    const imgContainer = product.querySelector('.img-container');
    const audioDemosContainer = product.querySelector('.audio-demos-container');

    imgContainer.addEventListener('hover', () => {
        console.log('img hovered');
        audioDemosContainer.classList.toggle('visible');
        audioDemosContainer.classList.toggle('invisible');
    });
});

</script>
  