import React, { Component } from 'react'
// import Image from 'react-bootstrap/Image'

export default function Products(props) {
  let myStyle = {
    width: "18rem"
  }
  let pfont = {
    fontWeight:'900',
    fontFamily: 'Source Sans Pro'
  }
  let disfont = {
    fontWeight:'normal'
  }
  let tfont = {
    fontWeight:'bold'
  }
  let pfont2 = {
    fontWeight:'normal',
    fontSize:"small"
  }
  return (
    <div>
      <div className="card" style={myStyle}>
        <img src={props.product.image} height='200px' width='200px' className="card-img-top" alt=""></img>
        <div className="card-body">
          <h5 className="card-title" style={tfont}>{props.product.title}</h5>
          <p className="card-text" style={pfont2} >{props.product.desc}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item " style={pfont}>{props.product.price}</li>
          <li className="list-group-item text-muted" style={pfont2}>{props.product.location}</li>
          {/* <li className="list-group-item">A third item</li> */}
        </ul>
        {/* <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div> */}
      </div>
    </div>
  )
}