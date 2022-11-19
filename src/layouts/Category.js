import React from 'react'
import "./Category.scss"

const Category = (props) => {
  return (
    <div className='maining'>
      <main className='main2'>
        <div className="cont2">
          <div className="imges">
            <center>
            <img width="50%" height="50%" className='imges_pan' src={props.imgsrc} alt="/" />

            </center>
          </div>
          <div className="mini_text">
            {props.text}
          </div>
          <div className="btns_tag">
                      <button className="btn1">₦{props.price}</button>
            <button className="btn2"><a href="#name1">{props.buy}Buy</a></button>
          </div>
        </div>
       
      </main>
    </div>
  )
}

export default Category
