import React, { Component } from 'react'
import {ProductConsumer} from '../Context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const {id,title,price,img,inCart,info,company}=value.detailProduct;
                    return(
                        <div className='container py-5'>
                            {/* Title */}
                            <div className='row'>
                                <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                                    <h1 className='text-capitalize'>{title}</h1>
                                </div>
                            </div>
                            {/* End Title */}
                            {/* Start Product Info*/}
                            <div className='row'>
                                <div className='col-10 mx-auto col-md-6 my-3'>
                                    <img src={img} alt='product' className='img-fluid' />
                                </div>
                                {/* Product text */}
                                <div className='col-10 mx-auto my-3 text-capitalize'>
                                    <h2>Name : {title}</h2>
                                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                                        made by : <span className='text-uppercase'>{company}</span>
                                    </h4>
                                    <h4 className='text-blue'>
                                        <strong> 
                                            price : <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                                        Some info about Product:
                                    </p>
                                    <p className='text-muted lead'>{info}</p>
                                    {/* Button */}
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>back to products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer 
                                        cart
                                        disabled={inCart} 
                                        onClick={()=> {value.addToCart(id)
                                                  value.openModal(id)}}>
                                            {inCart?'in cart':'add to cart'}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

export default Details
