import React from 'react'

const Userpage = () => {
    return (
        <div className='use-page'>
            <h1>User page</h1>
            <div className="user-rank">
                <div>
                    회원등급
                </div>
                <div>
                    쿠폰
                </div>
            </div>
            <div className='user-orders'>
                <h2>주문내역</h2>
                <table>
                    <thead>
                        <tr>
                            <th>날짜</th>
                            <th>상품명</th>
                            <th>금액</th>
                            <th>주문번호</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2024-06-13</td>
                            <td>상품 A</td>
                            <td>50,000원</td>
                            <td>123456</td>
                        </tr>
                        <tr>
                            <td>2024-06-12</td>
                            <td>상품 B</td>
                            <td>30,000원</td>
                            <td>123457</td>
                        </tr>


                    </tbody>
                </table>
            </div>
            <div className="recent-product">
                최근 본 상품
            </div>
        </div>

    )
}

export default Userpage