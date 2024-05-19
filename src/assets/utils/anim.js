export const expand = {
    initial: {
        top: 0
    },
    enter: (i) => ({
        top: "100vh",
        transition: {
            duration: 1,
            delay: 0.2 * i,
            ease: [0.215, 0.61, 0.355, 1],
        },
        transitionEnd: { height: "0", top: "0" }
    })
}
export const opacity = {
    initial: {
        opacity: 0.5
    },
    enter: {
        opacity: 0
    },

}