import React, { useRef, useState } from "react";
import "./Modify.scss";
import axios from 'axios';

const Modify = () => {
    const SERVER_URL5 = 'http://localhost:8000/user/pw/reset';
    const [inputs, setInputs] = useState({
        password: '',
        pwd: '',
    });
    const [result, setResult] = useState('');
    // const [result, setResult] = useRef('');

    const { password, pwd } = inputs;
    const onChangeText = (e) => {
        console.dir(e.target.value);
        const { value, name } = e.target; // e.target에서 value와 name 추출
        setInputs({
          ...inputs, // 기존의 input 객체를 복사(불변성을 위해)
          [name]: value, // name 키를 가진 값을 value 로 변경
        });
        ModifyFindHandler();
        console.log(inputs.password,"vs", inputs.pwd);
    }

    const IdModifyHandler = (e) => {
        console.log(e.target);
        e.preventDefault();
        const password = e.target.password.value;
        const pwd = e.target.pwd.value;
        axios.update(SERVER_URL5, {
            password,
            pwd,
        })
        .then((res) => {
            console.log(res);
        });
    }

    // 비밀번호 재설정
    const ModifyFindHandler = () => {
            if (inputs.password.length < 1 || inputs.pwd.length < 1) {
                setResult('📝비밀번호 입력📝'); // 비밀번호 무입력 상태일 때와 둘 중에 하나의 값이 입력 상태가 아닐때
            } else if (inputs.password === inputs.pwd) {// 비밀번호가 같다면  
                setResult('✅일치✅');
            } else {// 비밀번호가 같지 않다면
                setResult('❌불일치❌');
            }
        }

    return (
        <div className="Modify">
            <h1 className="id-txt2">비밀번호 변경</h1>
            <form onSubmit={IdModifyHandler} className="modify-form">
                <br />
                <input type="password" name="password" placeholder='비밀번호' value={password} onChange={onChangeText}/>
                <br />
                <br />
                <input type="password" name="pwd" placeholder='비밀번호 확인' value={pwd} onChange={onChangeText}/>
                <br /><br />
                <div>
                    <span className="login-link">로그인하러 가기</span>
                </div>    
                <button type="Submit" className="id-btn">비밀번호 변경</button>
                <div className="result-pw">
                    {result}
                </div>
                
            </form>
        </div>
    )
};    

export default Modify;