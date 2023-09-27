<script>
import { ref, onMounted } from 'vue';
const isPlayingOriginal = ref(false);
const isPlayingProcessed = ref(false);

const originalAudio = ref(null);
const processedAudio = ref(null);
const originalProgress = ref(0);
const processedProgress = ref(0);

export default {
    data() {
        return {

        }
    }

}

</script>

<template>
    <div class="group product-container relative rounded-lg overflow-hidden">

        <!-- BACKGROUND IMAGE -->
        <div class="min-w-min max-w-xl h-64 overflow-hidden bg-black">
            <img class="" src="../assets/img/products/temp.png" alt="">
        </div>

        <!-- BOTTOM ROW - TITLE, DESCRIPTION, PURCHASE BTN -->
        <div class="h-24 flex flex-row items-center justify-between w-full rounded-b-lg bg-surface/primary">
            <div class="ml-4 sm:ml-10 duration-300">
                <h3 class="font-sans text-4xl bg-gradient-2 bg-clip-text text-transparent">Placeholder</h3>
                <p class="font-popins text-base text-gray/50">This is a description for this product</p>
            </div>
            <div
                class="w-48 sm:w-56 h-full flex justify-center items-center relative right-0 bg-primary/400 ease duration-300 rounded-br-lg">
                <p class="text-3xl text-gray/50">Free</p>
            </div>
        </div>

        <!-- AUDIO DEMOS CONTAINER -->
        <ul
            class="group-hover:visible invisible absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center backdrop-blur-lg backdrop-brightness-50 rounded-lg">
            <div>
                <!-- ORIGINAL AUDIO CONTAINER -->
                <li class="original mb-3">
                    <h5 class="font-sans mb-1 text-base font-bold text-gray/50 cursor-default">Not Compressed</h5>
                    <audio class="hidden" ref="originalAudio">
                        <source id="original" src="../assets/original.mp3">
                    </audio>
                    <!-- AUDIO BUTTONS, PLAYHEAD -->
                    <div class="flex items-center gap-2">
                        <div v-on:click="isPlayingOriginal = !isPlayingOriginal; togglePlay()"
                            class="group/btnOriginal w-10 h-10 flex justify-center items-center rounded-full bg-gray/50 hover:bg-primary/400 transition-colors duration-300 cursor-pointer">
                            <svg v-show="!isPlayingOriginal"
                                class="ml-1 text-primary/400 group-hover/btnOriginal:text-gray-50 transition-colors duration-300"
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none"
                                stroke="currentColor">
                                <polygon points="0,0 20,10 0,20" fill="currentColor" />
                            </svg>
                            <svg v-show="isPlayingOriginal"
                                class="text-primary/400 group-hover/btnOriginal:text-gray-50 transition-colors duration-300"
                                xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                stroke="currentColor">
                                <rect x="2" y="2" width="6" height="16" fill="currentColor" />
                                <rect x="12" y="2" width="6" height="16" fill="currentColor" />
                            </svg>
                        </div>
                        <div class="relative w-60 h-4 flex items-center">
                            <div class="w-60 h-2 bg-gray/600 rounded-full"></div>
                            <div class="absolute top-0 left-0 w-4 h-4 rounded-full bg-gray/50 z-10"
                                :style="{ left: originalProgress + '%' }"></div>
                            <div class="absolute top-1 left-0 h-2 rounded-full bg-primary/400"
                                :style="{ width: originalProgress + '%' }"></div>
                        </div>
                    </div>
                </li>
                <!-- PROCESSED AUDIO CONTAINER -->
                <li class="processed mb-4">
                    <h5 class="font-sans mb-1 text-base font-bold text-gray/50 cursor-default">Compressed</h5>
                    <audio ref="processedAudio">
                        <source id="processed" src="../assets/processed.mp3">
                    </audio>

                    <div class="flex items-center gap-2">
                        <div v-on:click="isPlayingProcessed = !isPlayingProcessed"
                            class="group/btnProcessed w-10 h-10 flex justify-center items-center rounded-full bg-gray/50 hover:bg-primary/400 transition-colors duration-300 cursor-pointer">
                            <svg v-show="!isPlayingProcessed"
                                class="ml-1 text-primary/400 group-hover/btnProcessed:text-gray-50 transition-colors duration-300"
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none"
                                stroke="currentColor">
                                <polygon points="0,0 20,10 0,20" fill="currentColor" />
                            </svg>
                            <svg v-show="isPlayingProcessed"
                                class="text-primary/400 group-hover/btnProcessed:text-gray-50 transition-colors duration-300"
                                xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                stroke="currentColor">
                                <rect x="2" y="2" width="6" height="16" fill="currentColor" />
                                <rect x="12" y="2" width="6" height="16" fill="currentColor" />
                            </svg>
                        </div>
                        <div class="relative w-60 h-4 flex items-center">
                            <div class="w-60 h-2 bg-gray/600 rounded-full"></div>
                            <div class="absolute top-0 left-0 w-4 h-4 rounded-full bg-gray/50 z-10"
                                :style="{ left: processedProgress + '%' }"></div>
                            <div class="absolute top-1 left-0 h-2 rounded-full bg-primary/400"
                                :style="{ width: processedProgress + '%' }"></div>
                        </div>
                    </div>
                </li>
            </div>
            <div class="">
                <p
                    class="w-fit py-4 px-6 font-bold bg-gray/50 hover:bg-primary/400 text-primary/400 hover:text-gray/50 rounded-full cursor-pointer transition-colors duration-300">
                    ADD TO CART</p>
            </div>
        </ul>
    </div>
</template>