import React from 'react'
import Button from './Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import '../items.css'
//! in component parameter list u can descturing all props that passed in

const Items = ({title,
desc,
backgroundImage,
textButtonright ,
linkButtonRight,
textButtonLeft,
linkButtonLeft,
twoButtons, 
first}) => {
    return (
        <div className= 'items' style={{backgroundImage : `url(${backgroundImage})`}}>
        
        <div className='item_container' >
            <div className = 'item_text'>
              
             <p className = 'title' >{title}</p>
             <div className='description'>
             <p>{desc}</p>
             </div>
            </div>

        
            <div className= 'buttons'>

              <Button text = {textButtonLeft} side =  'left'/>
              {
                  twoButtons && (<Button text = {textButtonright} side =  'right'/>)
              }

            </div>

         {
         first &&(
            <div className= 'arrow_icon'>

            <ExpandMoreIcon/>

            </div>
         )
         }


</div>
        </div>
    )
}

export default Items
