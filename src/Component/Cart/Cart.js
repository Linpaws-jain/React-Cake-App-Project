import React, { Component } from 'react'
import Title from '../Title'
import CartColumn from './CartColumns'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../Context'
import CartList from './CartList'
import CartTotal from './CartTotals'

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value
                        console.log('cart values',cart)
                        if(cart.length>0){
                            return (
                                <React.Fragment>
                                    <Title name='our' title='Cart' />
                                    <CartColumn />
                                    <CartList value={value}/>
                                    <CartTotal value={value}/>
                                </React.Fragment>                             
                            )
                        }
                        else{
                            return <EmptyCart />
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}

export default Cart
