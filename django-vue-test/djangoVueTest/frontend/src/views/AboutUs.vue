<script setup>
import EmailForm from '../components/EmailForm.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
    <!-- HERO -->
    <section class="relative w-full h-[680px] flex justify-center items-center bg-surface/secondary">
        <!-- BACKGROUND -->
        <img class="absolute h-full min-w-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-2/4 object-cover opacity-70"
            src="../assets/img/banner.png" alt="hero section banner image">
        <!-- LOGO BIG -->
        <img class="z-10" src="../assets/img/aboutus/logo-big.svg" alt="quillio logo">
    </section>

    <!--  -->
    <section class="flex flex-col items-center bg-surface/secondary">

        <div class="mb-20 mt-24 bg-gradient-2 bg-clip-text flex flex-col gap-6">
            <h3 class="text-center font-avenir font-medium text-6xl text-transparent">
                We’re musicians.
            </h3>
            <h3 class="text-center font-avenir font-medium text-6xl text-transparent">We’re
                engineers. We’re scientists.</h3>
        </div>

        <div class="mb-48 mx-10">
            <p class="mb-10 font-poppins text-2xl font-light tracking-wide text-center text-gray/50">We’re a diverse,
                multicultural and
                multilingual team.
            </p>
            <p class="mb-10 font-poppins text-2xl font-light tracking-wide text-center text-gray/50">Our backgrounds are
                interdisciplinary, and so are the services we provide.
            </p>
            <div class="mb-10">
                <p class="font-poppins text-2xl font-light tracking-wide leading-10 text-center text-gray/50">It goes
                    without saying
                    that we deliver quality services.
                </p>
                <p class="font-poppins text-2xl font-light tracking-wide leading-10 text-center text-gray/50">But we
                    set ourselves apart through clear accountability and
                    communication.
                </p>
            </div>
            <p
                class=" xl:mx-48 2xl:mx-60 font-poppins text-2xl font-light tracking-wide text-center text-gray/50 ease duration-300">
                Our track record speaks for ourselves when it comes to meeting tight deadlines and confidentiality
                requirements for your most ambitious projects.
            </p>
        </div>
    </section>

    <section class="">
        <div class="relative h-[1478px] bg-gradient-to-t from-black from-30% to-transparent to-100%">

            <img class="absolute top-0 left-0 -z-10 h-[1478px] object-cover" src="../assets/img/aboutus/people.jpeg"
                alt="image of people stadning in a room">

            <div class="absolute bottom-0 py-20 px-5 sm:px-10 md:px-32 lg:px-48 gap-20 flex">
                <div class="max-w-[50%]">
                    <h3
                        class="mb-8 font-avenir text-5xl font-medium leading-[4rem] bg-gradient-2 bg-clip-text text-transparent">
                        Don’t
                        see a tool you can add to your arsenal? Let us
                        know what we can build for you.
                    </h3>
                    <div class="mb-20 h-1.5 w-64 bg-primary/400 rounded-full"></div>
                    <div>
                        <p class="mb-10 font-poppins text-2xl font-normal leading-9 text-gray/50">We aim to please. We go
                            above
                            and
                            beyond
                            to ensure
                            that you have the right tools at the right time for your musical creativity and production
                            needs.
                        </p>
                        <p class="font-poppins text-2xl font-normal leading-9 text-gray/50">Intrigued enough? Let’s have a
                            conversation about
                            your next big idea.</p>
                    </div>
                </div>

                <EmailForm />
            </div>
        </div>
    </section>

    <Footer />
</template>