<script setup>
import { RouterLink } from 'vue-router';

//Vue imports
import { ref, onMounted } from 'vue';
//GSAP imports
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';

//register gsap scrolltrigger plugin
gsap.registerPlugin(scrollTrigger);

//Main Nav Variables
const navOuter = ref(null);
const deals = ref(null);

//Burger Variables
const burgerContainer = ref(null);
const line1 = ref(null);
const line2 = ref(null);
const line3 = ref(null);

//SideBar
const sideNav = ref(null);

onMounted(() => {

    //stores animation, initially set to null to make sure nav is displayed on page load
    let navAnimateIn = null;
    let sideNavAnimateIn = null;

    //ScrollTrigger - checks when navOuter (main nav) hits the top of the screen
    scrollTrigger.create({
        trigger: navOuter.value,
        start: 'top top',
        onEnter: () => {
            //check if element has mounted
            if (navOuter.value) {
                navOuter.value.classList.add('fixed');

                //side nav classes
                sideNav.value.classList.add('fixed');
                sideNav.value.classList.remove('absolute');
                sideNav.value.classList.remove('h-5/6');
                sideNav.value.classList.add('h-full');

                //update animation on scrollTrigger
                navAnimateIn = gsap.fromTo(navOuter.value, {
                    opacity: 0,
                }, {
                    opacity: 1,
                    duration: 0.3,
                    ease: 'Power2.easeInOut',
                });

                //SIDE NAV FULL WIDTH TEST ANIMATION
                sideNavAnimateIn =
                    gsap.fromTo(sideNav.value, {
                        opacity: 0,
                        height: 0,
                        translateY: 0
                    }, {
                        opacity: 1,
                        height: 'fit-content',
                        duration: 0.5,
                        ease: 'Power2.easeInOut',
                        delay: 0.1,
                    });
            }
        },
        animation: navAnimateIn,
    });

    //ScrollTrigger - checks when bottom of deals tab hits the top of the screen
    scrollTrigger.create({
        trigger: deals.value,
        start: 'bottom top',
        onEnterBack: () => {
            if (navOuter.value) {
                navOuter.value.classList.remove('fixed');

                sideNav.value.classList.remove('fixed');
                sideNav.value.classList.add('absolute');
                sideNav.value.classList.add('h-5/6');
                sideNav.value.classList.remove('h-full');

                gsap.fromTo(sideNav.value, {
                    translateY: '4px',
                }, {
                    translateY: 0,
                    duration: 0,
                });
            }
        }
    });

    //===========================================================================
    //BURGER LINE ANIMATIONS
    const line2Animate =
        gsap.to(line2.value, {
            opacity: 0,
            duration: 0.3,
            ease: 'Power2.easeIn',
            paused: true,
        }).reverse();

    const line1Animate =
        gsap.to(line1.value, {
            rotate: '45deg',
            translateY: '7px',
            duration: 0.3,
            ease: 'Power2.easeIn',
            paused: true,
        }).reverse();

    const line3Animate =
        gsap.to(line3.value, {
            rotate: '-45deg',
            translateY: '-7px',
            duration: 0.3,
            ease: 'Power2.easeIn',
            paused: true,
        }).reverse();

    //SIDE NAV ANIMATION
    const sideNavAnimate =
        gsap.from(sideNav.value, {
            translateX: '100%',
            opacity: 0,
            duration: 0.3,
            ease: 'Power2.easeIn',
            paused: true,
        }).reverse();

    //===========================================================================
    //BURGER TRIG FUNCTION
    const toggleBurger = () => {

        if (line1.value && line2.value && line3.value) {
            //line 2 - middle dissappears
            line2Animate.reversed() ? line2Animate.play() : line2Animate.reverse();
            //line 1 - rotate
            line1Animate.reversed() ? line1Animate.play() : line1Animate.reverse();
            //line 3 - rotate
            line3Animate.reversed() ? line3Animate.play() : line3Animate.reverse();
            //side nav
            sideNavAnimate.reversed() ? sideNavAnimate.play() : sideNavAnimate.reverse();
        }
    }

    //===========================================================================
    //BURGER EVENT LISTENER
    if (burgerContainer.value) {
        burgerContainer.value.addEventListener('click', toggleBurger);
    }
});


</script>

