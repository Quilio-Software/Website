<template>
    <!-- ========================================================================================== -->
    <!-- PAGE CONTENT CONTAINER -->
    <!-- ========================================================================================== -->
    <div ref="container" class="bg-hompage-bg bg-cover bg-center">
        <!-- ========================================================================================== -->
        <!-- HERO SECTION CONTAINER -->
        <!-- ========================================================================================== -->
        <section ref="heroContainer" class="relative h-[962px] w-full flex justify-center items-center overflow-hidden">
            <!-- ========================================================================================== -->
            <!-- HERO SECTION INNER (TITLE) CONTAINER -->
            <!-- ========================================================================================== -->
            <div ref="heroTitleContainer" class="mx-10 flex flex-col justify-center items-center gap-8 cursor-default">
                <!-- TITLE PRIMARY -->
                <h3 ref="heroTitle"
                    class="text-center text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-wide text-gray/50 ease duration-300">
                    <span class="heroTitleWord">Building </span>
                    <span class="heroTitleWord">for </span>
                    <span class="heroTitleWord">the </span>
                    <span class="heroTitleWord">future, </span>
                    <span class=" heroTitleWord bg-gradient-2-homepage-title bg-clip-text text-transparent">today.</span>
                </h3>
                <!-- TITLE SECONDARY -->
                <h5 ref="heroSubTitle"
                    class="text-center font-avenir text-base sm:text-xl lg:text-2xl font-medium tracking-wide text-primary/400 ease duration-300">
                    Audio engineering
                    solutions
                    made by engineers, for artists</h5>
            </div>
        </section>

        <!-- ========================================================================================== -->
        <!-- WHAT WE DO SECTION -->
        <!-- ========================================================================================== -->
        <section ref="whatWeDoContainer" class="w-full h-20 sm:h-40 flex justify-center items-center">
            <h3 ref="whatWeDoTitle"
                class="font-uncut text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-gray/50 ease duration-300">
                What We Do
            </h3>
        </section>

        <!-- ========================================================================================== -->
        <!-- SERVICES SECTION -->
        <!-- ========================================================================================== -->
        <section ref="services" class="w-full flex flex-col items-center overflow-hidden">

            <!-- ========================================================================================== -->
            <!-- S1 CARD OUTER CONTAINER - Audio Signal Processing and Plugins -->
            <!-- ========================================================================================== -->
            <div ref="s1Outer"
                class="card select-none my-24 mx-4 sm:mx-10 md:mx-20 lg:mx-28 xl:mx-32 rounded-lg ease duration-300 overflow-hidden">

                <!-- ========================================================================================== -->
                <!-- S1 CARD INNER CONTAINER -->
                <!-- ========================================================================================== -->
                <div ref="s1Inner"
                    class="max-w-6xl py-6 sm:py-10 px-6 sm:px-8 md:px-10 lg:px-12 flex flex-col gap-5 sm:gap-7 md:gap-8 rounded-xl border border-card-whiteish border-opacity-20 bg-card-blackish bg-opacity-25 shadow-card-shadow ease duration-500">

                    <!-- ========================================================================================== -->
                    <!-- S1 CARD GRADIENT -->
                    <!-- ========================================================================================== -->
                    <div style="background: radial-gradient(circle, rgba(239, 239, 239, 0.05), rgba(239, 239, 239, 0.05) 10%, transparent, transparent 100%);"
                        class="circle-mouse-gradient absolute w-screen h-screen top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200 -z-10">
                    </div>

                    <!-- ========================================================================================== -->
                    <!-- S1 CARD TITLE & ABOUT TEXT -->
                    <!-- ========================================================================================== -->
                    <h3 ref="s1Title"
                        class="font-uncut text-lg sm:text-xl md:text-2xl font-bold text-gray/50 ease duration-300">
                        Audio
                        Signal
                        Processing and
                        Plugins</h3>
                    <!-- line - animate -->
                    <div ref="s1Line" class="h-0.5 w-60 bg-primary/400 rounded-full"></div>

                    <!-- ========================================================================================== -->
                    <!-- S1 SEE MORE -->
                    <!-- ========================================================================================== -->
                    <div class="inline sm:hidden select-all">
                        <p
                            class="select-none ml-1  font-poppins text-sm font-thin tracking-wide text-gray/50 ease duration-300">
                            View <span ref="toggleTitle"
                                class="toggleTitle text-primary/400 hover:underline cursor-pointer">more</span>
                            <span class="toggleIcon text-primary/400" ref="toggleIcon">+</span>
                        </p>
                    </div>

                    <p ref="s1Text"
                        class="cardText opacity-0 hidden sm:inline font-poppins text-sm sm:text-base md:text-lg leading-tight md:leading-normal lg:leading-8 font-light sm:font-normal tracking-wide text-gray/200 ease duration-300">
                        In
                        the world of
                        audio, the right
                        tools don’t just make the job easier - the tool is the job. Our team of experienced
                        developers enable
                        you to do what you do without thinking about it.</p>
                    <!-- ========================================================================================== -->
                    <!-- S1 POINTER COLUMNS CONTAINER -->
                    <!-- ========================================================================================== -->
                    <div ref="s1PointerCols" class="flex mt-2 items-baseline">
                        <!-- ========================================================================================== -->
                        <!-- S1 COLUMN 1 -->
                        <!-- ========================================================================================== -->
                        <div class="flex flex-col max-w-[50%] gap-4 sm:gap-7 mr-4 sm:mr-6 md:mr-10 lg:mr-20">
                            <!-- ========================================================================================== -->
                            <!-- S1 POINTER CONTAINER -->
                            <!-- ========================================================================================== -->
                            <div class="pointer flex items-center gap-4">
                                <img class="w-5 sm:w-6 md:w-7" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="line-clamp-2 font-poppins sm:leading-6 font-thin text-sm sm:text-base md:text-lg text-gray/50 ease duration-300">
                                    Instrument plugins
                                    for musicians</p>
                            </div>
                            <!-- ========================================================================================== -->
                            <!-- S1 POINTER CONTAINER -->
                            <!-- ========================================================================================== -->
                            <div class="pointer flex items-center gap-4">
                                <img class="w-5 sm:w-6 md:w-7" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="line-clamp-2 font-poppins sm:leading-6 font-thin text-sm sm:text-base md:text-lg text-gray/50 ease duration-300">
                                    Mixing and mastering tools
                                    for recording engineers
                                </p>
                            </div>
                            <!-- ========================================================================================== -->
                            <!-- S1 POINTER CONTAINER -->
                            <!-- ========================================================================================== -->
                            <div class="pointer flex items-center gap-4">
                                <img class="w-5 sm:w-6 md:w-7" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="line-clamp-2 font-poppins sm:leading-6 font-thin text-sm sm:text-base md:text-lg text-gray/50 ease duration-300">
                                    Audio solutions
                                    for businesses
                                </p>
                            </div>
                        </div>
                        <!-- ========================================================================================== -->
                        <!-- S1 COLUMN 2 -->
                        <!-- ========================================================================================== -->
                        <div class="flex flex-col gap-5 sm:gap-7">
                            <!-- ========================================================================================== -->
                            <!-- S1 POINTER CONTAINER -->
                            <!-- ========================================================================================== -->
                            <div class="pointer flex items-center gap-4">
                                <img class="w-5 sm:w-6 md:w-7" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="line-clamp-2 font-poppins sm:leading-6 font-thin text-sm sm:text-base md:text-lg text-gray/50 ease duration-300">
                                    Speech processing
                                    software
                                </p>
                            </div>
                            <!-- ========================================================================================== -->
                            <!-- S1 POINTER CONTAINER -->
                            <!-- ========================================================================================== -->
                            <div class="pointer flex items-center gap-4">
                                <img class="w-5 sm:w-6 md:w-7" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="line-clamp-2 font-poppins sm:leading-6 font-thin text-sm sm:text-base md:text-lg text-gray/50 ease duration-300">
                                    Custom-built
                                    audio software
                                </p>
                            </div>
                            <!-- ========================================================================================== -->
                            <!-- S1 POINTER CONTAINER -->
                            <!-- ========================================================================================== -->
                            <div class="pointer flex items-center gap-4">
                                <img class="w-5 sm:w-6 md:w-7" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="line-clamp-2 font-poppins sm:leading-6 font-thin text-sm sm:text-base md:text-lg text-gray/50 ease duration-300">
                                    Noise detection
                                    and reduction tools
                                </p>
                            </div>
                            <!-- ========================================================================================== -->
                        </div>
                    </div>
                </div>
            </div>

            <!-- ========================================================================================== -->
            <!-- S2 CARD OUTER CONTAINER -->
            <!-- ========================================================================================== -->
            <div ref="s2Outer"
                class="card select-none my-24 mx-4 sm:mx-10 md:mx-20 lg:mx-28 xl:mx-32 rounded-lg ease duration-300 overflow-hidden">

                <!-- ========================================================================================== -->
                <!-- S2 CARD INNER CONTAINER -->
                <!-- ========================================================================================== -->
                <div ref="s2Inner"
                    class="select-none max-w-6xl py-6 sm:py-10 px-6 sm:px-8 md:px-10 lg:px-12 flex flex-col gap-5 sm:gap-7 md:gap-8 rounded-xl border border-card-whiteish border-opacity-20 bg-card-blackish bg-opacity-25 shadow-card-shadow ease duration-500">

                    <!-- ========================================================================================== -->
                    <!-- S2 CARD GRADIENT -->
                    <!-- ========================================================================================== -->
                    <div style="background: radial-gradient(circle, rgba(239, 239, 239, 0.05), rgba(239, 239, 239, 0.05) 10%, transparent, transparent 100%);"
                        class="circle-mouse-gradient absolute w-screen h-screen top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200 -z-10">
                    </div>

                    <!-- ========================================================================================== -->
                    <!-- S2 CARD TITLE & ABOUT TEXT -->
                    <!-- ========================================================================================== -->
                    <h3 ref="s2Title"
                        class="font-uncut text-lg sm:text-xl md:text-2xl font-bold text-gray/50 ease duration-300">
                        Neuro-Engineering Solutions</h3>
                    <!-- line - animate -->
                    <div ref="s2Line" class="h-0.5 w-60 bg-primary/400 rounded-full"></div>

                    <!-- ========================================================================================== -->
                    <!-- S2 SEE MORE -->
                    <!-- ========================================================================================== -->
                    <div class="inline sm:hidden select-all">
                        <p
                            class="select-none ml-1  font-poppins text-sm font-thin tracking-wide text-gray/50 ease duration-300">
                            View <span ref="toggleTitle"
                                class="toggleTitle text-primary/400 hover:underline cursor-pointer">more</span>
                            <span class="toggleIcon text-primary/400" ref="toggleIcon">+</span>
                        </p>
                    </div>

                    <p ref="s2Text"
                        class="cardText opacity-0 hidden sm:inline font-poppins text-sm sm:text-base md:text-lg leading-tight md:leading-normal lg:leading-8 font-light sm:font-normal tracking-wide text-gray/200 ease duration-300">
                        Scientists have been trying to unlock the secrets of the brain for generations. We’re not
                        saying
                        we’ve succeeded - but we’re pretty close, and our solutions reflect that.</p>
                    <!-- ========================================================================================== -->
                    <!-- S2 POINTER ROWS CONTAINER -->
                    <!-- ========================================================================================== -->
                    <div ref="s2PointerCols" class="flex flex-col gap-4 sm:gap-7 mr-4 sm:mr-6 md:mr-10 lg:mr-20">
                        <!-- ========================================================================================== -->
                        <!-- S2 ROW 1 -->
                        <!-- ========================================================================================== -->
                        <div class="flex gap-3 sm:gap-7">
                            <!-- ========================================================================================== -->
                            <!-- S2 POINTER CONTAINER -->
                            <!-- ========================================================================================== -->
                            <div class="pointer flex items-center gap-4">
                                <img class="w-5 sm:w-6 md:w-7" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="line-clamp-2 font-poppins sm:leading-6 font-thin text-sm sm:text-base md:text-lg text-gray/50 ease duration-300">
                                    Custom-designed
                                    research tools
                                </p>
                            </div>
                            <!-- ========================================================================================== -->
                            <!-- S2 POINTER CONTAINER -->
                            <!-- ========================================================================================== -->
                            <div class="pointer flex items-center gap-4">
                                <img class="w-5 sm:w-6 md:w-7" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="line-clamp-2 font-poppins sm:leading-6 font-thin text-sm sm:text-base md:text-lg text-gray/50 ease duration-300">
                                    Engineering solutions
                                    for research labs
                                </p>
                            </div>
                            <!-- ========================================================================================== -->
                        </div>
                        <!-- ========================================================================================== -->
                        <!-- S2 ROW 2 -->
                        <!-- ========================================================================================== -->
                        <div>
                            <!-- ========================================================================================== -->
                            <!-- S2 POINTER CONTAINER -->
                            <!-- ========================================================================================== -->
                            <div class="pointer flex items-center gap-4">
                                <img class="w-5 sm:w-6 md:w-7" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="line-clamp-2 font-poppins sm:leading-6 font-thin text-sm sm:text-base md:text-lg text-gray/50 ease duration-300">
                                    Assistive technologies for people with neurological disorders
                                </p>
                            </div>
                            <!-- ========================================================================================== -->
                        </div>
                    </div>
                </div>
            </div>

            <!-- ========================================================================================== -->
            <!-- S3 CARD OUTER CONTAINER -->
            <!-- ========================================================================================== -->
            <div ref="s3Outer"
                class="card my-24 mx-4 sm:mx-10 md:mx-20 lg:mx-28 xl:mx-32 rounded-lg ease duration-300 overflow-hidden">

                <!-- ========================================================================================== -->
                <!-- S3 CARD INNER CONTAINER -->
                <!-- ========================================================================================== -->
                <div ref="s3Inner"
                    class="select-none max-w-6xl py-6 sm:py-10 px-6 sm:px-8 md:px-10 lg:px-12 flex flex-col gap-5 sm:gap-7 md:gap-8 rounded-xl border border-card-whiteish border-opacity-20 bg-card-blackish bg-opacity-25 shadow-card-shadow ease duration-500">

                    <!-- ========================================================================================== -->
                    <!-- S3 CARD GRADIENT -->
                    <!-- ========================================================================================== -->
                    <div style="background: radial-gradient(circle, rgba(239, 239, 239, 0.05), rgba(239, 239, 239, 0.05) 10%, transparent, transparent 100%);"
                        class="circle-mouse-gradient absolute w-screen h-screen top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200 -z-10">
                    </div>

                    <!-- ========================================================================================== -->
                    <!-- S3 CARD TITLE & ABOUT TEXT -->
                    <!-- ========================================================================================== -->
                    <h3 ref="s3Title"
                        class="font-uncut text-lg sm:text-xl md:text-2xl font-bold text-gray/50 ease duration-300">
                        Custom AI Solutions</h3>
                    <!-- line - animate -->
                    <div ref="s3Line" class="h-0.5 w-60 bg-primary/400 rounded-full"></div>

                    <!-- ========================================================================================== -->
                    <!-- S3 SEE MORE -->
                    <!-- ========================================================================================== -->
                    <div class="inline sm:hidden select-all">
                        <p
                            class="select-none ml-1  font-poppins text-sm font-thin tracking-wide text-gray/50 ease duration-300">
                            View <span ref="toggleTitle"
                                class="toggleTitle text-primary/400 hover:underline cursor-pointer">more</span>
                            <span class="toggleIcon text-primary/400" ref="toggleIcon">+</span>
                        </p>
                    </div>

                    <p ref="s3Text"
                        class="cardText opacity-0 hidden sm:inline font-poppins text-sm sm:text-base md:text-lg leading-tight md:leading-normal lg:leading-8 font-light sm:font-normal tracking-wide text-gray/200 ease duration-300">
                        AI is both the Holy Grail of the Internet and the sign of End Times. We see it exactly as it is
                        though - a tool to make our lives, and by extension, your lives easier. </p>
                    <!-- ========================================================================================== -->
                    <!-- S3 POINTER COLUMNS CONTAINER -->
                    <!-- ========================================================================================== -->
                    <div ref="s3PointerCols" class="flex mt-2 gap-6">
                        <!-- ========================================================================================== -->
                        <!-- S3 COLUMN 1 -->
                        <!-- ========================================================================================== -->
                        <div class="flex flex-col gap-3 sm:gap-7">
                            <!-- ========================================================================================== -->
                            <!-- S3 POINTER CONTAINER -->
                            <!-- ========================================================================================== -->
                            <div class="pointer flex items-center gap-4">
                                <img class="w-5 sm:w-6 md:w-7" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="line-clamp-2 font-poppins sm:leading-6 font-thin text-sm sm:text-base md:text-lg text-gray/50 ease duration-300">
                                    Customised NLP models for chatbots
                                </p>
                            </div>
                            <!-- ========================================================================================== -->
                            <!-- S3 POINTER CONTAINER -->
                            <!-- ========================================================================================== -->
                            <div class="pointer flex items-center gap-4">
                                <img class="w-5 sm:w-6 md:w-7" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="line-clamp-2 font-poppins sm:leading-6 font-thin text-sm sm:text-base md:text-lg text-gray/50 ease duration-300">
                                    Object detection and recognition models
                                </p>
                            </div>
                            <!-- ========================================================================================== -->
                            <!-- S3 POINTER CONTAINER -->
                            <!-- ========================================================================================== -->
                            <div class="pointer flex items-center gap-4">
                                <img class="w-5 sm:w-6 md:w-7" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="line-clamp-2 font-poppins sm:leading-6 font-thin text-sm sm:text-base md:text-lg text-gray/50 ease duration-300">
                                    Fraud detection models for financial institutions
                                </p>
                            </div>
                        </div>
                        <!-- ========================================================================================== -->
                        <!-- S3 COLUMN 1 -->
                        <!-- ========================================================================================== -->
                        <div class="mb-5 sm:mb-10 flex flex-col gap-3 sm:gap-7">
                            <!-- ========================================================================================== -->
                            <!-- S3 POINTER CONTAINER -->
                            <!-- ========================================================================================== -->
                            <div class="pointer flex items-center gap-4">
                                <img class="w-5 sm:w-6 md:w-7" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="line-clamp-2 font-poppins sm:leading-6 font-thin text-sm sm:text-base md:text-lg text-gray/50 ease duration-300">
                                    Predictive maintenance for industrial equipment
                                </p>
                            </div>
                            <!-- ========================================================================================== -->
                            <!-- S3 POINTER CONTAINER -->
                            <!-- ========================================================================================== -->
                            <div class="pointer flex items-center gap-4">
                                <img class="w-5 sm:w-6 md:w-7" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="line-clamp-2 font-poppins sm:leading-6 font-thin text-sm sm:text-base md:text-lg text-gray/50 ease duration-300">
                                    Recommender systems for E-commerce platforms
                                </p>
                            </div>
                            <!-- ========================================================================================== -->
                            <!-- S3 POINTER CONTAINER -->
                            <!-- ========================================================================================== -->
                            <div class="pointer flex items-center gap-4">
                                <img class="w-5 sm:w-6 md:w-7" src="../assets/img/homepage/services/arrow.svg"
                                    alt="arrow pointing towards text">
                                <p
                                    class="line-clamp-2 font-poppins sm:leading-6 font-thin text-sm sm:text-base md:text-lg text-gray/50 ease duration-300">
                                    and so on...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ========================================================================================== -->
        <!-- TESTIMONIALS SECTION -->
        <!-- ========================================================================================== -->
        <section ref="testimonialsOuter" class="flex flex-col items-center">
            <!-- ========================================================================================== -->
            <!-- T_OUTER CONTAINER -->
            <!-- ========================================================================================== -->
            <div class="w-full h-fit flex justify-center">
                <!-- ========================================================================================== -->
                <!-- T_INNER CONTAINER -->
                <!-- ========================================================================================== -->
                <div ref="testimonials"
                    class="max-w-6xl relative py-16 flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-12 my-24 mx-4 md:mx-6 lg:mx-10 xl:mx-32 2xl:mx-44 rounded-lg bg-surface/secondary ease duration-300">
                    <!-- ========================================================================================== -->
                    <!-- T_TITLE -->
                    <!-- ========================================================================================== -->
                    <h3 ref="testimonialsTitle"
                        class="text-2xl sm:text-3xl text-center font-semibold tracking-wider text-gray/50">
                        Trusted By</h3>
                    <!-- ========================================================================================== -->
                    <!-- TABS -->
                    <!-- ========================================================================================== -->
                    <div ref="testimonialsLogos" class=" w-11/12 flex justify-center">
                        <!-- ========================================================================================== -->
                        <!-- TAB --><!-- -- ACTIVE -- -->
                        <!-- ========================================================================================== -->
                        <div ref="logo"
                            class="logo w-1/3 md:w-1/5 h-20 sm:h-28 flex justify-center items-center bg-secondary/700-main/10 border-b-8 border-secondary/700-main ease duration-300">
                            <img class="w-3/5" src="../assets/img/nav/logo/full-logo.svg" alt="quillio logo">
                        </div>
                        <!-- ========================================================================================== -->
                        <!-- TAB -->
                        <!-- ========================================================================================== -->
                        <div ref="logo"
                            class="logo w-1/3 md:w-1/5 h-20 sm:h-28 flex justify-center items-center border-b-4 border-b-gray/50 ease duration-300 hover:bg-secondary/700-main/20">
                            <img class="w-3/5" src="../assets/img/nav/logo/full-logo.svg" alt="quillio logo">
                        </div>
                        <!-- ========================================================================================== -->
                        <!-- TAB -->
                        <!-- ========================================================================================== -->
                        <div ref="logo"
                            class="logo w-1/3 md:w-1/5 h-20 sm:h-28 flex justify-center items-center border-b-4 border-b-gray/50 ease duration-300 hover:bg-secondary/700-main/20">
                            <img class="w-3/5" src="../assets/img/nav/logo/full-logo.svg" alt="quillio logo">
                        </div>
                        <!-- ========================================================================================== -->
                        <!-- TAB -->
                        <!-- ========================================================================================== -->
                        <div ref="logo"
                            class="logo w-1/5 h-20 sm:h-28 hidden md:flex justify-center items-center border-b-4 border-b-gray/50 ease duration-300 hover:bg-secondary/700-main/20">
                            <img class="w-3/5" src="../assets/img/nav/logo/full-logo.svg" alt="quillio logo">
                        </div>
                        <!-- ========================================================================================== -->
                        <!-- TAB -->
                        <!-- ========================================================================================== -->
                        <div ref="logo"
                            class="logo w-1/5 h-20 sm:h-28 hidden md:flex justify-center items-center border-b-4 border-b-gray/50 ease duration-300 hover:bg-secondary/700-main/20">
                            <img class="w-3/5" src="../assets/img/nav/logo/full-logo.svg" alt="quillio logo">
                        </div>
                    </div>
                    <!-- ========================================================================================== -->
                    <!-- QUOTE -->
                    <!-- ========================================================================================== -->
                    <p ref="testimonialsQuote"
                        class=" mx-10 italic font-poppins font-medium text-lg sm:text-xl md:text-2xl tracking-wide text-center text-gray/50">
                        “iawuefh awuieo fhaweioufh awepifhuaw pifuhqwiofuh qw iouefhwe fhqweuiofh
                        qweioufhqwiofuhweoiufhqwoif
                        uh.”
                    </p>
                    <!-- ========================================================================================== -->
                    <!-- PERSONA -->
                    <!-- ========================================================================================== -->
                    <div ref="testimonialsPersona" class="flex items-center gap-5 mx-6">
                        <img class="w-12" src="../assets/img/homepage/testimonials/persona/person.png" alt="persona">
                        <h3 class="font-avenir font-light tracking-wide text-lg md:text-xl lg:text-2xl text-gray/50">
                            Full
                            Name -
                            Company
                            Name</h3>
                    </div>
                </div>
            </div>
        </section>

        <!-- ========================================================================================== -->
        <!-- OUR STACK SECTION -->
        <!-- ========================================================================================== -->
        <section ref="ourStackOuter" class="flex flex-col items-center bg-gray/900">

            <!-- ========================================================================================== -->
            <!-- OS OUTER CONTAINER -->
            <!-- ========================================================================================== -->
            <div class="w-full flex justify-center max-w-6xl">
                <!-- ========================================================================================== -->
                <!-- OS INNER CONTAINER -->
                <!-- ========================================================================================== -->
                <div ref="ourStackInner"
                    class="min-w-full relative py-16 flex flex-col items-center justify-center my-24 mx-4 md:mx-6 lg:mx-10 xl:mx-32 2xl:mx-44 rounded-lg bg-surface/secondary ease duration-300">
                    <!-- ========================================================================================== -->
                    <!-- OS TITLE -->
                    <!-- ========================================================================================== -->
                    <h3 ref="ourStackTitle"
                        class="text-2xl sm:text-3xl mb-10 sm:mb-14 text-center font-semibold tracking-wider text-gray/50">
                        Our
                        Tech Stack</h3>
                    <!-- ========================================================================================== -->
                    <!-- OS STACKS -->
                    <!-- ========================================================================================== -->
                    <div id="os-stacks" ref="ourStackItemContainer"
                        class="flex justify-around items-center gap-16 sm:gap-20 md:gap-24 lg:gap-28 px-16">

                        <div ref="c++" class="w-1/4 my-8 flex flex-col justify-center items-center">
                            <img class="w-14 sm:w-16 md:w-20 lg:w-24 mb-8 duration-300"
                                src="../assets/img/homepage/tech-stack/c++.png" alt="python logo">
                            <h3
                                class="text-center font-avenir font-light tracking-wide text-lg md:text-xl sm:text-2xl text-gray/50">
                                Python</h3>
                        </div>

                        <div ref="python" class="w-1/4 my-8 flex flex-col justify-center items-center">
                            <img class="w-14 sm:w-16 md:w-20 lg:w-24 mb-8 duration-300"
                                src="../assets/img/homepage/tech-stack/python.png" alt="python logo">
                            <h3
                                class="text-center font-avenir font-light tracking-wide text-lg md:text-xl sm:text-2xl text-gray/50">
                                Python</h3>
                        </div>

                        <div ref="javaScript" class="w-1/4 my-8 flex flex-col justify-center items-center">
                            <img class="w-14 sm:w-16 md:w-20 lg:w-24 mb-8 ease duration-300"
                                src="../assets/img/homepage/tech-stack/javascript.png" alt="javascript logo">
                            <h3
                                class="text-center font-avenir font-light tracking-wide text-lg md:text-xl sm:text-2xl text-gray/50">
                                JavaScript</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ========================================================================================== -->
        <!-- CONTACT US SECTION -->
        <!-- ========================================================================================== -->
        <section ref="contactUsContainer" class="w-full bg-surface/secondary">

            <!-- ========================================================================================== -->
            <!-- OUTER CONTAINER -->
            <!-- ========================================================================================== -->
            <div
                class="py-[8vw] px-12 md:px-16 lg:px-20 xl:px-32 2xl:px-48 flex flex-col md:flex-row gap-8 sm:gap-20 md:gap-14 lg:gap-20 ease duration-300">
                <!-- ========================================================================================== -->
                <!-- INNER CONTAINER -->
                <!-- ========================================================================================== -->
                <div class="w-full">
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
                            class="mb-10 font-poppins text-sm sm:text-lg md:text-base xl:text-lg tracking-wide font-light xl:leading-9 text-gray/50">
                            We
                            aim to please. We go above and beyond to ensure that you gain enough value to keep coming back
                        </p>
                        <p ref="contactUsAbout2"
                            class="font-poppins text-sm sm:text-lg md:text-base xl:text-lg tracking-wide font-light xl:leading-9 text-gray/50">
                            Intrigued
                            enough? Let’s have a conversation about your next big idea.</p>
                    </div>
                </div>

                <!-- ========================================================================================== -->
                <!-- EMAIL -->
                <!-- ========================================================================================== -->
                <EmailForm />
            </div>
        </section>
    </div>

    <!-- FOOTER -->
    <Footer />
