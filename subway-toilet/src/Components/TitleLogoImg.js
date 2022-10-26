import mainIMG from "../images/MAIN.png";
import './Login.scss';

const TitleLogoImg = () => {
    
    return(
        <div className="titleLogoImg-wrap">
            <h1>로고 or 문구</h1>
            <img className="LogoImg" src={mainIMG}/>
        </div>
    );
}

export default TitleLogoImg;