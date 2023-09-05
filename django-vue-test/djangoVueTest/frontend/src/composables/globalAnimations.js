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
    gsap.to(img.value, {
        translateX: '-10%', opacity: 1, y: '-50%',
        scrollTrigger: { trigger: container.value, start: 'top center', end: 'bottom top', scrub: 1 }
    });
    gsap.to(card.value, {
        translateX: '10%', opacity: 1, y: '-50%',
        scrollTrigger: { trigger: container.value, start: 'top center', end: 'bottom top', scrub: 1 }
    });
}