</template>

<script setup>

//========================================================================================================================
//==================================================== IMPORTS ===========================================================

//Vue imports
import { ref, onMounted } from 'vue';
//GSAP imports
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
//globalAnimations.js
import { pageTransition, cardAnimation } from '../composables/globalAnimations';
//FOOTER import
import Footer from '../components/Footer.vue';
//EmailForm import
import EmailForm from '../components/EmailForm.vue';
//=======================================================
//Register scrollTrigger
gsap.registerPlugin(scrollTrigger);
//=======================================================

//========================================================================================================================
//================================================= PAGE ELEMENTS ========================================================

//FULL PAGE CONTAINER//==================================
const container = ref(null);
//=======================================================

//GSAP animations//======================================
const animations = gsap;
const animationsTimeline = gsap.timeline();
//=======================================================

//HERO SECTION elements//================================
const heroContainer = ref(null);
const heroTitleContainer = ref(null);
const heroTitle = ref(null);
const heroSubTitle = ref(null);
//=======================================================

//WHAT WE DO SECTION//===================================
const whatWeDoContainer = ref(null);
const whatWeDoTitle = ref(null);
//=======================================================

//SERVICE CARDS SECTION=======================================
const services = ref(null);//all cards container
//SERVICE 1 (Audio Signal Processing and Plugins)
const s1Outer = ref(null);
const s1Inner = ref(null);
const s1Title = ref(null);
const s1Line = ref(null);
const s1Text = ref(null);
const s1PointerCols = ref(null);

