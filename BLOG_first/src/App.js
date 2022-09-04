/* eslint-disable */
// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';

function App() {

  let post = 'everyday Cafe';
  let [content_title, setContent_title] = useState(['Twosomepalce', 'Starbucks', 'Tenpercent']);
  let [likeNum, setlikeNum] = useState([0, 0, 0]);
  let [details, setDetails] = useState(false);
  let [detail_title, setDetail_title] = useState(0);
  let [inputvalue, setInputvalue] = useState('');

  // js문법 : document.querySelector('h4').innerHTML = post;

  return (
    <div className="App">
      <div className="black-nav">
        <h4><strong>INTRODUCE</strong><br/>A good cafe to study </h4>
      </div>

      <span className="btn array" onClick = {() => {
        let copy = [...content_title];
        copy.sort();
        setContent_title(copy)
      }}>알파벳 순으로 정렬</span>


      <span className="btn" onClick={() => {
        let copy = [...content_title];   //괄호를 벗겨주세요 [...]
        copy[0] = '투썸 더 알아보기'
        setContent_title(copy);
        }}>New</span>

      <div className='recommand'>
      <h3>Cafe 추천하기</h3>
      <input onChange={(e) =>{
        setInputvalue(e.target.value)}} />
      <span className='addBtn' onClick={() => {
        let copy = [...content_title];
        copy.unshift(inputvalue);
        setContent_title(copy)
        e.target.value = ''
        }}>Add</span>
      </div>

      {
        content_title.map((a, i)=>{
          return (
            <div className="list">
              <div className='text'>
              <h4 onClick={()=>{setDetails(true)
                        if (details == true) {
                          setDetails(false)
                        }; 
                        setDetail_title(i)}}> {content_title[i]} 
                <span onClick={(e) => {e.stopPropagation();
                  let likecopy = [...likeNum];
                  likecopy[i] += 1
                  setlikeNum(likecopy)
                }}> 👍🏼 </span> {likeNum[i]} 
                </h4>
              <p>8월 20일 발행</p>
              </div>

              <div className='btns'>
              <div className = "deleteBtn" onClick={() => {
                let copy = [...content_title];
                copy.splice(i, 1);
                setContent_title(copy);
              }}>Delete</div>
              <div className = "deleteBtn">more</div>
              <div className = "deleteBtn">Mark</div>
              </div>
            </div>
          )
        })
      }


      {
        details == true ? <Details detail_title={detail_title} setContent_title={setContent_title} content_title={content_title} /> : null
      }

    </div>
  );
}

      function Details(props) {
        return(
          <div className="details">
            <h4>{props.content_title[props.detail_title]}</h4>
            <p>date</p>
            <p>detail-content</p>
            <span className='btnP' 
              onClick={() => {
              let copy = [...props.content_title]
              props.setContent_title(copy)
            }}>More</span>
        </div>
        )
    }
export default App;
