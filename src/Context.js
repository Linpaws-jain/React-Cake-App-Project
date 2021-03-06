import React, { Component } from 'react'
import {storeProducts, detailProduct } from './data'

const ProductContext= React.createContext()


class ProductProvider extends Component {

    state ={
        products: [],
        detailProduct : detailProduct,
        cart : [],
        modalOpen : false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    componentDidMount(){
        this.setProducts();
    }

    setProducts =()=>{
        let tempProducts =[];
        storeProducts.forEach(item=>{
            const singleItem = {...item}
            tempProducts= [...tempProducts,singleItem]
        })
        this.setState(()=>{
            return {products:tempProducts}
        })
    }

    getItem=(id)=>{
        const products = this.state.products.find(item=>item.id===id)
        return products
    }

    handleDetail= (id)=>{
        const products = this.getItem(id)
        this.setState({
            detailProduct : products
        })
    }

    addToCart= (id)=>{
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart= true
        product.total= product.price
        product.count=1
       this.setState({
           products : [...tempProducts],
           cart: [...this.state.cart,product]
       },()=>this.addTotals())     
    }

    openModal = (id) => {
        const products = this.getItem(id)
        this.setState({
            modalProduct: products,
            modalOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    increment = (id) => {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item=>item.id===id)
        const index = tempCart.indexOf(selectedProduct)
        const product =tempCart[index]
        product.count = product.count + 1
        product.total = product.count * product.price
        
        this.setState({cart:[...tempCart]},()=>this.addTotals())
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item=>item.id===id)
        const index = tempCart.indexOf(selectedProduct)
        const product =tempCart[index]
        product.count = product.count - 1

        if(product.count ===0){
            this.removeItem(id)
        }
        else{
            product.total = product.count * product.price
            this.setState({cart:[...tempCart]},()=>this.addTotals())
        }
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products]
        let tempCart= [...this.state.cart]
        tempCart = tempCart.filter(item=>item.id !==id)
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart= false
        product.total= 0
        product.count=0

        this.setState({
            products: [...tempProducts],
            cart: [...tempCart]
        },()=>this.addTotals())

    }

    clearCart = () => {
        this.setState({cart : []},
            ()=>{this.setProducts()
                this.addTotals()}
            )
  
    }

    addTotals = () => {
        let subTotal = 0
        this.state.cart.map(item =>(subTotal +=item.total))
        const tempTax = subTotal * 0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax
        this.setState({
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer= ProductContext.Consumer

export {ProductProvider, ProductConsumer}
