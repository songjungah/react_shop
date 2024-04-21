import { Button, Col, Container, Row } from 'react-bootstrap';
import './Detail.css';

export default function DetailPage(props){
    // 컴포넌트는 return 으로 화면을 그린다(JSX)

    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <img src='/dog1.jpg' width={'400px'} height={'250px'}/>
                    </Col>
                    <Col>
                        <h4>{props.items[0].title}</h4>
                        <p>{props.items[0].content}</p>
                        <p>{props.items[0].price}</p>
                        <Button>주문하기</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}