<template>
    <div ref="container" class="">
        <!-- HERO -->
        <section ref="heroContainer"
            class="relative w-full h-[80vh] flex justify-center items-center bg-surface/secondary overflow-hidden">
            <!--  -->
            <div
                class="mt-32 absolute top-0 left-0 w-full h-full bg-gradient-to-t from-surface/secondary from-10% to-transparent to-90% z-10">
            </div>
            <!-- BACKGROUND -->
            <img ref="heroBanner"
                class="mt-32 absolute h-full min-w-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-2/4 object-cover opacity-70"
                src="../assets/img/banner.png" alt="hero section banner image">
            <!-- LOGO BIG -->
            <div ref="heroLogo" class="mt-32 w-full flex justify-center items-center z-10">
                <img class="w-1/3" src="../assets/img/aboutus/logo-big.svg" alt="quillio logo">
            </div>
        </section>

        <!-- ABOUT US SECTION -->
        <section ref="aboutUsContainer" class="flex flex-col items-center bg-surface/secondary">

            <!-- TITLE CONTAINER -->
            <div ref="aboutUsTitleContainer"
                class="mb-20 mt-16 mx-10 sm:mx-20 flex flex-col gap-6 bg-gradient-2 bg-clip-text">
                <!-- TITLE TOP -->
                <h3 ref="aboutUsTitle1"
                    class="text-center font-avenir font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-transparent">
                    We’re musicians.
                </h3>
                <!-- TITLE BOTTOM -->
                <h5 ref="aboutUsTitle2"
                    class="text-center font-avenir font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-transparent leading-[1.2]">
                    We’re
                    engineers. We’re scientists.</h5>
            </div>

            <div ref="aboutUsTextContainer" class="mb-32 mx-10 sm:mx-20 flex flex-col gap-4 sm:gap-5 md:gap-7 lg:gap-10">
                <!-- mb-10 -->
                <p ref="textElement"
                    class="text-animation leading-6 font-avenir text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wider text-center text-gray/50">
                    We’re a diverse,
                    multicultural and
                    multilingual team.
                </p>
                <p ref="textElement"
                    class="text-animation leading-6 font-avenir text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wider text-center text-gray/50">
                    Our backgrounds are
                    interdisciplinary, and so are the services we provide.
                </p>
                <p ref="textElement"
                    class="text-animation leading-6 font-avenir text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wider text-center text-gray/50">
                    It goes
                    without saying
                    that we deliver quality services.
                </p>
                <p ref="textElement"
                    class="text-animation leading-6 font-avenir text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wider text-center text-gray/50">
                    But we
                    set ourselves apart through clear accountability and
                    communication.
                </p>
                <p ref="textElement"
                    class="text-animation leading-6 xl:mx-48 2xl:mx-60 font-avenir text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wider text-center text-gray/50 ease duration-300">
                    Our track record speaks for ourselves when it comes to meeting tight deadlines and confidentiality
                    requirements for your most ambitious projects.
                </p>
            </div>
        </section>

        <!-- CONTACT US SECTION -->
        <section ref="contactUsContainer" class="overflow-hidden">
            <div class="relative h-[1478px] bg-gradient-to-t from-black from-30% to-transparent to-100%">

                <div class="w-full h-32 bg-gradient-to-b from-surface/secondary"></div>

                <img ref="contactUsImg" class="absolute top-0 left-0 -z-10 h-[1478px] object-cover"
                    src="../assets/img/aboutus/people.jpeg" alt="image of people stadning in a room">

                <div
                    class="absolute bottom-0 max-w-full pb-20 px-12 md:px-16 lg:px-20 xl:px-32 2xl:px-48 gap-8 sm:gap-20 md:gap-14 lg:gap-20 flex flex-col md:flex-row ease duration-300">
                    <!-- ========================================================================================== -->
                    <!-- INNER CONTAINER -->
                    <!-- ========================================================================================== -->
                    <div class="w-fit">
                        <!-- ========================================================================================== -->
                        <!-- TITLE -->
                        <!-- ========================================================================================== -->
                        <h3 ref="contactUsTitle"
                            class="text-3xl sm:text-4xl md:text-3xl lg:text-4xl mb-8 font-avenir font-medium leading-[1.4] sm:leading-[1.4] md:leading-[1.4] lg:leading-[1.4] xl:leading-[1.4] 2xl:leading-[1.4] bg-[size:200%] bg-gradient-2 bg-clip-text text-transparent ease duration-300">
                            We believe the best clients are those you form deep relationships with.
                        </h3>
                        <!-- ========================================================================================== -->
                        <!-- LINE -->
                        <!-- ========================================================================================== -->
                        <div ref="contactUsLine" class="mb-16 xl:mb-20 h-1 w-64 bg-primary/400 rounded-full"></div>
                        <!-- ========================================================================================== -->
                        <!-- ABOUT -->
                        <!-- ========================================================================================== -->
                        <div>
                            <p ref="contactUsAbout1"
                                class="mb-10 font-poppins text-sm sm:text-lg md:text-base xl:text-lg tracking-wide font-light leading-9 text-gray/50">
                                We
                                aim to please. We go above and beyond to ensure that you gain enough value to keep coming
                                back
                            </p>
                            <p ref="contactUsAbout2"
                                class="font-poppins text-sm sm:text-lg md:text-base xl:text-lg tracking-wide font-light leading-9 text-gray/50">
                                Intrigued
                                enough? Let’s have a conversation about your next big idea.</p>
                        </div>
                    </div>

                    <!-- ========================================================================================== -->
                    <!-- EMAIL -->
                    <!-- ========================================================================================== -->
                    <EmailForm />
                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>

