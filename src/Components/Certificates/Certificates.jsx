'use client'
import React, {useState} from 'react';
import style from "./Certificates.module.css";

import CertiContainer from './CertiComponents/CertiContainer/CertiContainer';
import CertiModel from './CertiComponents/CertiModel/CertiModel';

// import MERN from "../../../../public/images/MERN.png";
// import REACTJS from "../../../public/images/REACTJS.png";
// import JS from "../../../public/images/JS.png";
// import WEBDEV from "../../../public/images/WEBDEV.png";

const Certificates = () => {

    const CertificateDATA = [
        {
            src:"MERN.jpg",
            title:"MERNStack",
            subTitle:"2022",
            color:"#ddd"
        },
        {
            src:"REACTJS.jpg",
            title:"React JS",
            subTitle:"2021",
            color:"#ddd"
        },
        {
            src:"JS.jpg",
            title:"JavaScript",
            subTitle:"2021",
            color:"#ddd"
        },
        {
            src:"WEBDEV.jpg",
            title:"Web Development BootCamp",
            subTitle:"2020",
            color:"#ddd"
        },
    ];

    const [model , setModel] = useState({active:false, index:0});
    return(
        <>
            
            <div className={style.container}>
                <h1>Certification</h1>
                <div className={style.main}>
                <div className={style.mainBody}>
                    {
                        CertificateDATA.map((cer, index) =>{
                            return <CertiContainer key={index} index={index} title={cer.title} subTitle={cer.subTitle} setModel={setModel} />
                        })
                    }
                </div>
                <CertiModel model={model} CertificateDATA={CertificateDATA} />
            </div>
            </div>

        </>
    );
}
export default Certificates;