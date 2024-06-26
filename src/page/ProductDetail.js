import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    let { id } = useParams()
    const [product, setProduct] = useState(null)
    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/Hyun198/e-shop/products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        setProduct(data);
    }

    useEffect(() => {
        getProductDetail()
    }, [])

    return (
        <Container>
            <Row >
                <Col className="product-img">
                    <img src={product?.img} />
                </Col>
                <Col className="product-detail">
                    <div className='product-title'>{product?.title}</div>
                    <div className='product-price'>판매 가격: {product?.price} 원</div>
                    <div className="product-type">상품 타입: {product?.type}</div>

                    <Dropdown className='select-price'>
                        <span>결제 방법: </span>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" >
                            옵션 선택
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">{product?.pay[0]}</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">{product?.pay[1]}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <span>
                        <button type="button" className="buy-btn">구매하기</button>
                        <button type="button" className="bag-btn">장바구니</button>
                    </span>

                </Col>
            </Row>
        </Container>
    )

}

export default ProductDetail