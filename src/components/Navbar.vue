<script setup>

</script>

<template>
    <!-- NAV -->
    <nav class="bg-slate-100">
        <ul class="flex flex-row justify-around">
            <li>
                <RouterLink to="/products" class="text-gray-900 dark:text-white hover:underline" aria-current="page">
                    Products
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">
                    About Us
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/contact-us" class="text-gray-900 dark:text-white hover:underline">
                    Contact Us
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>