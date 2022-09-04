
import { useState } from 'react';
import './App.css';

function App() {
  // let post = '오예';
  let [title, setTitle] = useState(['만년형 다이어리', '원형 스티커', '빈티지 마스킹테이프'])
  let [text, c] = useState(['365일용입니다.', '원형 스티커입니다.', '빈티지 스타일입니다.'])
  let [liked, setLiked] = useState([0,0,0]);
  let [chat, setChat] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState('');
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>Daily Blog</h4>
      </div>

    <button onClick={() => {
      let arrayTitle = [...title]
      setTitle(arrayTitle.sort())
    }}>정렬하기</button>

      {      
      title.map(function(a, i){
        return(
          <div className='list' key={i}>
          <h4>{ title[i] }</h4>
          <p> { text[i] }</p>
          <ul className='likedChat' >
            <li onClick={() => {
              let reLiked = liked
              reLiked[i] += 1
              setLiked([...reLiked])
            }
            }>👍🏼</li> {liked[i]}&nbsp;&nbsp;&nbsp;
            <li onClick={() => {setChat(chat+1)}}>💬</li> {chat[i]}&nbsp;
            </ul>
          <button onClick={() => {
            // let reTitle = [...title];
            // reTitle[i] = '더 다양한 상품 알아보기'
            // setTitle(reTitle);
            setModal(!modal)
            setModalTitle(i)
            }}>더 알아보기</button>
        </div>
        )
      })}

      {
      modal == true ? <Modal title={title} setTitle={setTitle} modalTitle={modalTitle} text={text}/> : null
      }
    </div>
  );
}


function Modal (props){
    return(
      <div className='modal'>
      <h4>{props.title[props.modalTitle]}</h4>
      <p>{props.text[props.modalTitle]}</p>
      <p><span>👍🏼</span>0</p>
    <button onClick={()=>{
      let modalTitle = props.title
      // let modalTitle = [...props.title]
      modalTitle[0] = '바꿔줘제발'
      props.setTitle([...modalTitle])
    }}>수정하기</button>
  </div>
    )
  }
export default App;

