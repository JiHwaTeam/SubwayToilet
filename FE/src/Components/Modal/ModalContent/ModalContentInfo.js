import "./ModalContentInfo.scss";
import disabled from "../../../images/icon-disabled.png";
import turnstiles from "../../../images/icon-turnstiles.png";

function ModalContentInfo({toilet}) {
  console.log("info", toilet);
  
  return (
    <>
      <div className="modal_content_info">
        <div className="modal_content_info_title">
          <p className="modal_content_info_title_title">화장실 정보</p>
        </div>
        <div className="modal_content_info_content">
          <ul>

            <li>
              <p className="modal_content_info_content_title">
                {/* <img src={turnstiles} /> */}
                일반 화장실
              </p>
              {
              toilet.normal.length ? toilet.normal.map((item, index)=>(
                <div className="modal_content_info_content_able">
                  <p>개찰구 정보 : 개찰구 {item.gateInotDvNm}부 위치</p>
                  <p>화장실 위치 : {item.dtlLoc}</p>
                </div>
              )) : <div>정보 없음(업데이트 필요)</div> }
              
            </li>

            <li>
              <p className="modal_content_info_content_title">
                {/* <img src={disabled} /> */}
                장애인 화장실
              </p>
              {
              toilet.disabled.length ? toilet.disabled.map((item, index)=>(
                <div className="modal_content_info_content_able">
                  <p>개찰구 정보 : 개찰구 {item.gateInotDvNm}부 위치</p>
                  <p>화장실 위치 : {item.dtlLoc}</p>
                </div>
              )) : <div>정보 없음(업데이트 필요)</div> }
              
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ModalContentInfo;