import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CakeLogo from '../chefCake.jpg'
import styled from 'styled-components'
import ButtonContainer from './Button'

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                <Link to='/'>
                    <img src={CakeLogo} alt='store logo' className='nav-brand img-chef' style={{width:'50px',height:'50px'}}/>
                </Link>
                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            Cakes
                        </Link>
                    </li>
                </ul>
                
                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className='mr-2'>
                           <i className='fas fa-cart-plus' />
                        </span>
                        My cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: #131166;
.nav-link{
    color: var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform: capitalize
}
.img-chef{
    border-radius: 1rem;
}

`;

export default Navbar
