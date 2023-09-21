import { onMounted } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTrigger);

export function pageTransition(el) {
    onMounted(() => {
        gsap.from(el.value, {
            //delay: 0.5,
            duration: 0.5,
            x: '-1000',
            autoAlpha: 0,
            ease: 'Power2.out',
            //ease: 'back.out(1.7)',
        });
    });

    onBeforeRouteLeave((to, from, next) => {
        gsap.to(el.value, {
            duration: 0.5,
            x: '+1000',
            autoAlpha: 0,
            ease: 'Power2.out',
            onComplete: () => {
                next();
            }
        });
    });
}

export function cardAnimation(outer, inner, title, line, text, pointerContainer) {
    //==========================================================================================
    // CARD TITLE ANIMATION
    //==========================================================================================
    //timeline for card title animation
    const cardTitleAnimation = gsap.timeline();

    let titleText = title.value.textContent;//store title textContent
    let words = titleText.split(" ");//split all words into array
    title.value.textContent = '';//delete title textContent
    //loop through words array
    words.forEach(word => {
        word += " ";//add space to each word
        const span = document.createElement('span');//create span element for each word
        span.textContent = word;//give span element the textContent from the word
        span.classList.add('titleWord');//add class for later querySelection
        title.value.appendChild(span);//attach span element to original title
    });
    //now select each title word span element as array
    words = title.value.querySelectorAll('.titleWord');
    //loop through array of spans
    words.forEach((word) => {
        const wordText = word.textContent;//store text content
        word.textContent = '';//delete original text content

        const wordTimeline = gsap.timeline();//create timeline for each word

        //split words into letters
        wordText.split('').map((letter, index) => {
            const span = document.createElement('span');//create span element for each letter
            span.textContent = letter;//give span the letter string
            word.appendChild(span);//attach letter span element to parent span

            //create timeline for each letter
            wordTimeline.from(span, {
                duration: 0.03,
                opacity: 0,
                x: 20,
            }, `letter-${index}`);
        });

        title.value.appendChild(word);//attach each word back to title container
        cardTitleAnimation.add(wordTimeline, '>');//add each wordTimeline (for letters) to main title animation timeline
        cardTitleAnimation.pause();//pause until later called
    });
    //==========================================================================================
    // END - CARD TITLE ANIMATION
    //==========================================================================================

    //==========================================================================================
    // REST OF CARD ANIMATION
    //==========================================================================================
    
    //select all pointers - store in array
    const pointers = pointerContainer.value.querySelectorAll('.pointer');

    /* cardTimeline - -cardTitleAnimation */
    gsap.timeline({
        scrollTrigger: {
            /* ============================================= */
            /* SCROLL TRIGGER */
            trigger: outer.value,
            start: 'center bottom',
            onEnter: function () {
                cardTitleAnimation.play();
            }
        }
        /* ============================================= */
        /* OUTER CONTAINER */
    }).fromTo(outer.value, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 0.5,
        ease: 'Power2.ease'
        /* ============================================= */
        /* CARD ABOUT TEXT */
    }).fromTo(text.value, {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.3,
        ease: 'Power2.easeOut',
        /* ============================================= */
        /* POINTERS */
    }).fromTo(pointers, {
        autoAlpha: 0,
        translateX: -20,
    }, {
        autoAlpha: 1,
        translateX: 0,
        duration: 0.05,
        ease: 'Power2.ease',
        stagger: 0.2,
        /* ============================================= */
        /* CARD BACKGROUND + BORDER OPACITY */
    }).fromTo(inner.value, {
        backgroundColor: 'rgba(41, 31, 51, 0)',
        borderColor: 'rgba(241, 252, 231, 0)',
        boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
        '--tw-shadow': '2px 10px 5px rgba(0, 0, 0, 0)',
        '--tw-shadow-colored': '0px 0px 0px 0px',
    }, {
        backgroundColor: 'rgba(41, 31, 51, 0.25)',
        borderColor: 'rgba(241, 252, 231, 0.2)',
        boxShadow: '2px 10px 5px rgba(0, 0, 0, 0.25)',
        '--tw-shadow': '2px 10px 5px rgba(0, 0, 0, 0.25)',
        '--tw-shadow-colored': '2px 10px 5px 10px',
        duration: 0.3,
        ease: 'Power2.easeOut',
        delay: -0.3,
    });

    /* PARRELAX */
    gsap.fromTo(line.value, {
        width: '10%',
    }, {
        width: '50%',
        scrollTrigger: {
            trigger: outer.value,
            start: 'top center',
            end: 'bottom top',
            scrub: 1
        }
    });
}
//==========================================================================================
// END - CARD ANIMATION
//==========================================================================================