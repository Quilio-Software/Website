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

export function serviceAnimation(container, img, card) {
    gsap.fromTo(img.value, {
        translateX: '0%',
        opacity: 0.3,
        y: '-70%',
    }, {
        translateX: '-10%', 
        opacity: 1, 
        y: '-50%',
        scrollTrigger: { 
            trigger: container.value, 
            start: 'top bottom', 
            end: 'center center', 
            scrub: 1,
        }
    });

    gsap.fromTo(card.value, {
        translateX: '-10%',
        opacity: 0.3,
        y: '-20%',
    }, {
        translateX: '0%', 
        opacity: 1,
        y: '0%',
        scrollTrigger: { 
            trigger: container.value, 
            start: 'top bottom', 
            end: 'center center', 
            scrub: 1,
        }
    });
}

export function testimonialsAndTechStackAnimation(container, title, obj1, obj2, obj3) {
    gsap.timeline({
        scrollTrigger: {
            trigger: container.value, start: 'top center',
        }
    }).fromTo(container.value, {
        opacity: 0
    }, {
        opacity: 1,
        ease: 'Power2.easeIn',
        duration: 0.1,
        //TITLE
    }).fromTo(title.value, {
        y: '100px',
        opacity: 0
    }, {
        y: '0%', opacity: 1,
        ease: 'Power2.easeIn',
        duration: 0.5,
        //OBJ1
    }).fromTo(obj1.value, {
        opacity: 0,
        y: '100px',
    }, {
        opacity: 1,
        y: '0px',
        ease: 'Power2.easeIn',
        duration: 0.5,
        //OBJ2
    }).fromTo(obj2.value, {
        opacity: 0,
        y: '100px',
    }, {
        opacity: 1,
        y: '0px',
        ease: 'Power2.easeIn',
        duration: 0.5,
        //OBJ3
    }).fromTo(obj3.value, {
        opacity: 0,
        y: '100px',
    }, {
        opacity: 1,
        y: '0px',
        ease: 'Power2.easeIn',
        duration: 0.5,
    });
}