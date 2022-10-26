import React, {useState} from "react";
import MypageUser from "../Components/MypageUser";
import MypageReview from "../Components/MypageReview";
import MypageProductReviews from "../Components/MypageProductReviews";
import "./Mypage.scss";

function MyPage () {
    const [activeIndex, setActiveIndex] = useState(0);

    const tabClickHand=(index)=>{
        setActiveIndex(index);
    };

    // hooks로 Tab기능 구현
    const tabContArr=[
        {
            tabTitle:(
                <li className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHand(0)}>회원정보</li>
            ),
            tabCont:(
                <div>
                    <MypageUser />
                </div>
            )
        },
        {
            tabTitle:(
                <li className={activeIndex===1 ? "is-active2" : ""} onClick={()=>tabClickHand(1)}>작성한리뷰</li>
            ),
            tabCont:(
                <div>
                    <MypageReview />
                </div>
            )
        },
        {
            tabTitle:(
                <li className={activeIndex===2 ? "is-active3" : ""} onClick={()=>tabClickHand(2)}>내가 작성한 건의사항</li>
            ),
            tabCont:(
                <div>
                    <MypageProductReviews />
                </div>
            )
        }
    ];

    return (
        <div className="mypage-wrap">
            <li className="txt">
                {tabContArr.map((section, index)=>{
                    return section.tabTitle
                })}
            </li>
            <div>
                {tabContArr[activeIndex].tabCont}
            </div>
        </div>
    )
};

export default MyPage;
