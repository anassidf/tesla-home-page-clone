import React from 'react'
import '../button.css'

const Button = ({text , side}) => {
    return (
        <div className = {`button${side==='left' ? '_left' : '_right'}`}>
          
           <a href='#'>{text}</a>



        </div>
    )
}

export default Button
