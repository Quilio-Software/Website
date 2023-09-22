<template>
    <!-- ========================================================================================== -->
    <!-- OUTER CONTAINER -->
    <!-- ========================================================================================== -->
    <div ref="footerContainer" class="bg-surface/primary w-full">
        <!-- ========================================================================================== -->
        <!-- ROW 1 OUER CONTAINER - Logo, Services, Company -->
        <!-- ========================================================================================== -->
        <div class="pt-14 sm:pt-20 pb-16 sm:pb-24 flex justify-center ease duration-300">
            <!-- ========================================================================================== -->
            <!-- ROW 1 INNER CONTAINER -->
            <!-- ========================================================================================== -->
            <div class="flex w-4/5 gap-8 sm:gap-16 md:gap-24 lg:gap-32 ease duration-300">
                <!-- ========================================================================================== -->
                <!-- IMG CONTAINER -->
                <!-- ========================================================================================== -->
                <RouterLink to="/">
                    <img class="w-16 sm:w-fit ease duration-300" src="../assets/img/nav/logo/full-logo.svg"
                        alt="quilio logo">
                </RouterLink>
                <!-- ========================================================================================== -->
                <!-- SERVICES CONTAINER -->
                <!-- ========================================================================================== -->
                <div class="flex flex-col gap-3">
                    <h3
                        class="mb-1 font-avenir text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray/50 cursor-default ease duration-300">
                        Services</h3>
                    <a class="font-poppins text-sm sm:text-base lg:text-lg font-light text-gray/50 ease duration-300"
                        href="">Bug
                        Tracker</a>
                    <a class="font-poppins text-sm sm:text-base lg:text-lg font-light text-gray/50 ease duration-300"
                        href="">VST
                        Development</a>
                    <a class="font-poppins text-sm sm:text-base lg:text-lg font-light text-gray/50 ease duration-300"
                        href="">Beta
                        Testing</a>
                </div>
                <!-- ========================================================================================== -->
                <!-- COMPANY CONTAINER -->
                <!-- ========================================================================================== -->
                <div class="flex flex-col gap-3">
                    <h3
                        class="mb-1 font-avenir text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray/50 cursor-default ease duration-300">
                        Company</h3>
                    <RouterLink to="/about-us"
                        class="font-poppins text-sm sm:text-base lg:text-lg font-light text-gray/50 ease duration-300">
                        About Us
                    </RouterLink>
                    <RouterLink to="/contact-us"
                        class="font-poppins text-sm sm:text-base lg:text-lg font-light text-gray/50 ease duration-300">
                        Contact Us
                    </RouterLink>
                </div>
            </div>
        </div>
        <!-- ========================================================================================== -->
        <!-- LINE DIVIDER CONTAINER -->
        <!-- ========================================================================================== -->
        <div class="h-full flex justify-center items-center">
            <div ref="footerLine" class="w-4/5 h-1 bg-surface/sunrise"></div>
        </div>
        <!-- ========================================================================================== -->
        <!-- QUILIO STAMP -->
        <!-- ========================================================================================== -->
        <div class="pb-14 sm:pb-20 ease duration-300">
            <div class="mx-20 xl:mx-60 h-28 flex flex-col xl:flex-row justify-between items-center ease duration-300">
                <div class="w-1/6"></div>
                <p class="w-full xl:w-2/3 text-center font-poppins text-sm sm:text-base text-gray/600 ease duration-300">
                    © 2023
                    Quilio Ltd. |
                    Privacy |
                    Terms |
                    Sitemap</p>
                <div class="w-[200px] flex gap-5 justify-center">
                    <img class="w-5 md:w-6 object-contain ease duration-300"
                        src="../assets/img/footer/socials/linkedin-logo.png" alt="socials">
                    <img class="w-5 md:w-6 object-contain ease duration-300"
                        src="../assets/img/footer/socials/linkedin-logo.png" alt="socials">
                    <img class="w-5 md:w-6 object-contain ease duration-300"
                        src="../assets/img/footer/socials/linkedin-logo.png" alt="socials">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//import gsap
import gsap from 'gsap';
//scrollTrigger setup
import scrollTrigger from 'gsap/ScrollTrigger';
//ref, onMounted imports
import { ref, onMounted } from 'vue';
//router link for page navigation
import { RouterLink } from 'vue-router';
//=======================================================
gsap.registerPlugin(scrollTrigger);
//=======================================================

//FOOTER elements to animate
const footerContainer = ref(null);
const footerLine = ref(null);

onMounted(() => {
    gsap.from(footerLine.value, {
        width: '-50%',
        scrollTrigger: {
            trigger: footerContainer.value,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 5,
        }
    });
});

</script>