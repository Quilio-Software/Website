<template>
    <div ref="container">
        <!-- HERO SECTION -->
        <section class="relative h-[962px] w-full flex justify-center items-center overflow-hidden bg-black">
            <div ref="heroTitleContainer" class="z-10 flex flex-col justify-center items-center gap-8 cursor-default">
                <h3 class="text-center text-7xl font-sans font-bold tracking-wide text-gray/50">Building for
                    the future, today.
                </h3>
                <h5
                    class="text-center font-avenir text-3xl font-medium tracking-wide bg-surface/sunrise bg-clip-text text-transparent">
                    Audio engineering
                    solutions
                    made by engineers, for artists</h5>
            </div>
            <img ref="heroBg"
                class="absolute h-full min-w-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-2/4 object-cover opacity-70"
                src="../assets/img/banner.png" alt="hero section banner image">
        </section>

        <!-- WHAT WE DO -->
        <section ref="whatWeDoContainer" class="w-full h-60 flex justify-center items-center bg-gray/900">
            <h3 ref="whatWeDoTitle" class="font-uncut text text-6xl font-semibold tracking-wide text-gray/50">What We Do
            </h3>
        </section>

        <!-- SERVICES -->
        <section ref="services" class="w-full flex flex-col items-center bg-gray/900">

            <!-- Audio Signal Processing and Plugins -->
            <div ref="s1" class="w-full">
                <div class="relative my-24 mx-4 md:mx-6 lg:mx-10 xl:mx-32 2xl:mx-44 rounded-lg ease duration-300">

                    <img ref="s1Img" class="absolute top-1/2 -translate-y-1/2 right-0 object-contain"
                        src="../assets/img/homepage/services/audio-signal-processing-and-plugins/audio-signal-processing-and-plugins.svg"
                        alt="audio signal processing and plugins image">

                    <div ref="s1Card"
                        class="relative py-10 px-12 w-full sm:w-4/5 md:w-3/4 backdrop-blur-sm rounded-xl bg-gray/900/25 border border-gray/600">
                        <h5 class="mb-5 sm:mb-10 font-uncut text-2xl sm:text-4xl font-bold text-gray/50 ease duration-300">
                            Audio
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
            <div ref="s2" class="w-full flex">
                <div
                    class="relative flex justify-end my-24 mx-4 md:mx-6 lg:mx-10 xl:mx-32 2xl:mx-44 rounded-lg ease duration-300">

                    <img ref="s2Img" class="absolute top-1/2 -translate-y-1/2 left-0 object-contain"
                        src="../assets/img/homepage/services/neuro-engineering-solutions/neuro-engineering-solutions.svg"
                        alt="an image of a brain">

                    <div ref="s2Card"
                        class="py-10 px-12 w-full sm:w-4/5 md:w-3/4 backdrop-blur-sm rounded-xl bg-surface/primary/90">

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
            <div ref="s3" class="w-full">
                <div class="relative my-24 mx-4 md:mx-6 lg:mx-10 xl:mx-32 2xl:mx-44 rounded-lg ease duration-300">

                    <img ref="s3Img" class="absolute top-1/2 -translate-y-1/2 right-0 object-contain"
                        src="../assets/img/homepage/services/custom-ai-solutions/custom-ai-solutions.svg"
                        alt="custom ai solutions image">

                    <div ref="s3Card"
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
        <section ref="testimonialsOuter" class="flex flex-col items-center bg-gray/900">
            <div class="w-full h-fit">
                <div ref="testimonials"
                    class="relative py-16 flex flex-col items-center justify-center my-24 mx-4 md:mx-6 lg:mx-10 xl:mx-32 2xl:mx-44 rounded-lg bg-surface/secondary ease duration-300">

                    <h3 ref="testimonialsTitle"
                        class="text-4xl text-center mb-14 font-semibold tracking-wider text-gray/50">Trusted By</h3>

                    <!-- TABS -->
                    <div ref="testimonialsLogos" class="mb-14 w-11/12 flex justify-center">
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
                    <p ref="testimonialsQuote"
                        class="mb-14 italic font-poppins font-medium text-2xl sm:text-3xl tracking-wide text-center text-gray/50">
                        “iawuefh awuieo fhaweioufh awepifhuaw pifuhqwiofuh qw iouefhwe fhqweuiofh
                        qweioufhqwiofuhweoiufhqwoif
                        uh.”
                    </p>

                    <!-- PERSONA -->
                    <div ref="testimonialsPersona" class="flex items-center gap-5">
                        <img src="../assets/img/homepage/testimonials/persona/person.png" alt="persona">
                        <h3 class="font-avenir font-light tracking-wide text-2xl sm:text-3xl text-gray/50">Full Name -
                            Company
                            Name</h3>
                    </div>
                </div>
            </div>
        </section>

        <!-- OUR STACK -->
        <section ref="ourStackOuter" class="flex flex-col items-center bg-gray/900">

            <div class="w-full">
                <div ref="ourStackInner"
                    class="relative py-16 flex flex-col items-center justify-center my-24 mx-4 md:mx-6 lg:mx-10 xl:mx-32 2xl:mx-44 rounded-lg bg-surface/secondary ease duration-300">

                    <h3 ref="ourStackTitle" class="mb-14 text-4xl text-center font-semibold tracking-wider text-gray/50">Our
                        Tech Stack</h3>

                    <!-- Stacks -->
                    <div class="flex flex-row justify-center items-center gap-16 md:gap-24">
                        <div ref="cPP" class="my-8">
                            <img class="mb-8" src="../assets/img/homepage/tech-stack/c++.png" alt="c++ logo">
                            <h3 class="text-center font-avenir font-light tracking-wide text-2xl sm:text-3xl text-gray/50">
                                C++
                            </h3>
                        </div>
                        <div ref="python" class="my-8">
                            <img class="mb-8" src="../assets/img/homepage/tech-stack/python.png" alt="python logo">
                            <h3 class="text-center font-avenir font-light tracking-wide text-2xl sm:text-3xl text-gray/50">
                                Python</h3>
                        </div>
                        <div ref="javaScript" class="my-8">
                            <img class="mb-8" src="../assets/img/homepage/tech-stack/javascript.png" alt="javascript logo">
                            <h3 class="text-center font-avenir font-light tracking-wide text-2xl sm:text-3xl text-gray/50">
                                Javascript</h3>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- CONTACT US SECTION -->
        <section ref="contactUsContainer" class="w-full bg-surface/secondary">

            <div class="py-20 px-5 sm:px-10 md:px-32 lg:px-48 gap-20 flex">
                <div class="max-w-[50%]">
                    <h3 ref="contactUsTitle"
                        class="mb-8 font-avenir text-5xl font-medium leading-[4rem] bg-[size:200%] bg-gradient-2 bg-clip-text text-transparent">
                        Don’t
                        see a tool you can add to your arsenal? Let us
                        know what we can build for you.
                    </h3>
                    <div ref="contactUsLine" class="mb-20 h-1.5 w-64 bg-primary/400 rounded-full"></div>
                    <div>
                        <p ref="contactUsAbout1" class="mb-10 font-poppins text-2xl font-normal leading-9 text-gray/50">We
                            aim to please. We go
                            above
                            and
                            beyond
                            to ensure
                            that you have the right tools at the right time for your musical creativity and production
                            needs.
                        </p>
                        <p ref="contactUsAbout2" class="font-poppins text-2xl font-normal leading-9 text-gray/50">Intrigued
                            enough? Let’s have a
                            conversation about
                            your next big idea.</p>
                    </div>
                </div>

                <EmailForm />
            </div>
        </section>
    </div>

    <!-- FOOTER -->
    <Footer />
