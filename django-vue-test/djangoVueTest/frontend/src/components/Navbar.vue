<script setup>

</script>

<template>
    <!-- NAV -->
    <nav class="">
        <div class="nav-main h-24 flex flex-row justify-around items-center bg-gray/900">
            <!-- LOGO -->
            <div class="logo-container w-28 h-8 bg-primary/400">
                <!-- Need to fill with LOGO -->
                <h3 class="text-white">LOGO</h3><!-- TEMP -->
            </div>
            <!-- NAV BUTTONS -->
            <ul class="nav-buttons flex flex-row justify-around gap-3 sm:gap-6 md:gap-16 ease duration-300">
                <li>
                    <RouterLink to="/products/deals"
                        class="text-xl sm:text-2xl text-center font-poppins font-thin tracking-wide text-gray/50 ease duration-300"
                        aria-current="page">
                        Products
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/"
                        class="flex flex-row gap-2 text-xl sm:text-2xl text-center font-poppins font-thin tracking-wide text-gray/50 ease duration-300"
                        aria-current="page">
                        About <p class="hidden sm:inline ease duration-300">Us</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact-us"
                        class="flex flex-row gap-2 text-xl sm:text-2xl text-center font-poppins font-thin tracking-wide text-gray/50 ease duration-300">
                        Contact <p class="hidden sm:inline ease duration-300">Us</p>
                    </RouterLink>
                </li>
            </ul>
            <!-- USERs BASKET -->
            <div class="basketAndAccount-container w-36 h-12 rounded bg-surface/primary">
                <div class="basketAndAccount-inner-container h-full mx-1 flex flex-row justify-around items-center">
                    <img src="../assets/img/nav/basket/shopping.svg" alt="basket icon" class="basket">
                    <div
                        class="basket-counter w-6 h-6 flex justify-center items-center rounded-full bg-[#352d3c] text-gray/50">
                        1
                    </div>
                    <div class="line w-0.5 h-6 rounded bg-gray/50"></div>
                    <img src="../assets/img/nav/account/user-circle.svg" alt="account icon" class="account">
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