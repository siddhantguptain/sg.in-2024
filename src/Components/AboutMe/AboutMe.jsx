import style from "./AboutMe.module.css";

const AboutME = () => {
    return(
        <>
            <div className={style.container}>
            <div className={style.heading}>
                ABOUT ME
            </div>
            <div className={style.paragraph}>
            A highly innovative individual with a keen interest in developing and deploying new projects on World Wide Web. Ability to integrate market needs into technical solutions. 
            </div>
            </div>
        </>
    );
}
export default AboutME;