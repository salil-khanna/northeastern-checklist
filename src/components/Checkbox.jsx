import React from 'react'
import '../CSS/Checkbox.css'

const Checkbox = ({value, ifChecked, displayText, number}) => {
    


    return (
        <div>
            
            {/* checkbox */}
            <input type='checkbox' style={{ margin: 1, marginLeft: 10, marginRight: 9, float: 'left' }} onChange = {(e) => ifChecked(e, value, number)} />
            <div style = {{display: 'flex'}} >
                <h5> 
                    <div style={{  float: 'left' }} >
                    {number}.
                    </div> 
                    
                    {number < 10 ? <div style={{ marginLeft: 22}}> {displayText} </div> 
                    : number < 100 ?<div style={{ marginLeft: 32}}> {displayText} </div> 
                    : <div style={{ marginLeft: 42}}> {displayText} </div> }
                   

                </h5>
            </div>
            <br/>

        </div>
    )
}

export default Checkbox
