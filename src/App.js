import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Nav, Navbar, Button} from 'react-bootstrap'
import './App.css';
// css를 제공해주는 사이트 : bootstrap
// npm install react-bootstrap bootstrap

// 자바스크립트 파일은 확장자명을 생략
// 다른 자바스크립트에서 export 한건 import로 가져와서 사용 (변수처럼 사용)
import data from './data'
import {num1, num2, num3} from './data.js'

// 이미지를 사용하려면 import
import 작명 from './main.jpg';      // 이미지 import
import { useState } from 'react';

function App() {

  let [items, setItems] = useState(data);   // data는 변수니까 state로
  let [photo, setPhoto] = useState([]);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">브랜드로고이미지</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">상세페이지</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className={'main-bg'}></div>
      <Container>
        <Row>
          {/* data 갯수와 image 가 바쓀 수 있으니까 useState 처리 */}
          {/* map 을 통해서 ItemCol */}
          <ItemCol data={data[0]} img={'/dog1.jpg'} />
          <ItemCol data={data[1]} img={'/dog2.jpg'} />
          <ItemCol data={data[2]} img={'/dog3.jpg'} />
        </Row>
      </Container>
      

      <br/>
      <Button variant="primary">기본버튼</Button>{' '}


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
