<template>
    <div>
        <h1>Dummy Data List</h1>
        <ul>
            <li v-for="dataItem in dummyDataList" :key="dataItem.slug">
                {{ dataItem.title }} - {{ dataItem.slug }}
            </li>
        </ul>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            dummyDataList: []
        };
    },
    created() {
        this.fetchDummyData();
    },
    methods: {
        async fetchDummyData() {
            try {
                const response = await axios.get('http://localhost:8000/api/dummy-data');
                this.dummyDataList = response.data;
            } catch (error) {
                console.error('Error fetching dummy data:', error);
            }
        }
    }
};
</script>