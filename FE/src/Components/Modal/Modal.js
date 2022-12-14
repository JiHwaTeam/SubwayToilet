import {useState, useEffect} from "react";
import "./Modal.scss"
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalContent from "./ModalContent/ModalContent";
import ModalContentWrite from "./ModalContent/ModalContentWrite";
import axios from 'axios';

// import ModalInfo from "./ModalInfo/ModalInfo";
// import ModalScore from "./ModalScore/ModalScore";
// import ModalReview from "./ModalReview/ModalReview";

const Modal = (props) => {
  const [modal, setModal] = useState(false);
  const [toilet, setToilet] = useState({});
  const [review, setReview] = useState([]);
  const [load, setLoad] = useState(false);
  const handleClickOpen= () => {
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  }
  console.log(typeof(props.selectStation) );
  const SERVER_URL = `${process.env.REACT_APP_BACK}toilet/?stinCd=${props.selectStation}`;

  useEffect(()=>{
    axios.get(SERVER_URL).then((res) => {
      console.log(res.data);
      setToilet(res.data.Toilet);
      setReview(res.data.Review);
      setLoad(true);
    });
  }, [])

  return (
    <div className='modal_modal'>
      {/* <button onClick={()=>{handleClickOpen()}}>Open Modal</button> */}
      <div>
      
        <div className='modal_modal_main'>
          
            {
              load && (<>
              <div className='modal_modal_modal'>
                <ModalHeader modal={modal} setModal={setModal} onClick={closeModal} toilet={toilet}/>
                <ModalContent toilet={toilet} review={review} setReview={setReview}/>
              </div>
              <div>
                <ModalContentWrite/>
              </div>
              </>)
            }
            
          
          

        </div>
      </div>
    </div>
  );
}

export default Modal;