import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Nav, Navbar, Button} from 'react-bootstrap'
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import DetailPage from './pages/Detail.js';
// css를 제공해주는 사이트 : bootstrap
// npm install react-bootstrap bootstrap

// 자바스크립트 파일은 확장자명을 생략
// 다른 자바스크립트에서 export 한건 import로 가져와서 사용 (변수처럼 사용)
import data from './data'
import {num1, num2, num3} from './data.js'

// 이미지를 사용하려면 import
import 작명 from './main.jpg';      // 이미지 import
import { useState } from 'react';


// 라우터는 창을 새로 불러오는게 아니라 재렌더링 방식을 사용함
// 되게 빠르게 적용 가능

function App() {

  let [items, setItems] = useState(data);   // data는 변수니까 state로
  let [photo, setPhoto] = useState(['/dog1.jpg','/dog2.jpg','/dog3.jpg']); // useState import
  let navigate = useNavigate()

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><img src={'/logo192.png'} width={'50px'} height={'50px'} /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>홈</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>상세페이지</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>뒤로가기</Nav.Link>
            <Nav.Link onClick={()=>{navigate(1)}}>앞으로가기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path='/' element={
          <>
            
      <div className={'main-bg'}></div>
      <Container>
        <Row>
          {/* data 갯수와 image 가 바쓀 수 있으니까 useState 처리 
          data : 변수(사용자 입력 또는 서버로 부터 데이터를 받았을 때
          변경이 되어도 화면은 안바뀜 --> useState 로 변경*/}
          {/* map 을 통해서 ItemCol */}
          {
            items.map((e, idx)=>{
              return(
                <ItemCol data={e} img={photo[idx]} key={e} />
              )
            })
          }
          {/* <ItemCol data={data[0]} img={'/dog1.jpg'} />
          <ItemCol data={data[1]} img={'/dog2.jpg'} />
          <ItemCol data={data[2]} img={'/dog3.jpg'} /> */}
        </Row>
      </Container>
          </>
        }>
      </Route>
        
        <Route path='/detail' element={<DetailPage items={items}/>}></Route>
      </Routes>

      

      <br/>
      {/* <Button variant="primary">기본버튼</Button>{' '} */}


    </div>
  );
}

export default App;


// 컴포넌트는 맨 앞글자는 대문자
// return 에 html(jsx) 코드
// 컴포넌트로 분리를 했으면 props 로 받아와야하는 부분을 변경
function ItemCol(props){
  // 사용하는 곳에서 결정해줘야하는 부분(그때그때 바뀌어야하는 부분)만 props 처리
  return(
    <>
      <Col>
          <img src={props.img} width={'300px'} height={'300px'}/>
          <h4>{props.data.title}</h4>
          <p>{props.data.price} 마리</p>
      </Col>
    </>
  )
}
