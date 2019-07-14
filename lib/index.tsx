import React from 'react'
import ReactDom from 'react-dom'
import Icon from './Icon/Icon'

const ff:React.MouseEventHandler<SVGElement>=(e)=>{
    console.log(e)
}
ReactDom.render(
    <div>
    <Icon className='my-icon' name='bank' onClick={ff} onMouseEnter={()=>console.log('enter')}/>
    <Icon name='draw'/>
    <Icon name='file'/>

    </div>
    ,document.getElementById('app'))
