/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';

function App() {

  let post = 'everyday Cafe';
  let [content_title, setContent_title] = useState(['Twosomepalce', 'Starbucks', 'Tenpercent']);
  let [likeNum, setlikeNum] = useState([0, 0, 0]);
  let [details, setDetails] = useState(false);

  // js문법 : document.querySelector('h4').innerHTML = post;

  return (
    <div className="App">
      <div className="black-nav">
        <h4>INTRODUCE <br/>A good cafe to study </h4>
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

      {
        content_title.map((a, i)=>{
          return (
            <div className="list">
              <h4 onClick={()=>{setDetails(true)
                        if (details == true) {
                          setDetails(false)
                        }}}>
                {content_title[i]} 
                <span onClick={() => {
                  let likecopy = [...likeNum];
                  likecopy[i] += 1
                  setlikeNum(likecopy)
                }}> 👍🏼 </span> {likeNum[i]} 
              </h4>
              <p>8월 20일 발행</p>
            </div>
          )
        })
      }

      {
        details == true ? <Details setContent_title={setContent_title} content_title={content_title} /> : null
      }

    </div>
  );
}

{
  props.content_title.map((a, i)=>{
    return(
      function Details(props) {
        return(
          <div className="details">
            <h4>{props.content_title[i]}</h4>
            <p>date</p>
            <p>detail-content</p>
            <span className='btnP' onClick={() => {
              let copy = [...props.content_title]
              copy[0] = '투썸플레이스 더 알아보기'
              props.setContent_title(copy)
            }}>More</span>
        </div>
        )
    }
    )
  })


    
}
export default App;
