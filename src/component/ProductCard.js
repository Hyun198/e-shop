import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {
    const navigate = useNavigate();

    const gotoDetail = () => {
        navigate(`/products/${item.id}`)

    }
    return (
        <div className="product-card" onClick={gotoDetail}>
            <img src={item?.img} />
            <div className="item-famous">
                {item?.new === true ? "NEW" : ""}
                <span className="item-hot">HOT</span>
            </div>
            <div className="item-title">{item?.title}</div>
            <div className="item-price">₩{item?.price}</div>

        </div>
    )
}

export default ProductCard