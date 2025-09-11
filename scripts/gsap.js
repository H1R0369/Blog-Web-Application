export function gsapInit() {

    // ========== Variables & Constants ==========

    // ---------- Element Constants ----------

    const hoverPulseLogos = document.querySelectorAll('.gsap-pulse-on-hover-logo');
    const hoverPulseBtns = document.querySelectorAll('.gsap-pulse-on-hover-btn');
    const hoverPulseBlogs = document.querySelectorAll('.gsap-pulse-on-hover-blog');

    const clickScaleLogos = document.querySelectorAll('.gsap-scale-on-click-logo');
    const clickScaleBtns = document.querySelectorAll('.gsap-scale-on-click-btn');
    const clickScaleBlogs = document.querySelectorAll('.gsap-scale-on-click-blog');

    // ---------- Other Constants ----------

    const hoverPulseObjects = [];
    const ClickScaleObjects = [];

    // ========== Loops ==========

    // ---------- Loops to push Objects (That pulse on hover) to hoverPulseObjects Array ----------

    hoverPulseLogos.forEach(el => {

        hoverPulseObjects.push(

            {
                element: el,
                scaleBig: 1.15,
                scaleSmall: 1.1
            }

        )
    })

    hoverPulseBtns.forEach(el => {

        hoverPulseObjects.push(
        
            {
                element: el,
                scaleBig: 1.3,
                scaleSmall: 1.2
            }

        )
    })

    hoverPulseBlogs.forEach(el => {

        hoverPulseObjects.push(
    
            {
                element: el,
                scaleBig: 1.05,
                scaleSmall: 1.02
            }
        
        )
    })

    // ---------- Loops to push Objects (That Scale when clicked) to ClickScaleObjects Array ----------

    clickScaleLogos.forEach(el => {

        ClickScaleObjects.push(

            {
                element: el,
                scaleBig: 1.15,
            }

        )
    })

    clickScaleBtns.forEach(el => {

        ClickScaleObjects.push(

            {
                element: el,
                scaleBig: 1.3,
            }

        )
    })

    clickScaleBlogs.forEach(el => {

        ClickScaleObjects.push(

            {
                element: el,
                scaleBig: 1.05,
            }

        )
    })

    // ---------- Call handleHoverPulse() to handle Animations for Objects in hoverPulseObjects ----------

    if (window.innerWidth >= 1150) {

        hoverPulseObjects.forEach(obj => {

            handleHoverPulse(obj.element, [obj.scaleBig, obj.scaleSmall])

        })

    }


    // ---------- Call handleHoverPulse() to handle Animations for Objects in hoverPulseObjects ----------

    if (window.innerWidth <= 1150) {

        ClickScaleObjects.forEach(obj => {

            handleClickScale(obj.element, obj.scaleBig)

        })
        
    }

    // ========== Functions ==========

    // ---------- Handles Hover Pulse ----------

    function handleHoverPulse(element, scalesArr) {
        
        const tl = gsap.timeline({ paused: true});
        
        tl
            .to(element, {

                scale: scalesArr[0]

            })

            .to(element, {

                scale: scalesArr[1],
                repeat: -1,
                yoyo: true

            })


        element.addEventListener('mouseenter', () => {

            tl.restart()

        })

        element.addEventListener('mouseleave', () => {
            
            tl.pause();

            gsap.to(element, {
                scale: 1
            })

        })

    }

    // ---------- Handles Scale on Click ----------

    function handleClickScale(element, scaleBig) {

        const scaleTween = gsap.to(element, {

            scale: scaleBig,
            duration: 0.2,
            repeat: 1,
            yoyo: true,
            paused: true

        });

        element.addEventListener('click', () => {

            scaleTween.restart();
            console.log('clicked')

        })

    }

}



