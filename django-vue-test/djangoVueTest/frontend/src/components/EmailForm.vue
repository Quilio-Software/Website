<template>
    <div class="email-form-container border-2 border-black">
        <form @submit.prevent="submitForm">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="form.name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" v-model="form.email" required>

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" v-model="form.phone">

            <label for="message">Message:</label>
            <textarea id="message" v-model="form.message"></textarea>

            <label for="acceptTerms">Accept Terms:</label>
            <input type="checkbox" id="acceptTerms" v-model="form.accept_terms" required>

            <button type="submit">Submit</button>
        </form>
    </div>
</template>
  
<script>
import axios from 'axios';
import { set, get } from 'vue-cookies';

export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                message: '',
                accept_terms: false
            }
        };
    },
    methods: {
        async submitForm() {
            try {
                const csrfToken = get('csrftoken');

                console.log(this.form);

                await axios.post('http://localhost:8000/api/emailForm', this.form, {
                    headers: { 'X-CSRFToken': csrfToken },
                    withCredentials: true
                });
                alert('Form submitted successfully!');
                this.clearForm();
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('An error occurred. Please try again later.');
            }
        },
        clearForm() {
            this.form = {
                name: '',
                email: '',
                phone: '',
                message: '',
                accept_terms: false
            };
        }
    },
};
</script>

<style>
input,
textarea {
    border: 2px solid black
}
</style>