<template>
    <div class="absolute top-0 left-0 w-full h-full z-10 overflow-hidden">
        <!-- DEALS CONTAINER -->
        <div ref="deals" class="h-14 sm:h-16 lg:h-18 flex items-center justify-center  bg-primary/400 ease duration-300">
            <h3 class="text-center text-base lg:text-lg font-sans font-bold tracking-wide text-gray/50 ease duration-300">
                New Deals: <span class="italic font-normal">40% </span><span class="font-light">off everything!</span></h3>
        </div>
        <!-- NAV OUTER -->
        <nav ref="navOuter" class="top-0 left-0 w-full h-fit z-50">
            <div class="nav-main h-14 sm:h-16 lg:h-18 flex flex-row justify-around items-center bg-gray/900">
                <!-- LOGO -->
                <RouterLink to="/"
                    class="logo-container w-14 sm:w-16 lg:w-20 h-8 flex justify-center items-center ease duration-300">
                    <!-- Need to fill with LOGO -->
                    <img class="-translate-y-[1px] sm:-translate-y-[2px]" src="../assets/img/nav/logo/full-logo.svg"
                        alt="Quillio logo">
                </RouterLink>
                <!-- NAV BUTTONS -->
                <ul
                    class="select-none nav-buttons flex flex-row justify-around gap-6 sm:gap-8 md:gap-10 lg:gap-16 ease duration-300">
                    <li>
                        <RouterLink to="/products/deals"
                            class="hidden sm:inline text-base lg:text-lg text-center font-poppins font-thin tracking-wide text-gray/50 ease duration-300"
                            aria-current="page">
                            Products
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about-us"
                            class="hidden sm:inline text-base lg:text-lg text-center font-poppins font-thin tracking-wide text-gray/50 ease duration-300"
                            aria-current="page">
                            About Us
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact-us"
                            class="hidden sm:inline text-base lg:text-lg text-center font-poppins font-thin tracking-wide text-gray/50 ease duration-300">
                            Contact Us
                        </RouterLink>
                    </li>
                </ul>


                <!-- USER PROFILE and BURGER -->
                <div class="flex gap-8 items-center">

                    <!-- USER OUTER -->
                    <div class="select-none w-[72px] sm:w-24 lg:w-28 h-6 sm:h-8 rounded bg-surface/primary cursor-pointer">
                        <!-- USER INNER -->
                        <div class="h-full mx-1 flex flex-row justify-around items-center">
                            <!-- SHOPPING BASKET IMG -->
                            <img class="w-3 sm:w-4 lg:w-5" src="../assets/img/nav/basket/shopping.svg" alt="basket icon">
                            <!-- BASKET AMONUT ICON -->
                            <div
                                class="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-sm sm:text-base flex justify-center items-center rounded-full bg-[#352d3c] text-gray/50">
                                1
                            </div>
                            <!-- LINE SPLITTER -->
                            <div class="w-0.5 h-4 sm:h-5 rounded bg-gray/50"></div>
                            <!-- ACCOUNT ICON -->
                            <img class="w-4 sm:w-4 lg:w-5" src="../assets/img/nav/account/user-circle.svg"
                                alt="account icon">
                        </div>
                    </div>

                    <!-- BURGER -->
                    <div ref="burgerContainer" class="flex sm:hidden flex-col gap-[5px] cursor-pointer">
                        <div ref="line1" class="w-6 h-0.5 bg-gray/50 rounded-full"></div>
                        <div ref="line2" class="w-6 h-0.5 bg-gray/50 rounded-full"></div>
                        <div ref="line3" class="w-6 h-0.5 bg-gray/50 rounded-full"></div>
                    </div>
                </div>
            </div>
            <ul v-if="$route.path.startsWith('/products')"
                class="sub-nav h-16 flex flex-row justify-center items-center bg-surface/primary">
                <li>
                    <RouterLink to="/products/deals"
                        class="text-lg sm:text-xl text-center font-poppins font-thin tracking-wide text-primary/400 ease duration-300"
                        aria-current="page">
                        Deals
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/products/free"
                        class="mx-10 sm:mx-20 text-lg sm:text-xl text-center font-poppins font-thin tracking-wide text-primary/400 ease duration-300"
                        aria-current="page">
                        Free
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/products/new"
                        class="text-lg sm:text-xl text-center font-poppins font-thin tracking-wide text-primary/400 ease duration-300"
                        aria-current="page">
                        New
                    </RouterLink>
                </li>
            </ul>
        </nav>

        <!-- SideNav FULL WIDTH TEST -->
        <div ref="sideNav" class="absolute sm:hidden right-0 w-full bg-gray/900 bg-opacity-95">

            <div class="ml-[11vw] my-4 flex flex-col gap-10">

                <!-- LINKS -->
                <div class="flex flex-col gap-5">
                    <!-- PRODUCTS -->
                    <RouterLink to="/products/deals"
                        class="text-sm font-poppins font-normal tracking-wide text-gray/50 hover:text-primary/400 ease duration-300">
                        Products
                    </RouterLink>

                    <!-- ABOUT US -->
                    <RouterLink to="/about-us"
                        class="text-sm font-poppins font-normal tracking-wide text-gray/50 hover:text-primary/400 ease duration-300">
                        About Us
                    </RouterLink>

                    <!-- CONTACT US -->
                    <RouterLink to="/contact-us"
                        class="text-sm font-poppins font-normal tracking-wide text-gray/50 hover:text-primary/400 ease duration-300">
                        Contact Us
                    </RouterLink>
                </div>

            </div>
        </div>
    </div>
</template>