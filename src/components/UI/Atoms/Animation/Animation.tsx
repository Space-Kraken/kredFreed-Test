import React from 'react'
import { motion } from "framer-motion";

export default function Animation(props:any) {
    return (
        <motion.div
            //TODO: Refactor to create a dinamic animation
            //! This logic limit the animation to fade in and out
            initial={{ opacity: props.initialOpacity }}
            animate={{ opacity: props.animateOpacity }}
            transition={{ duration: props.transitionDuration }}
            className={props.style}
        >
            {props.children}
        </motion.div>
    )
}

Animation.defaultProps = {
    // Fade in Animation
    initialOpacity: 0,
    animateOpacity: 1,
    transitionDuration: 0.5,
    style:'flex flex-col justify-center items-center',
}
