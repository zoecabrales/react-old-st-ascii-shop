import React from 'react'

const ItemCard = (props) => {
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div class="card p-0 overflow-hidden h-100 shadow">
             <div class="card-body text center">
                <h5 class="card-title">
                    <strong>{props.title}</strong>
                    </h5>
                <p class="card-text">PHP {props.desc}</p>
                <p class="card-text">{props.date}</p>
                <p class="card-text">Size: {props.size}px</p>
                <a href="#" class="btn btn-success">Add to Cart?</a>
            </div>
        </div>    
    </div>
  )
}

export default ItemCard;