import React from 'react'
import Products from './Products'
export default function Main(props) {
    return (
        <div  align="center"> 
        <img src={require("../images/banner.png")} height="400px" width="100%" className="banner" alt=""></img>
        <div className='container row row-cols-1 row-cols-md-3 g-4 py-5 text-centre' >
            {props.product.map((productList) => { return <><Products key={productList.sno} product={productList}  /></> })}
        </div>
        </div>
    )
}
