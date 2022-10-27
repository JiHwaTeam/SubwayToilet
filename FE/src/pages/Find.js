import TitleLogoImg from "../Components/TitleLogoImg";
import Find from "../Components/Find";
import Modify from "../Components/Modify";
import "./FindWrap.scss";

const Finds = () => {
    return(
        <div className="find-wrap">
            <div className='find-wrap_card'>
                <div className='find-wrap_card_left'>
                    <TitleLogoImg/>
                </div>
                <div className='find-wrap_card_right'>
                <Finds />
                <Modify />
                </div>
            </div>
        </div>
    );
};

export default Find;