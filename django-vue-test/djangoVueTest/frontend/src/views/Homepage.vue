<script setup>
import EmailForm from '../components/EmailForm.vue';
</script>

<template>
    <!-- HERO SECTION -->
    <section class="relative h-[962px] w-full flex justify-center items-center overflow-hidden bg-black">
        <div class="z-10 flex flex-col justify-center items-center gap-8">
            <h3 class="text-center text-7xl font-sans font-bold tracking-wide text-gray/50">Building for the future, today.
            </h3>
            <h5
                class="text-center font-avenir text-3xl font-medium tracking-wide bg-surface/sunrise bg-clip-text text-transparent">
                Audio engineering
                solutions
                made by engineers, for artists</h5>
        </div>
        <img class="absolute h-full min-w-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-2/4 object-cover opacity-70"
            src="../assets/img/homepage/hero/banner/hero-section-banner.png" alt="hero section banner image">
    </section>

    <!-- WHAT WE DO -->
    <section class="w-full h-60 flex justify-center items-center bg-gray/900">
        <h3 class="font-uncut text text-6xl font-semibold tracking-wide text-gray/50">What We Do</h3>
    </section>

    <!-- SERVICES -->
    <section class="w-full flex flex-col items-center bg-gray/900">

        <!-- Audio Signal Processing and Plugins -->
        <div class="w-full">
            <div class="relative my-24 mx-4 md:mx-6 lg:mx-10 xl:mx-32 2xl:mx-44 rounded-lg ease duration-300">

                <img class="absolute top-1/2 -translate-y-1/2 right-0 object-contain"
                    src="../assets/img/homepage/services/audio-signal-processing-and-plugins/audio-signal-processing-and-plugins.svg"
                    alt="audio signal processing and plugins image">

                <div
                    class="relative py-10 px-12 w-full sm:w-4/5 md:w-3/4 backdrop-blur-sm rounded-xl bg-gray/900/25 border border-gray/600">
                    <h5 class="mb-5 sm:mb-10 font-uncut text-2xl sm:text-4xl font-bold text-gray/50 ease duration-300">Audio
                        Signal
                        Processing and
                        Plugins</h5>
                    <div class="mb-5 sm:mb-10 h-1 w-60 bg-primary/400 rounded-full"></div>
                    <p
                        class="font-poppins text-lg sm:text-xl md:text-2xl font-light tracking-wide text-gray/200 ease duration-300">
                        In
                        the world of
                        audio, the right
                        tools don’t just make the job easier </p>
                    <p
                        class="mb-5 sm:mb-10 font-poppins text-lg sm:text-xl md:text-2xl font-light tracking-wide text-gray/200 ease duration-300">
                        - the tool is the job. Our team of experienced developers enable
                        you to do what you do without thinking about it.
                    </p>
                    <div class="flex">
                        <div class="flex flex-col gap-9 mr-10">
                            <div class="flex items-center gap-4">
                                <img class="" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="font-poppins leading-7 font-normal text-lg sm:text-xl md:text-2xl text-gray/50 ease duration-300">
                                    Instrument plugins
                                    for musicians</p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img class="" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="font-poppins leading-7 font-normal text-lg sm:text-xl md:text-2xl text-gray/50 ease duration-300">
                                    Mixing and mastering tools
                                    for recording engineers
                                </p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img class="" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="font-poppins leading-7 font-normal text-lg sm:text-xl md:text-2xl text-gray/50 ease duration-300">
                                    Audio solutions
                                    for businesses
                                </p>
                            </div>
                        </div>
                        <div class="mb-5 sm:mb-10 flex flex-col gap-9">
                            <div class="flex items-center gap-4">
                                <img class="" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="font-poppins leading-7 font-normal text-lg sm:text-xl md:text-2xl text-gray/50 ease duration-300">
                                    Speech processing
                                    software
                                </p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img class="" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="font-poppins leading-7 font-normal text-lg sm:text-xl md:text-2xl text-gray/50 ease duration-300">
                                    Custom-built
                                    audio software
                                </p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img class="" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="font-poppins leading-7 font-normal text-lg sm:text-xl md:text-2xl text-gray/50 ease duration-300">
                                    Noise detection
                                    and reduction tools
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Neuro Engineering Solutions -->
        <div class="w-full flex">
            <div
                class="relative flex justify-end my-24 mx-4 md:mx-6 lg:mx-10 xl:mx-32 2xl:mx-44 rounded-lg ease duration-300">

                <img class="absolute top-1/2 -translate-y-1/2 left-0 object-contain"
                    src="../assets/img/homepage/services/neuro-engineering-solutions/neuro-engineering-solutions.svg"
                    alt="an image of a brain">

                <div class="py-10 px-12 w-full sm:w-4/5 md:w-3/4 backdrop-blur-sm rounded-xl bg-surface/primary/90">

                    <h5 class="mb-5 sm:mb-10 font-uncut text-2xl sm:text-4xl font-bold text-gray/50 ease duration-300">
                        Neuro-Engineering Solutions</h5>
                    <div class="mb-5 sm:mb-10 h-1 w-60 bg-primary/400 rounded-full"></div>

                    <p
                        class="mb-5 sm:mb-10 font-poppins text-lg sm:text-xl md:text-2xl font-light tracking-wide text-gray/200 ease duration-300">
                        Scientists have been trying to unlock the secrets of the brain for generations. We’re not saying
                        we’ve succeeded - but we’re pretty close, and our solutions reflect that.</p>

                    <div class="flex flex-col">
                        <div class="mb-5 sm:mb-10 flex justify-around gap-9">
                            <div class="flex items-center gap-4">
                                <img class="" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="font-poppins leading-7 font-normal text-lg sm:text-xl md:text-2xl text-gray/50 ease duration-300">
                                    Custom-designed
                                    research tools
                                </p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img class="" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="font-poppins leading-7 font-normal text-lg sm:text-xl md:text-2xl text-gray/50 ease duration-300">
                                    Engineering solutions
                                    for research labs
                                </p>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center gap-4">
                                <img class="" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="font-poppins leading-7 font-normal text-lg sm:text-xl md:text-2xl text-gray/50 ease duration-300">
                                    Assistive technologies for people with neurological disorders
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <!-- Custom AI Solutions -->
        <div class="w-full">
            <div class="relative my-24 mx-4 md:mx-6 lg:mx-10 xl:mx-32 2xl:mx-44 rounded-lg ease duration-300">

                <img class="absolute top-1/2 -translate-y-1/2 right-0 object-contain"
                    src="../assets/img/homepage/services/custom-ai-solutions/custom-ai-solutions.svg"
                    alt="custom ai solutions image">

                <div
                    class="relative py-10 px-12 w-full sm:w-4/5 md:w-3/4 backdrop-blur-sm rounded-xl bg-surface/primary/90">
                    <h5 class="mb-5 sm:mb-10 font-uncut text-2xl sm:text-4xl font-bold text-gray/50 ease duration-300">
                        Custom AI Solutions</h5>
                    <div class="mb-5 sm:mb-10 h-1 w-60 bg-primary/400 rounded-full"></div>
                    <p
                        class="mb-5 sm:mb-10 font-poppins text-lg sm:text-xl md:text-2xl font-light tracking-wide text-gray/200 ease duration-300">
                        AI is both the Holy Grail of the Internet and the sign of End Times. We see it exactly as it is
                        though - a tool to make our lives, and by extension, your lives easier. </p>
                    <div class="flex">
                        <div class="flex flex-col gap-9 mr-10">
                            <div class="flex items-center gap-4">
                                <img class="" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="font-poppins leading-7 font-normal text-lg sm:text-xl md:text-2xl text-gray/50 ease duration-300">
                                    Customised NLP models for chatbots
                                </p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img class="" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="font-poppins leading-7 font-normal text-lg sm:text-xl md:text-2xl text-gray/50 ease duration-300">
                                    Object detection and recognition models
                                </p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img class="" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="font-poppins leading-7 font-normal text-lg sm:text-xl md:text-2xl text-gray/50 ease duration-300">
                                    Fraud detection models for financial institutions
                                </p>
                            </div>
                        </div>
                        <div class="mb-5 sm:mb-10 flex flex-col gap-9">
                            <div class="flex items-center gap-4">
                                <img class="" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="font-poppins leading-7 font-normal text-lg sm:text-xl md:text-2xl text-gray/50 ease duration-300">
                                    Predictive maintenance for industrial equipment
                                </p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img class="" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="font-poppins leading-7 font-normal text-lg sm:text-xl md:text-2xl text-gray/50 ease duration-300">
                                    Recommender systems for E-commerce platforms
                                </p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img class="" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="font-poppins leading-7 font-normal text-lg sm:text-xl md:text-2xl text-gray/50 ease duration-300">
                                    and so on...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="flex flex-col items-center bg-gray/900">
        <div class="w-full">
            <div
                class="relative py-16 flex flex-col items-center justify-center my-24 mx-4 md:mx-6 lg:mx-10 xl:mx-32 2xl:mx-44 rounded-lg bg-surface/secondary ease duration-300">

                <h3 class="text-4xl text-center mb-14 font-semibold tracking-wider text-gray/50">Trusted By</h3>

                <!-- TABS -->
                <div class="mb-14 w-11/12 flex justify-center">
                    <div
                        class="w-1/5 h-20 sm:h-28 md:h-36 lg:h-36 xl:h-40 flex justify-center items-center bg-secondary/700-main/10 border-b-8 border-secondary/700-main ease duration-300">
                        <img class="w-3/4" src="../assets/img/nav/logo/full-logo.svg" alt="quillio logo">
                    </div><!-- active -->
                    <div
                        class="w-1/5 h-20 sm:h-28 md:h-36 lg:h-36 xl:h-40 flex justify-center items-center border-b-4 border-b-gray/50 ease duration-300">
                        <img class="w-3/4" src="../assets/img/nav/logo/full-logo.svg" alt="quillio logo">
                    </div>
                    <div
                        class="w-1/5 h-20 sm:h-28 md:h-36 lg:h-36 xl:h-40 flex justify-center items-center border-b-4 border-b-gray/50 ease duration-300">
                        <img class="w-3/4" src="../assets/img/nav/logo/full-logo.svg" alt="quillio logo">
                    </div>
                    <div
                        class="w-1/5 h-20 sm:h-28 md:h-36 lg:h-36 xl:h-40 flex justify-center items-center border-b-4 border-b-gray/50 ease duration-300">
                        <img class="w-3/4" src="../assets/img/nav/logo/full-logo.svg" alt="quillio logo">
                    </div>
                    <div
                        class="w-1/5 h-20 sm:h-28 md:h-36 lg:h-36 xl:h-40 flex justify-center items-center border-b-4 border-b-gray/50 ease duration-300">
                        <img class="w-3/4" src="../assets/img/nav/logo/full-logo.svg" alt="quillio logo">
                    </div>
                </div>

                <!-- QUOTE -->
                <p
                    class="mb-14 italic font-poppins font-medium text-2xl sm:text-3xl tracking-wide text-center text-gray/50">
                    “iawuefh awuieo fhaweioufh awepifhuaw pifuhqwiofuh qw iouefhwe fhqweuiofh
                    qweioufhqwiofuhweoiufhqwoif
                    uh.”
                </p>

                <!-- PERSONA -->
                <div class="flex items-center gap-5">
                    <img src="../assets/img/homepage/testimonials/persona/person.png" alt="persona">
                    <h3 class="font-avenir font-light tracking-wide text-2xl sm:text-3xl text-gray/50">Full Name -
                        Company
                        Name</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- OUR STACK -->
    <section class="flex flex-col items-center bg-gray/900">

        <div class="w-full">
            <div
                class="relative py-16 flex flex-col items-center justify-center my-24 mx-4 md:mx-6 lg:mx-10 xl:mx-32 2xl:mx-44 rounded-lg bg-surface/secondary ease duration-300">

                <h3 class="mb-14 text-4xl text-center font-semibold tracking-wider text-gray/50">Our Tech Stack</h3>

                <!-- Stacks -->
                <div class="flex flex-row justify-center items-center gap-16 md:gap-24">
                    <div class="my-8">
                        <img class="mb-8" src="../assets/img/homepage/tech-stack/c++.png" alt="c++ logo">
                        <h3 class="text-center font-avenir font-light tracking-wide text-2xl sm:text-3xl text-gray/50">C++
                        </h3>
                    </div>
                    <div class="my-8">
                        <img class="mb-8" src="../assets/img/homepage/tech-stack/python.png" alt="python logo">
                        <h3 class="text-center font-avenir font-light tracking-wide text-2xl sm:text-3xl text-gray/50">
                            Python</h3>
                    </div>
                    <div class="my-8">
                        <img class="mb-8" src="../assets/img/homepage/tech-stack/javascript.png" alt="javascript logo">
                        <h3 class="text-center font-avenir font-light tracking-wide text-2xl sm:text-3xl text-gray/50">
                            Javascript</h3>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="w-full bg-surface/secondary">

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