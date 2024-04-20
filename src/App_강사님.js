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
import 작명 from './main.png';      // 이미지 import

function App() {

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
          <Col>
            <img src={'/monitor.png'} width={'300px'} height={'300px'}/>
            <h4>{data[0].title}</h4>
            <p>{data[0].price} 원</p>
          </Col>
          <Col>
            
          </Col>
          <Col>

          </Col>
        </Row>
      </Container>
      

      <br/>
      <Button variant="primary">기본버튼</Button>{' '}


    </div>
  );
}

export default App;
