<template>
    <div ref="container">
        <!-- HERO -->
        <section ref="heroContainer"
            class="relative w-full h-[680px] flex justify-center items-center bg-surface/secondary overflow-hidden">
            <!-- BACKGROUND -->
            <img ref="heroBanner"
                class="absolute h-full min-w-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-2/4 object-cover opacity-70"
                src="../assets/img/banner.png" alt="hero section banner image">
            <!-- LOGO BIG -->
            <img ref="heroLogo" class="z-10" src="../assets/img/aboutus/logo-big.svg" alt="quillio logo">
        </section>

        <!-- ABOUT US SECTION -->
        <section ref="aboutUsContainer" class="flex flex-col items-center bg-surface/secondary">

            <div ref="aboutUsTitleContainer" class="mb-20 mt-24 flex flex-col gap-6 bg-gradient-2 bg-clip-text">
                <h3 ref="aboutUsTitle1" class="text-center font-avenir font-medium text-6xl text-transparent">
                    We’re musicians.
                </h3>
                <h5 ref="aboutUsTitle2" class="text-center font-avenir font-medium text-6xl text-transparent">We’re
                    engineers. We’re scientists.</h5>
            </div>

            <div ref="aboutUsTextContainer" class="mb-48 mx-10 flex flex-col gap-10">
                <!-- mb-10 -->
                <p ref="textElement"
                    class="text-animation font-poppins text-2xl font-light tracking-wide text-center text-gray/50">
                    We’re a diverse,
                    multicultural and
                    multilingual team.
                </p>
                <p ref="textElement"
                    class="text-animation font-poppins text-2xl font-light tracking-wide text-center text-gray/50">
                    Our backgrounds are
                    interdisciplinary, and so are the services we provide.
                </p>
                <div ref="aboutUsInnerContainer" class="">
                    <p ref="textElement"
                        class="text-animation font-poppins text-2xl font-light tracking-wide leading-10 text-center text-gray/50">
                        It goes
                        without saying
                        that we deliver quality services.
                    </p>
                    <p ref="textElement"
                        class="text-animation font-poppins text-2xl font-light tracking-wide leading-10 text-center text-gray/50">
                        But we
                        set ourselves apart through clear accountability and
                        communication.
                    </p>
                </div>
                <p ref="textElement"
                    class="text-animation xl:mx-48 2xl:mx-60 font-poppins text-2xl font-light tracking-wide text-center text-gray/50 ease duration-300">
                    Our track record speaks for ourselves when it comes to meeting tight deadlines and confidentiality
                    requirements for your most ambitious projects.
                </p>
            </div>
        </section>

        <!-- CONTACT US SECTION -->
        <section ref="contactUsContainer" class="">
            <div class="relative h-[1478px] bg-gradient-to-t from-black from-30% to-transparent to-100%">

                <img ref="contactUsImg" class="absolute top-0 left-0 -z-10 h-[1478px] object-cover"
                    src="../assets/img/aboutus/people.jpeg" alt="image of people stadning in a room">

                <div class="absolute bottom-0 py-20 px-5 sm:px-10 md:px-32 lg:px-48 gap-20 flex">
                    <div class="max-w-[50%]">
                        <h3
                            class="mb-8 font-avenir text-5xl font-medium leading-[4rem] bg-gradient-2 bg-clip-text text-transparent">
                            Don’t
                            see a tool you can add to your arsenal? Let us
                            know what we can build for you.
                        </h3>
                        <div ref="contactUsLine" class="mb-20 h-1.5 w-64 bg-primary/400 rounded-full"></div>
                        <div>
                            <p ref="contactUsAbout1" class="mb-10 font-poppins text-2xl font-normal leading-9 text-gray/50">
                                We aim to please. We
                                go
                                above
                                and
                                beyond
                                to ensure
                                that you have the right tools at the right time for your musical creativity and production
                                needs.
                            </p>
                            <p ref="contactUsAbout2" class="font-poppins text-2xl font-normal leading-9 text-gray/50">
                                Intrigued enough? Let’s have
                                a
                                conversation about
                                your next big idea.</p>
                        </div>
                    </div>

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
        translateY: '150%',
        opacity: 0,
        scrollTrigger: {
            trigger: heroContainer.value,
            start: 'top top',
            end: 'bottom top',
            scrub: 2,
        },
    });

    //========================================================
    //================= ABOUT US =============================

    animations.fromTo(aboutUsTitleContainer.value, {
        translateY: '100',
        gap: '60px',
        opacity: 0,
    }, {
        translateY: '0',
        gap: '24px',
        opacity: 1,

        delay: 0.5,
        duration: 0.5,
        ease: 'Power2.ease',

        scrollTrigger: {
            trigger: aboutUsContainer.value,
            start: 'top center',
        }
    });

    animations.from(aboutUsTitleContainer.value, {
        gap: '30px',
        scrollTrigger: {
            trigger: aboutUsContainer.value,
            start: 'top center',
            end: 'center top',
            scrub: 1,
        }
    });

    textElements.value = Array.from(document.querySelectorAll('.text-animation'));

    textElements.value.forEach((element, index) => {
        const translateX = index % 2 === 0 ? '50%' : '-50%';

        animationsTimeline({
            scrollTrigger: {
                trigger: aboutUsContainer.value,
                start: 'bottom bottom',
            },
        }).fromTo(element, {
            opacity: 0,
            translateX: translateX,
        }, {
            opacity: 1,
            translateX: '0',

            duration: 0.5,
            ease: 'Power2.easeInOut',
            delay: index * 0.3,
        })
    });

    animations.from(aboutUsTextContainer.value, {
        gap: '60px',
        scrollTrigger: {
            trigger: aboutUsContainer.value,
            start: 'top center',
            end: 'bottom top',
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