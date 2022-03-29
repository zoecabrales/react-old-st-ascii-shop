import React from 'react'
import ItemCard from './ItemCard'
import data from '../data/data'

const Card = () => {
  return (
    <>
        <h1 className="text-center mt-3">All Items</h1>
        <section className="py-4 container">
            <div className="row justtify-content-center">
              {data.productData.map((item,index) => {
                return(
                  <ItemCard key={index} title={item.face} desc={item.price} date={item.date} size={item.size} />
                )
              })}
            </div>
        </section>
    </>
  )
}

export default Card