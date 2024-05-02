import { motion } from "framer-motion"

const variants = {
    inicial: {
        opacity: 0,
        scale: 0
    },
    animate: ({index})=>(
        {
            opacity: 1,
            scale: 1,
            transition:{
                duration: 1,
                delay: index*1
            }
        }
    )
}

export const Gifs = ({gif, index}) => {
    return (
        <motion.img
            initial= "inicial"
            animate= "animate"
            variants={variants}
            className="gif" 
            custom={{index}}
            src={gif.images.original.url} 
            alt={gif.title} 
        />
        
    )
}