<template>
    <div ref="footerContainer" class="bg-surface/primary w-full">
        <div class="pt-20 pb-24">
            <div class="flex mx-60 gap-32">
                <div class="">
                    <img src="../assets/img/nav/logo/full-logo.svg" alt="quilio logo">
                </div>
                <div class="flex flex-col gap-3">
                    <h3 class="mb-1 font-avenir text-4xl font-medium text-gray/50">Services</h3>
                    <a class="font-poppins text-xl font-light text-gray/50" href="">Bug Tracker</a>
                    <a class="font-poppins text-xl font-light text-gray/50" href="">VST Development</a>
                    <a class="font-poppins text-xl font-light text-gray/50" href="">Beta Testing</a>
                </div>
                <div class="flex flex-col gap-3">
                    <h3 class="mb-1 font-avenir text-4xl font-medium text-gray/50">Company</h3>
                    <a class="font-poppins text-xl font-light text-gray/50" href="">About Us</a>
                    <a class="font-poppins text-xl font-light text-gray/50" href="">Contact Us</a>
                </div>
            </div>
        </div>
        <div class="w-full h-full flex justify-center items-center">
            <div ref="footerLine" class="w-4/5 mx-60 h-1 bg-surface/sunrise"></div>
        </div>
        <div class="pb-20">
            <div class="mx-60 h-28 flex justify-between items-center">
                <div class="w-1/6"></div>
                <p class="w-2/3 text-center font-poppins text-xl text-gray/600">© 2023 Quilio Ltd. | Privacy | Terms |
                    Sitemap</p>
                <div class="w-1/6 flex gap-5">
                    <img src="../assets/img/footer/socials/linkedin-logo.png" alt="socials">
                    <img src="../assets/img/footer/socials/linkedin-logo.png" alt="socials">
                    <img src="../assets/img/footer/socials/linkedin-logo.png" alt="socials">
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