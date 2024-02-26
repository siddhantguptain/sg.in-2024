import React , {useEffect , useRef} from 'react';
import style from "./CertiModel.module.css";
import Image from 'next/image';
import {motion} from 'framer-motion';
import gsap from'gsap';

const scaleAnimation = {
    intial:{scale:0, x:0,y:"-50%"},
    open:{scale:1, x:"-50%",y:"-50%" , transition:{duration:0.4, ease : [0.76,0,0.24,1]}},
    close:{scale:0, x:"-50%",y:"-50%" , transition:{duration:0.4, ease : [0.32,0,0.67,0]}},
    
}

const CertiModel = ({model, CertificateDATA}) => {
const {active, index} = model;
const modelContainer = useRef(null);

useEffect(()=>{
    const moveContainerX = gsap.quickTo(modelContainer.current, "left", {duration:0.8,ease:"power3"});
    const moveContainerY = gsap.quickTo(modelContainer.current, "top", {duration:0.8,ease:"power3"});   
    
    window.addEventListener("mousemove" , (el) =>{
        const {clientX , clientY} =el;
        moveContainerX(clientX);
        moveContainerY(clientY);
    })
    
} , []);



    return(
        <>
            <motion.div    
                    ref={modelContainer} 
                    variants={scaleAnimation} intial={"intial"} animate={active ? "open" : "close"}            
            
            className={style.container}>
                <div 
                    style={{top:index * -100 + "%"}}
                    className={style.slider}
                >  

                    {
                        CertificateDATA.map( (cer, index) =>{
                            const {title,src,color} = cer;
                            return(
                                <>
                                    <div className={style.model} key={`model_${index}`} style={{backgroundColor:color}} >
                                        <Image  className={style.imgContainer}
                                            src={`/images/${src}`}
                                            width={300}
                                            height={0}
                                            alt={title}
                                        />
                                    </div>
                                </>
                            );
                        })

                    }
                </div>
            </motion.div>
        </>
    );
}
export default CertiModel;