</template>

<script setup>

//IMPORTS================================================
import EmailForm from '../components/EmailForm.vue';
import gsap from 'gsap';
import { ref, onMounted } from 'vue';
//globalAnimations.js
import { pageTransition, serviceAnimation, testimonialsAndTechStackAnimation } from '../composables/globalAnimations';
//FOOTER import
import Footer from '../components/Footer.vue';

//import scrollTrigger
import scrollTrigger from 'gsap/ScrollTrigger';
//=======================================================
gsap.registerPlugin(scrollTrigger);
//=======================================================

//FULL PAGE CONTAINER//==================================
const container = ref(null);
//=======================================================

//GSAP animations//======================================
const animations = gsap;
const animationsTimeline = gsap.timeline;
//=======================================================

//HERO SECTION elements//================================
const heroTitleContainer = ref(null);
const heroBg = ref(null);
//=======================================================

//WHAT WE DO SECTION//===================================
const whatWeDoContainer = ref(null);
const whatWeDoTitle = ref(null);
//=======================================================

//SERVICES SECTION=======================================
const services = ref(null);//container
//SERVICE 1 (Audio Signal Processing and Plugins)
const s1 = ref(null);
const s1Img = ref(null);
const s1Card = ref(null);

//SERVICE 2 (Neuro Engineering Solutions)
const s2 = ref(null);
const s2Img = ref(null);
const s2Card = ref(null);

//SERVICE 3 ()
const s3 = ref(null);
const s3Img = ref(null);
const s3Card = ref(null);
//=======================================================

