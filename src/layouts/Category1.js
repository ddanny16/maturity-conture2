import React from 'react'
import AllData from "../components/AllData"
import Category from "../layouts/Category"
import "./Category.scss"

const Category1 = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">
        Products
      </h1>
      <div className="project-container">
       {AllData.map((val , ind)=>{
        return(
          <Category 
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            price={val.price}
            buy={val.buy}
            />
        )
       })}
      </div>
    </div>
  )
}

export default Category1
