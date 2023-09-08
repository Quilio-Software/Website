<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <!-- NAV -->
    <nav class="fixed top-0 left-0 w-full h-fit z-50">
        <div class="nav-main h-24 flex flex-row justify-around items-center bg-gray/900">
            <!-- LOGO -->
            <RouterLink to="/"
                class="logo-container w-14 sm:w-20 md:w-24 h-8 flex justify-center items-center ease duration-300">
                <!-- Need to fill with LOGO -->
                <img class="-translate-y-[1px] sm:-translate-y-[3px] md:-translate-y-[4px]"
                    src="../assets/img/nav/logo/full-logo.svg" alt="Quillio logo">
            </RouterLink>
            <!-- NAV BUTTONS -->
            <ul class="nav-buttons flex flex-row justify-around gap-6 sm:gap-8 md:gap-10 lg:gap-16 ease duration-300">
                <li>
                    <RouterLink to="/products/deals"
                        class="text-base sm:text-xl md:text-2xl text-center font-poppins font-thin tracking-wide text-gray/50 ease duration-300"
                        aria-current="page">
                        Products
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/about-us"
                        class="flex-row gap-2 text-base sm:text-xl md:text-2xl text-center font-poppins font-thin tracking-wide text-gray/50 ease duration-300"
                        aria-current="page">
                        About <p class="hidden sm:inline ease duration-300">Us</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact-us"
                        class="flex-row gap-2 text-base sm:text-xl md:text-2xl text-center font-poppins font-thin tracking-wide text-gray/50 ease duration-300">
                        Contact <p class="hidden sm:inline ease duration-300">Us</p>
                    </RouterLink>
                </li>
            </ul>
            <!-- USERs BASKET -->
            <div class="basketAndAccount-container w-14 sm:w-32 md:w-36 h-8 sm:h-10 md:h-12 rounded bg-surface/primary">
                <div class="basketAndAccount-inner-container h-full mx-1 flex flex-row justify-around items-center">
                    <img class="hidden sm:inline w-fit" src="../assets/img/nav/basket/shopping.svg" alt="basket icon">
                    <div
                        class="w-4 sm:w-6 h-4 sm:h-6 text-sm sm:text-base flex justify-center items-center rounded-full bg-[#352d3c] text-gray/50">
                        1
                    </div>
                    <div class="hidden sm:inline w-0.5 h-5 sm:h-6 rounded bg-gray/50"></div>
                    <img class="w-5 sm:w-fit" src="../assets/img/nav/account/user-circle.svg" alt="account icon">
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
</template>