//TESTIMONIALS ==========================================
const testimonialsOuter = ref(null);
const testimonials = ref(null);
const testimonialsTitle = ref(null);
const testimonialsLogos = ref(null);
const testimonialsQuote = ref(null);
const testimonialsPersona = ref(null);
//=======================================================

//OUR STACK =============================================
const ourStackOuter = ref(null);
const ourStackInner = ref(null);
const ourStackTitle = ref(null);
const cPP = ref(null);
const python = ref(null);
const javaScript = ref(null);
//=======================================================

//CONTACT US ============================================
const contactUsContainer = ref(null);
const contactUsTitle = ref(null);
const contactUsLine = ref(null);
const contactUsAbout1 = ref(null);
const contactUsAbout2 = ref(null);
//=======================================================

//PAGE TRANSITION ANIMATIONS from globalAnimations.js
//pageTransition(container);

onMounted(() => {
    //================= HERO SECTION =========================
    //HERO on page load animation
    animations.from(heroTitleContainer.value.children, {
        delay: 0.5,
        duration: 2,
        y: '+100',
        stagger: 1,
        autoAlpha: 0,
        ease: 'back.out(1.7)',
    });
    //HERO background img onscroll animation
    animations.to(heroBg.value, {
        y: '+30%',
        scrollTrigger: {
            trigger: heroBg.value,
            start: 'top',
            end: 'bottom',
            scrub: 1,
        },
    });
    //HERO title onscoll animation
    animations.to(heroTitleContainer.value, {
        translateY: '150%',
        gap: '50px',
        scrollTrigger: {
            trigger: heroBg.value,
            start: 'top',
            end: 'bottom top',
            scrub: 1,
        },
    });
    //========================================================
    //================= WHAT WE DO ===========================
    //Title animation onEnter
    animations.from(whatWeDoTitle.value, {
        y: '-100%',
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: whatWeDoContainer.value,
            start: 'top center',
        },
    });
    animations.from(whatWeDoTitle.value, {
        y: '-10%',
        scrollTrigger: {
            trigger: whatWeDoContainer.value,
            start: 'top center',
            end: 'bottom top',
            scrub: 1,
        },
    })
    //========================================================
    //================= SERVICES =============================
    serviceAnimation(s1, s1Img, s1Card);
    serviceAnimation(s2, s2Img, s2Card);
    serviceAnimation(s3, s3Img, s3Card);
    //========================================================
    //================= TESTIMONIALS =========================

    //CHANGE: Y position + opacity - (on scroll)
    animations.fromTo(testimonials.value, {
        opacity: 0.3,
        y: '-20%',
    }, {
        opacity: 1,
        y: '0%',
        scrollTrigger: {
            trigger: testimonials.value,
            start: 'top bottom',
            end: 'center center',
            scrub: 1,
        }
    });

    //ANIMATE: testimonials inner elements
    testimonialsAndTechStackAnimation(
        testimonials,
        testimonialsTitle,
        testimonialsLogos,
        testimonialsQuote,
        testimonialsPersona);

    //========================================================
    //================= OUR STACK ============================

    //CHANGE: Y position + opacity - (on scroll)
    animations.fromTo(ourStackInner.value, {
        opacity: 0.3,
        y: '-20%',
    }, {
        opacity: 1,
        y: '0%',
        scrollTrigger: {
            trigger: ourStackInner.value,
            start: 'top bottom',
            end: 'center center',
            scrub: 1,
        }
    });

    //ANIMATE: ourStack inner elements
    testimonialsAndTechStackAnimation(
        ourStackInner,
        ourStackTitle,
        cPP,
        python,
        javaScript);

    //========================================================
    //================= CONTACT US ===========================

    //BACKGROUND GRADIENT - background position move Y (on scroll)
    animations.from(contactUsTitle.value, {
        backgroundPositionY: '-200%',
        scrollTrigger: {
            trigger: contactUsContainer.value,
            start: 'top center',
            end: 'bottom center',
            scrub: 10,
        },
    });

    //PURPLE LINE - width change (on scroll)
    animations.from(contactUsLine.value, {
        width: '-200px',
        scrollTrigger: {
            trigger: contactUsContainer.value,
            start: 'top center',
            end: 'bottom center',
            scrub: 10,
        },
    });

    //CONTACT US - ABOUT US texts
    animationsTimeline({
        scrollTrigger: {
            trigger: contactUsContainer.value,
            start: 'bottom bottom',
        },
    }).fromTo(contactUsAbout1.value, {
        opacity: 0,
    }, {
        opacity: 1,
        ease: 'Power2.easeIn',
        duration: 0.5,
    }).fromTo(contactUsAbout2.value, {
        opacity: 0,
    }, {
        opacity: 1,
        ease: 'Power2.easeIn',
        duration: 0.5,
    });
});

</script>