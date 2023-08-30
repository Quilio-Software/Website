<template>
    <div class="email-form-container max-w-2xl bg-surface/primary rounded-lg">
        <form class="m-10 flex flex-col gap-8" @submit.prevent="submitForm">
            <div class="flex gap-8">
                <div class="w-1/2 flex flex-col gap-4">
                    <label class="font-poppins text-2xl font-light text-gray/50" for="name">Name *</label>
                    <input placeholder="John Doe"
                        class="h-10 w-64 border-1 border-primary/400 bg-surface/secondary rounded-md" type="text" id="name"
                        v-model="form.name" required>
                </div>

                <div class="w-1/2 flex flex-col gap-4">
                    <label class="font-poppins text-2xl font-light text-gray/50" for="email">Email *</label>
                    <input placeholder="johndoe@site.com"
                        class="h-10 w-64 border-1 border-primary/400 bg-surface/secondary rounded-md" type="email"
                        id="email" v-model="form.email" required>
                </div>
            </div>

            <div class="flex flex-col gap-4">
                <label class="font-poppins text-2xl font-light text-gray/50" for="phone">Phone</label>
                <input placeholder="1234567890" class="h-10 border-1 border-primary/400 bg-surface/secondary rounded-md"
                    type="tel" id="phone" v-model="form.phone">
            </div>

            <div class="flex flex-col gap-4">
                <label class="font-poppins text-2xl font-light text-gray/50" for="message">Message</label>
                <textarea placeholder="Some text over here"
                    class="h-28 border-1 border-primary/400 bg-surface/secondary rounded-md" id="message"
                    v-model="form.message"></textarea>
            </div>

            <div class="flex justify-between items-center">
                <div class="flex gap-2">
                    <input class="w-5 h-5 border-1 border-primary/400 bg-surface/secondary rounded-md" type="checkbox"
                        id="acceptTerms" v-model="form.accept_terms" required>
                    <label class="font-poppins text-base font-light text-gray/50" for="acceptTerms">I agree with <a
                            class="text-secondary/700-main" href="...">terms</a></label>
                </div>

                <button class="h-14 w-52 bg-primary/400 rounded-md font-light font-poppins text-xl text-gray/50"
                    type="submit">Send
                    Message</button>
            </div>
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