<script setup>
//Ref onMountd imports from Vue
import { ref, onMounted } from 'vue';
//GSAP imports
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
//Email component
import EmailForm from '../components/EmailForm.vue';
//Footer component
import Footer from '../components/Footer.vue';
//pageTransition animation
import { pageTransition } from '../composables/globalAnimations';
//register gsap//========================================
gsap.registerPlugin(scrollTrigger);

//GSAP animation variables
const animations = gsap;
const animationsTimeline = gsap.timeline;

//PAGE CONTAINER//=======================================
const container = ref(null);
//=======================================================

//HERO CONTENTS//========================================
const heroContainer = ref(null);
const heroBanner = ref(null);
const heroLogo = ref(null);
//=======================================================

//ABOUT US//=============================================
const aboutUsContainer = ref(null);
const aboutUsTitleContainer = ref(null);
const aboutUsTextContainer = ref(null);
const aboutUsInnerContainer = ref(null);

const textElements = ref([]);
//=======================================================

//CONTACT US//===========================================
const contactUsContainer = ref(null);
const contactUsLine = ref(null);
const contactUsAbout1 = ref(null);
const contactUsAbout2 = ref(null);
const contactUsImg = ref(null);
//=======================================================

//AboutUs page transition animation
pageTransition(container);

onMounted(() => {

    //================= HERO SECTION =========================
    animations.to(heroBanner.value, {
        translateY: '30%',
        scrollTrigger: {
            trigger: heroContainer.value,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
        },
    });

    //hero logo concurrent animation
    animations.to(heroLogo.value, {
        translateY: '80%',
        opacity: 0,
        scrollTrigger: {
            trigger: heroContainer.value,
            start: 'top top',
            end: 'center top',
            scrub: 2,
        },
    });

    //========================================================
    //================= ABOUT US =============================

    animations.fromTo(aboutUsTitleContainer.value, {
        gap: '60px',
        opacity: 0,
    }, {
        gap: '24px',
        opacity: 1,

        duration: 0.5,
        ease: 'Power2.ease',

        scrollTrigger: {
            trigger: aboutUsContainer.value,
            start: 'center bottom',
        }
    });

    animations.from(aboutUsTitleContainer.value, {
        gap: '24px',
        scrollTrigger: {
            trigger: aboutUsContainer.value,
            start: 'top center',
            end: 'center top',
            scrub: 1,
        }
    });

    textElements.value = Array.from(document.querySelectorAll('.text-animation'));

    textElements.value.forEach((element, index) => {

        /* const translateX = index % 2 === 0 ? '50%' : '-50%'; */

        animationsTimeline({
            scrollTrigger: {
                trigger: aboutUsContainer.value,
                start: 'center center',
            },
        }).fromTo(element, {
            opacity: 0,
        }, {
            opacity: 1,

            duration: 0.5,
            ease: 'Power2.easeInOut',
            delay: index * 0.3,
        })
    });

    animations.from(aboutUsTextContainer.value, {
        gap: '6',
        opacity: 0,
        scrollTrigger: {
            trigger: aboutUsContainer.value,
            start: 'top center',
            end: 'top top',
            scrub: 1,
        }
    });

    //========================================================
    //================= CONTACT US ===========================

    //CONTACT US img
    animations.from(contactUsImg.value, {
        translateY: '-100px',
        scrollTrigger: {
            trigger: contactUsContainer.value,
            start: 'top center',
            end: 'bottom center',
            scrub: 5,
        },
    });

    //PURPLE LINE - width change (on scroll)
    animations.from(contactUsLine.value, {
        width: '-200px',
        scrollTrigger: {
            trigger: contactUsContainer.value,
            start: 'top center',
            end: 'bottom center',
            scrub: 5,
        },
    });

    //CONTACT US - ABOUT US texts
    animationsTimeline({
        scrollTrigger: {
            trigger: contactUsContainer.value,
            start: 'center bottom',
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