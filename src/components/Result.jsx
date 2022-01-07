import React from 'react'

const Result = ({percent, displayText, number}) => {
    
    displayText = displayText.replace(/your\b/g, 'their');

    displayText = displayText.replace(/you\b/g, 'they');

    let newDisplayText = "have " + displayText[0].toLowerCase() + displayText.slice(1);
    
    if (displayText === "Are from NJ (subtracts a point)" || displayText === "Have a love hate relationship with Northeastern" 
    || displayText === "Know at least one fact about campus history" || displayText.includes("Came")) {
        newDisplayText = displayText[0].toLowerCase() + displayText.slice(1);
    } 

    if (displayText.includes("TAed")) {
        newDisplayText = "have " + displayText;
    }

    if (displayText === "Had an advisor ghost they") {
        newDisplayText = "have had an advisor ghost them";
    }

    if (displayText === "Had a co-op bore they to death"){
        newDisplayText = "have had a co-op bore them to death";
    }

    if (displayText === "Had a Northeastern site broken for they"){
        newDisplayText = "have had a Northeastern site broken for them";
    }

    return (
        <div>
            
            <div >
                <h4> 
                    <div style={{  float: 'left', marginLeft: 10, marginRight: 9 }} >
                    {number}.
                    </div> 
                    
                    
                     
                    {number < 10 ? <div style={{ marginLeft: 46}}> {percent}% of students {newDisplayText} </div> 
                    : number < 100 ?<div style={{ marginLeft: 54}}> {percent}% of students {newDisplayText} </div> 
                    : <div style={{ marginLeft: 60}}> {percent}% of students {newDisplayText} </div> }
                   

                </h4>
            </div>
            <br/>

        </div>
    )
}

export default Result
