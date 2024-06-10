import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

const Products = () => {

    const [productList, setProductList] = useState([])
    const [query, setQuery] = useSearchParams();
    const navigate = useNavigate();


    const getProducts = async () => {
        let searchQuery = query.get('q') || "";
        console.log(searchQuery);

        let url = `http://localhost:5000/products?q=${searchQuery}`
        let response = await fetch(url)
        let data = await response.json()
        setProductList(data);
    }

    useEffect(() => {
        getProducts()
    }, [query])

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((product) => (
                        <Col sm={3}>
                            <ProductCard item={product} />
                        </Col>
                    ))}

                </Row>
            </Container>

        </div>
    )
}

export default Products