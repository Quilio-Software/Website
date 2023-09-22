<template>
    <!-- ========================================================================================== -->
    <!-- OUTER CONTAINER max-w-2xl -->
    <!-- ========================================================================================== -->
    <div class="email-form-container h-fit w-full bg-surface/primary rounded-lg overflow-hidden">
        <!-- ========================================================================================== -->
        <!-- INNER CONTAINER -->
        <!-- ========================================================================================== -->
        <div class="p-6 sm:p-12 md:p-8 lg:p-10 ease duration-300">
            <form class="w-full flex flex-col gap-6 sm:gap-8 ease duration-300" @submit.prevent="submitForm">
                <!-- ========================================================================================== -->
                <!-- ROW 1 - name, email -->
                <!-- ========================================================================================== -->
                <div class="w-full flex gap-6 sm:gap-8 ease duration-300">
                    <!-- ========================================================================================== -->
                    <!-- NAME CONTAINER -->
                    <!-- ========================================================================================== -->
                    <div class="max-w-1/2 flex flex-col gap-3 sm:gap-4 flex-grow overflow-hidden">
                        <!-- ========================================================================================== -->
                        <!-- LABEL -->
                        <!-- ========================================================================================== -->
                        <label
                            class="font-poppins text-base sm:text-xl md:text-lg lg:text-xl font-light text-gray/50 ease duration-300"
                            for="name">Name
                            *</label>
                        <!-- ========================================================================================== -->
                        <!-- FORM INPUT -->
                        <!-- ========================================================================================== -->
                        <input placeholder="John Doe"
                            class="text-base h-8 sm:h-9 border-1 hover:border-2 border-primary/400 focus:border-secondary/700-main text-gray/50 bg-surface/secondary rounded-md ease duration-100"
                            type="text" id="name" v-model="form.name" required>
                    </div>

                    <!-- ========================================================================================== -->
                    <!-- EMAIL CONTAINER -->
                    <!-- ========================================================================================== -->
                    <div class="max-w-1/2 flex flex-col gap-3 sm:gap-4 flex-grow overflow-hidden ease duration-300">
                        <!-- ========================================================================================== -->
                        <!-- LABEL -->
                        <!-- ========================================================================================== -->
                        <label
                            class="font-poppins text-base sm:text-xl md:text-lg lg:text-xl font-light text-gray/50 ease duration-300"
                            for="email">Email
                            *</label>
                        <!-- ========================================================================================== -->
                        <!-- FORM INPUT -->
                        <!-- ========================================================================================== -->
                        <input placeholder="johndoe@site.com"
                            class="text-base h-8 sm:h-9 border-1 hover:border-2 border-primary/400 focus:border-secondary/700-main text-gray/50 bg-surface/secondary rounded-md ease duration-100"
                            type="email" id="email" v-model="form.email" required>
                    </div>
                </div>

                <!-- ========================================================================================== -->
                <!-- ROW 2 - phone PHONE CONTAINER -->
                <!-- ========================================================================================== -->
                <div class="flex flex-col gap-3 sm:gap-4 duration-300">
                    <!-- ========================================================================================== -->
                    <!-- LABEL -->
                    <!-- ========================================================================================== -->
                    <label
                        class="font-poppins text-base sm:text-xl md:text-lg lg:text-xl font-light text-gray/50 duration-300"
                        for="phone">Phone</label>
                    <!-- ========================================================================================== -->
                    <!-- FORM INPUT -->
                    <!-- ========================================================================================== -->
                    <input placeholder="1234567890"
                        class="text-base h-8 sm:h-9 border-1 hover:border-2 border-primary/400 focus:border-secondary/700-main text-gray/50 bg-surface/secondary rounded-md ease duration-100"
                        type="tel" id="phone" v-model="form.phone">
                </div>

                <!-- ========================================================================================== -->
                <!-- ROW 3 - message MESSAGE CONTAINER -->
                <!-- ========================================================================================== -->
                <div class="flex flex-col gap-3 sm:gap-4 duration-300">
                    <!-- ========================================================================================== -->
                    <!-- FORM INPUT -->
                    <!-- ========================================================================================== -->
                    <label
                        class="font-poppins text-base sm:text-xl md:text-lg lg:text-xl font-light text-gray/50 duration-100"
                        for="message">Message</label>
                    <textarea placeholder="Some text over here"
                        class="h-28 border-1 hover:border-2 border-primary/400 focus:border-secondary/700-main text-gray/50 bg-surface/secondary rounded-md"
                        id="message" v-model="form.message"></textarea>
                </div>

                <!-- ========================================================================================== -->
                <!-- ROW 4 - terms, send btn -->
                <!-- ========================================================================================== -->
                <div class="flex justify-between items-center gap-6">
                    <!-- ========================================================================================== -->
                    <!-- TERMS & CONDITIONS CONTAINER -->
                    <!-- ========================================================================================== -->
                    <div class="flex flex-col sm:flex-row gap-2 sm:items-center duration-300">
                        <input
                            class="w-5 h-5 border-1 hover:border-2 border-primary/400 focus: checked:bg-primary/400 focus:ring-primary/400 bg-surface/secondary rounded-md"
                            type="checkbox" id="acceptTerms" v-model="form.accept_terms" required>
                        <label class="font-poppins text-sm font-light text-gray/50 duration-300" for="acceptTerms">I agree
                            with <a class="text-secondary/700-main" href="...">terms</a></label>
                    </div>

                    <!-- ========================================================================================== -->
                    <!-- BUTTON -->
                    <!-- ========================================================================================== -->
                    <button
                        class="h-10 sm:h-12 w-20 sm:w-40 lg:w-44 bg-primary/400 rounded-md font-light font-poppins text-base lg:text-lg text-gray/50 duration-300"
                        type="submit">Send
                        <span class="hidden sm:inline">Message</span></button>
                </div>
            </form>
        </div>
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