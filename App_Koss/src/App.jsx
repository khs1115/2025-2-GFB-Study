/*delint-disable*/
import React from 'react'

import { use, useState } from 'react';
import './App.css'

function App(){

    let post ='강남 우동 맛집';
    let [글제목,글제목변경] = useState(['남자코트추천','강남 우동 맛집','파이썬 독학'])
    let [좋아요,좋아요변경] = useState([0 ,0 ,0]);
    let [modal, setModal] = useState(0);
    let [title, setTitle] = useState(0);
    let [입력값, 입력값변경] = useState('');

    function change(){
                let copy = [...글제목];
                copy[0] = '여자코트추천';
                글제목변경(copy);
            }
    
    function Modal(props){
        return(
            <div className="modal">
                <h4>{props.작명[props.title]}</h4>
                <p>날짜</p>
                <p>상세내용</p>
                <button onClick={props.change}>글수정</button>
            </div>
        )
    }

    // class Modal2 extends React.Component {
    //     constructor(props){
    //         super(props)
    //         this.state = {
    //             name : 'kim',
    //             age : 20
    //         }
    //     }
    //     render(){
    //         return(
    //             <div>안녕 {this.state.age}
    //             <button onClick={() => {
    //                 this.setState({age : 21})
    //             }}>버튼</button>
    //             </div>
    //         )
    //     }
    // }

    return(
        <div className="App">
            <div className="black-nav">
                <h4> ReactBlog </h4>
            </div>

            <button onClick={ () => {
                let sort_abc = [...글제목].sort();
                글제목변경(sort_abc);
            }}>가나다순 정렬</button>

            <button onClick={change}>글 수정</button>

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
                    return <div className="list" key={i}>
                    <h4 onClick={(e) => { e.stopPropagation();
                        modal == 1 && title == i ? setModal(0) : setModal(1) 
                        setTitle(i)
                    }}> {제목}
                    <span onClick={(e) =>{ e.stopPropagation();
                    let 좋아요_copy = [...좋아요];
                    좋아요_copy[i] += 1 
                    좋아요변경(좋아요_copy);}}>😝</span> {좋아요[i]} 
                    <button  className="del" onClick={(e) =>{ 
                        e.stopPropagation();
                        let copy_1 = [...글제목];
                        copy_1.splice(i,1)
                        글제목변경(copy_1)
                        let copy_2 = [...좋아요];
                        copy_2.splice(i,1)
                        좋아요변경(copy_2)
                    } }
                    >삭제</button> </h4> 
                    <p>2월 17일 발행</p>
                    
                </div>
                })
            }

            
            <input onChange={(e) => { 입력값변경(e.target.value)
           
            }}></input>

            <button onClick={() => {
                let copy_1 = [...글제목];
                copy_1.unshift(입력값)
                글제목변경(copy_1)
                let copy_2 = [...좋아요];
                copy_2.unshift(0)
                좋아요변경(copy_2)
            }
            }>글 추가</button>

            {
                 modal == 0 ? null : <Modal title={title} change={change} 작명={글제목}/>
            }
            {/* <Modal2></Modal2> */}
        </div>
    );
}


export default App
