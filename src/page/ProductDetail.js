import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    let { id } = useParams()
    const [product, setProduct] = useState(null)
    const getProductDetail = async () => {
        let url = `http://localhost:5000/products/${id}`
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
                    <div className="product-type">{product?.type}</div>

                    <Dropdown className='select-price'>
                        <span>결제 방법: </span>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" >
                            옵션 선택
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">{product?.size[0]}</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">{product?.size[1]}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    )

}

export default ProductDetail