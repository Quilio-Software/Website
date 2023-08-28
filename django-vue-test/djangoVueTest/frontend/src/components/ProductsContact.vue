<script setup>
import EmailForm from './EmailForm.vue';
</script>

<template>
    <section class="w-full bg-gray/900">

        <div class="py-20 px-5 sm:px-10 md:px-32 lg:px-48 gap-20 flex">
            <div class="max-w-[50%]">
                <h3
                    class="mb-8 font-avenir text-5xl font-medium leading-[4rem] bg-gradient-2 bg-clip-text text-transparent">
                    Don’t
                    see a tool you can add to your arsenal? Let us
                    know what we can build for you.
                </h3>
                <div class="mb-20 h-1.5 w-64 bg-primary/400 rounded-full"></div>
                <div>
                    <p class="mb-10 font-poppins text-2xl font-normal leading-9 text-gray/50">We aim to please. We go above
                        and
                        beyond
                        to ensure
                        that you have the right tools at the right time for your musical creativity and production needs.
                    </p>
                    <p class="font-poppins text-2xl font-normal leading-9 text-gray/50">Intrigued enough? Let’s have a
                        conversation about
                        your next big idea.</p>
                </div>
            </div>

            <EmailForm />
        </div>

    </section>
</template>