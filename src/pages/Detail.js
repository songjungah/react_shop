import { Button, Col, Container, Row } from 'react-bootstrap';
import './Detail.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function DetailPage(props){
    // 컴포넌트는 return 으로 화면을 그린다(JSX)
    // URL 파라미터를 useParams() 로 받는다. (상세페이지의 id 번호) 0,1,2
    let {pageNum} = useParams() // URL 파라미터 가저오기
    // 선택된 아이템인지 식별 (item의 id와 URL 파라미터의 id 가 같은지 검사)
    let selectedItem = props.items.find((e)=>{
        // items 의 id 와 URL 파라미터의 id 가 같은지 검사
        return e.id == pageNum
    })
 

    let [hideDom, setHideDom] = useState(false);

    // useEffect : 오래 걸리는 작업을 처리할 때
    // 리액트의 컴포넌트 라이프사이클(생성될 떄, 갱신될 때, 없어질 때) : 각 라이프 사이클마다 코드를 실행
    // mount : 생성될 때 / update : 갱신될 때 / unmount : 없어질 때

    useEffect(()=>{
        // mount 와 update시에 실행될 코드
        // html 을 먼저 보여주고 오래 걸리는 작업을 처리
        console.log('mount 첫실행')

        setTimeout(()=>{
            setHideDom(true)
        }, 2000)

        // unmount 에 대해서는 return 에 작성
        return(()=>{
            console.log('unmount 삭제될때')
        })
    })
    

    return(
        <>
            <Container>
                {
                    hideDom === false ? 
                    (<div>
                        hello
                    </div>)
                    : null
                }
                <Row>
                    <Col>
                        <img src={props.img[selectedItem.id]} width={'400px'} height={'250px'}/>
                    </Col>
                    <Col>
                        <h4>{selectedItem.title}</h4>
                        <p>{selectedItem.content}</p>
                        <p>{selectedItem.price}</p>
                        <Button>주문하기</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}