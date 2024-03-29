//file no longer needed
import {useEffect, useRef} from 'react'

const useCanvas = draw => {
 
    const ref=useRef();

    useEffect(() =>{
        const canvas = ref.current;
        const context = canvas.getContext('2d')
        let count = 0
        let animationID

        const renderer = () => {
            count ++
            draw(context, count)
            animationID=window.requestAnimationFrame(renderer)
        }
        renderer()
        
        return () => window.cancelAnimationFrame(animationID)
    },[draw])

    return ref
}

export default useCanvas