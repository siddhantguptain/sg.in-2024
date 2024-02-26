import style from "./CertiContainer.module.css";

const CertiContainer = ({index , title , subTitle, setModel}) => {
    return(
        <>
            <div className={style.container}
                // onMouseEnter
                    onMouseEnter={() =>{setModel({active:true, index:index})}}
                // onMOuseLeave
                        onMouseLeave={() =>{setModel({active:false, index:index})}}   
            >
                <h2 className={style.title}>{title}</h2>
                <p className={style.subTitle}>{subTitle}</p>
            </div>
        </>
    );
}
export default CertiContainer;