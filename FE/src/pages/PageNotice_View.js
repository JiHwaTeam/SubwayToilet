import { useState,useEffect } from "react";
import './PageNotice.scss';
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import ReactInnerHTML from "../Components/ReactInnerHTML";
import PageNotice_Write from "./PageNotice_Write";


const PageNotice_View = (props) => {
    const [items, setItems] = useState([]);
    const [isModify, setIsModify] = useState(0);
    const [isAdminFlag, setIsAdminFlag] = useState('실패');
    const navigate = useNavigate();
    
    const SERVER_URL = process.env.REACT_APP_BACK + 'page-notice/view';
    const moveList = () => {
        navigate("/page-notice");
    }

    const params = useParams();

    const deletePost = () => {
        console.log(items);
        axios.delete(SERVER_URL,{
            data: {
                postId: items._id
            }
            
        }).then((res) =>{
            navigate("/page-notice");
        });
    }

    useEffect(()=>{
        axios.get(SERVER_URL, {
            params: {
                postId: params.postId
            } ,
            headers: {
                'Authorization': localStorage.getItem('access_token'),
            }
        }).then((res) => {
            setItems(res.data.post);
            setIsAdminFlag(res.data.msg.success);
            console.log(res.data);
        });



    }, [])
    
    
    return(
        <>
            <div className="NoticeView-wrap">
                <h1>공지사항</h1>
                
                <div className="viewContent-wrap">
                    
                    <h3 className="NoticeView_tag">공지사항 보기</h3>  
                    
                    <div className="viewContent-innerWrap">
                        <div className="viewContent-title">{items.title}</div>
                        <div className="viewContent-writer">
                            <div>{items.writer}</div>
                            <div>{new Date(items.date).toLocaleString()}</div>
                        </div>
                        <div className="viewContent-content">
                            <ReactInnerHTML data={items.content}/>
                        </div>
                    </div>
                    
                    
                    <div className='noticeButton-wrap'>
                        <button type='button' className='cancelButton' onClick={()=>{moveList()}}>목록</button>
                        {isAdminFlag === '성공' && <>  <button type='button'><Link to={'/page-notice/view/modify/' + items._id}  style={{ textDecoration: "none", color:'inherit'}}>수정</Link></button>
                            <button type='button' onClick={()=>{deletePost()}}>삭제</button> </>}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageNotice_View;