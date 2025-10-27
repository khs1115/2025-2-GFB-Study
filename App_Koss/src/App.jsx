/*delint-disable*/

import { useState } from 'react';
import './App.css'

function App(){

    let post ='강남 우동 맛집';
    let [글제목,글제목변경] = useState(['남자코트추천','강남 우동 맛집','파이썬 독학'])
    let [좋아요,좋아요변경] = useState([0 ,0 ,0]);
    let [modal, setModal] = useState(0);


    function 함수(){
      console.log(1);
    }
    
    function Modal(){
        return(
            <div className="modal">
                <h4>제목</h4>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
        )
    }

    return(
        <div className="App">
            <div className="black-nav">
                <h4> ReactBlog </h4>
            </div>

            <button onClick={ () => {
                let sort_abc = [...글제목].sort();
                글제목변경(sort_abc);
            }}>가나다순 정렬</button>

            <button onClick={ () => {
                let copy = [...글제목];
                copy[0] = '여자코트추천';
                글제목변경(copy);
            }}>글 수정</button>

            {/* <div className='list'>
                <h4>{글제목[0]} <span onClick={() =>{ 좋아요변경(좋아요+1) }}>😝</span> {좋아요} </h4>
                <p>2월 17일 발행</p>
            </div>
            <div className='list'>
                <h4>{글제목[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className='list'>
                <h4 onClick={() => {modal == 0 ? setModal(1) : setModal(0) }}>{글제목[2]}</h4>
                <p>2월 17일 발행</p>
            </div> */}

            {
                글제목.map(function(제목,i){
                    return <div className='list'>
                    <h4 onClick={() => {modal == 0 ? setModal(1) : setModal(0) }}>{제목} </h4> <span onClick={() =>{ 
                    let 좋아요_copy = [...좋아요];
                    좋아요_copy[i] += 1 
                    좋아요변경(좋아요_copy);}}>😝</span> {좋아요[i]}
                    <p>2월 17일 발행</p>
                </div>
                })
            }

            
            {
                modal == 0 ? null : <Modal/>
            }


        </div>
    );
}


export default App
