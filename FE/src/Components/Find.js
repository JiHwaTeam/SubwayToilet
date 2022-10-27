import React, {useState} from "react";
import axios from 'axios';
import "./Find.scss";

const Find = () => {
    const SERVER_URL3 = 'http://localhost:8000/user/id/find';
    const SERVER_URL4 = 'http://localhost:8000/user/pw/check';
    const [findIndex, setfindIndex] = useState(0);
    const [findinputs, setfindinputs ] = useState({
        userid: '',
        username: '',
        email: '',
    });

    const {userid, username, email} = findinputs;
    const onChangeText = (e) => {
        const { value, name } = e.target; // e.target에서 value와 name 추출
        setfindinputs({
          ...findinputs, // 기존의 input 객체를 복사(불변성을 위해)
          [name]: value, // name 키를 가진 값을 value 로 변경
        });
    }

    const IdFindHandler = (e) => {
        console.log(e.target);
        e.preventDefault();
        const name = e.target.username.value;
        const email = e.target.email.value;
        axios.post(SERVER_URL3, {
            name,
            email
        })
        .then((res) => {
            console.log(res);
        });
    }

    // 아이디 유무 검사
    const PassWordFindHandler = (e) => {
        console.log(e.target);
        e.preventDefault();
        const username = e.target.username.value;
        const userid = e.target.userid.value;
        const email = e.target.email.value;
    
        axios.post(SERVER_URL4, {
            username,
            userid,
            email
            }).then((res) => {
            console.log(res);
        
            if(res.data.code == 422) {
                alert("존재하지 않는 아이디 입니다.")
            }
            
            }).catch(function(error){
            console.log(error);
            })
        };

    const tabClickHand=(findIndex)=>{
        setfindIndex(findIndex);
        findinputs({
            userid: '',
            username: '',
            email: '',
            });
        };

    // hooks으로 Tab기능 구현
    const tabContArr=[
        {
            tabTitle:(
                <li className={findIndex===0 ? "is-active" : ""} onClick={()=>tabClickHand(0)}>아이디 찾기</li>
            ),
            tabCont:(
                <div>
                    <div className="find" style={{ display: "flex", flexDirection: "column" }}>
                    <h1 className="id-txt">아이디 찾기</h1>
                    <form onSubmit={IdFindHandler} className="find-form">
                        <input type="text" name="username" placeholder='이름' value={username} onChange={onChangeText}/>
                        <br />
                        <input type="text" name="email" placeholder='이메일' value={email} onChange={onChangeText}/>
                        <br />
                        <div>
                            <span className="login-link">로그인하러 가기</span>
                        </div>
                        <button type="Submit" className="id-btn">아이디 찾기</button>
                    </form>
                    </div>
                </div>
            )
        },
        {
            tabTitle:(
                <li className={findIndex===1 ? "is-active2" : ""} onClick={()=>tabClickHand(1)}>비밀번호 찾기</li>
            ),
            tabCont:(
                <div>
                    <div className="find" style={{ display: "flex", flexDirection: "column" }}>
                        <h1 className="id-txt">비밀번호 찾기</h1>
                        <form onSubmit={PassWordFindHandler} className="find-form">
                            <input type="text" name="username" placeholder='이름' value={username} onChange={onChangeText}/>
                            <br />
                            <input type="text" name="userid" placeholder='아이디' vlaue={userid} onChange={onChangeText}/>
                            <br />
                            <input type="text" name="email" placeholder='이메일' vlaue={email} onChange={onChangeText}/>
                            <br />
                            <div>
                                <span className="login-link">로그인하러 가기</span>
                            </div>
                            <button type="Submit" vlaue="비밀번호찾기" className="id-btn">비밀번호 찾기</button>
                        </form>
                    </div>
                </div>
            )
        },
    ];

    return (
        <div className="find-wrap">
            <ul className="find-txt">
                {tabContArr.map((section, findindex)=>{
                    return section.tabTitle
                })}
            </ul>
            <div>
                {tabContArr[findIndex].tabCont}
            </div>
        </div>
    )
};

export default Find;