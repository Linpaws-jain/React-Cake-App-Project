import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

class Default extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row error-center'>
                        <div className='col-10 mx-auto text-center text-capitalize pt-5'>
                            <h1 className='text-blue'>404</h1>
                            <h3>requested url : <span className='text-danger'>{this.props.location.pathname}</span> not found</h3>
                            <Link to='/'>
                                <ButtonContainer cart>
                                    return to home page
                                </ButtonContainer>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Default