//SERVICE 2 (Neuro Engineering Solutions)
const s2Outer = ref(null);
const s2Inner = ref(null);
const s2Title = ref(null);
const s2Line = ref(null);
const s2Text = ref(null);
const s2PointerCols = ref(null);

//SERVICE 3 (Custom AI Solutions)
const s3Outer = ref(null);
const s3Inner = ref(null);
const s3Title = ref(null);
const s3Line = ref(null);
const s3Text = ref(null);
const s3PointerCols = ref(null);
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
const ourStackItemContainer = ref(null);
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



//========================================================================================================================
//================================================= PAGE ANIMATIONS ======================================================

onMounted(() => {

    //================= SEE MORE SECTIONS FOR CARDS =========================
    const toggleTitle = document.querySelectorAll('.toggleTitle');

    toggleTitle.forEach((title) => {
        title.addEventListener('click', () => {
            const cardParent = title.parentElement.parentElement.parentElement;
            const cardText = cardParent.querySelector('.cardText');

            const icon = title.parentElement.querySelector('.toggleIcon');

            if (cardText.classList.contains('hidden')) {

                title.textContent = 'less';
                icon.textContent = ' -';

                cardText.classList.remove('hidden');
                cardText.classList.add('inline', 'opacity-1');

            } else {

                title.textContent = 'more';
                icon.textContent = ' +';

                cardText.classList.remove('inline');
                cardText.classList.add('hidden', 'opacity-0');
            }
        });
    });

    //================= MOUSE OVER CARD ROTATION =========================

    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {

        const cardGradient = card.querySelector('.circle-mouse-gradient');

        card.addEventListener('mouseenter', () => {
            card.addEventListener('mousemove', (e) => {
                const maxRotation = 20;
                const rotationX = (e.clientY / window.innerHeight - 0.5) * maxRotation;
                const rotationY = (e.clientX / window.innerWidth - 0.5) * maxRotation;

                card.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;


                cardGradient.style.left = `${e.clientX - card.getBoundingClientRect().left}px`;
                cardGradient.style.top = `${e.clientY - card.getBoundingClientRect().top}px`;
            });
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    });

    //================= HERO SECTION =========================

    /* HERO TITLE WORD ANIMATION */
    const heroTitleWords = document.querySelectorAll('.heroTitleWord');

    heroTitleWords.forEach((word) => {
        const wordText = word.textContent;
        word.textContent = '';

        const wordTimeline = gsap.timeline();

        wordText.split('').map((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            word.appendChild(span);

            wordTimeline.from(span, {
                duration: 0.09,
                opacity: 0,
                x: 20,
            }, `letter-${index}`);
        });

        animationsTimeline.add(wordTimeline, '>');
    });

    /* HERO SUB TITLE ANIMATION */
    animationsTimeline.fromTo(heroSubTitle.value, {
        translateY: '-10%',
        opacity: 0,
    }, {
        translateY: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: 'Power2.ease',
    });

    /* HERO TITLE CONTAINER - parrelax */
    animations.to(heroTitleContainer.value, {
        translateY: '+100',
        scrollTrigger: {
            trigger: heroContainer.value,
            start: 'top',
            end: 'center top',
            scrub: 1,
        },
    });

    //========================================================
    //================= WHAT WE DO ===========================

    //Title animation onEnter
    animations.from(whatWeDoTitle.value, {
        translateY: '-100%',
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: whatWeDoContainer.value,
            start: 'top center',
        },
    });

    animations.from(whatWeDoTitle.value, {
        translateY: '+150%',
        scrollTrigger: {
            trigger: whatWeDoContainer.value,
            start: 'top center',
            end: 'bottom top',
            scrub: 1,
        },
    });

    //========================================================
    //================= SERVICES =============================

    cardAnimation(s1Outer, s1Inner, s1Title, s1Line, s1Text, s1PointerCols);
    cardAnimation(s2Outer, s2Inner, s2Title, s2Line, s2Text, s2PointerCols);
    cardAnimation(s3Outer, s3Inner, s3Title, s3Line, s3Text, s3PointerCols);

    gsap.fromTo(s1Outer.value, {
        translateX: '0%',
        opacity: 1,
    }, {
        translateX: '+10%',
        opacity: 0,
        scrollTrigger: {
            trigger: s1Outer.value,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5
        }
    });

    gsap.fromTo(s2Outer.value, {
        translateX: '0%',
        opacity: 1,
    }, {
        translateX: '-10%',
        opacity: 0,
        scrollTrigger: {
            trigger: s2Outer.value,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5
        }
    });

    gsap.fromTo(s3Outer.value, {
        translateX: '0%',
        opacity: 1,
    }, {
        translateX: '+10%',
        opacity: 0,
        scrollTrigger: {
            trigger: s3Outer.value,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5
        }
    });

    //========================================================
    //================= TESTIMONIALS =========================

    animations.fromTo(testimonialsOuter.value, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 0.5,
        ease: 'Power2.easeOut',
        scrollTrigger: {
            trigger: testimonialsOuter.value,
            start: 'top center',
        }
    });

    /* 
    old animation
    
    const testimonialsTimeline = gsap.timeline;
    
    testimonialsTimeline({
        scrollTrigger: {
            trigger: testimonialsOuter.value,
            start: 'center bottom'
        }
    })
    
    .fromTo(testimonialsLogos.value.children, {
        translateX: -20,
        autoAlpha: 0,
    }, {
        translateX: 0,
        autoAlpha: 1,
        stagger: 0.2,
        duration: 0.1,
    }).fromTo(testimonialsQuote.value, {
        translateY: -60,
        autoAlpha: 0,
    }, {
        translateY: 0,
        autoAlpha: 1,
        duration: 0.8,
        delay: 0.3,
        ease: 'Power2.easeOut',
    });
    */

    //========================================================
    //================= OUR STACK ============================

    animations.fromTo(ourStackOuter.value, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 0.5,
        ease: 'Power2.ease',
        scrollTrigger: {
            trigger: ourStackOuter.value,
            start: 'center bottom',
        },
    });

    /* 
    old animation
    const ourStackTimeline = gsap.timeline;
    
    ourStackTimeline({
        scrollTrigger: {
            trigger: ourStackOuter.value,
            start: 'center bottom'
        }
    }).fromTo(ourStackItemContainer.value.children, {
        translateX: -20,
        autoAlpha: 0,
    }, {
        translateX: 0,
        autoAlpha: 1,
        stagger: 0.04,
    });
    */

    //========================================================
    //================= CONTACT US LINE ======================

    animations.fromTo(contactUsLine.value, {
        width: '0%',
    }, {
        width: '80%',
        scrollTrigger: {
            trigger: contactUsContainer.value,
            start: 'top center',
            end: 'bottom center',
            scrub: 5,
        },
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: contactUsContainer.value,
            start: 'center center',
        },
    }).fromTo(contactUsAbout1.value, {
        translateX: -20,
        autoAlpha: 0,
    }, {
        translateX: 0,
        autoAlpha: 1,
        duration: 0.3,
        ease: 'Power2.easeOut',
    }).fromTo(contactUsAbout2.value, {
        translateX: -20,
        autoAlpha: 0,
    }, {
        translateX: 0,
        autoAlpha: 1,
        duration: 0.3,
        ease: 'Power2.easeOut',
    });

});

</script>