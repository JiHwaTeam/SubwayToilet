import React, { useState } from "react";
import './Search.scss';
//import {ReactComponent as SubwayLine2} from './Seoul_subway_linemap_ko.svg';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

// 검색 컴포넌트
function Search({data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        console.log( data.DATA );
        const newFilter = data.DATA.filter((value) => {
            return value.station_nm.includes(searchWord);
        });

        if (searchWord === "") {
        setFilteredData([]);
        } else {
        setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };
    // 검색창
    return (
        <div className="search">
        <div className="searchInputs">
            <input
            type="text"
            placeholder="역명을 검색하세요."
            value={wordEntered}
            onChange={handleFilter}
            />
            <div className="searchIcon">
            {filteredData.length === 0 ? (
                <SearchIcon />
            ) : (
                <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
            </div>
        </div>
        {filteredData.length !== 0 && ( // 역명을 작성하면 X 표시 생성
            <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
                return (
                <a className="dataItem" href={value.link} target="blank">
                    <p>{value.station_nm} </p>
                </a>
                );
            })}
            </div>
        )}
        </div>
    );
}

export default Search;