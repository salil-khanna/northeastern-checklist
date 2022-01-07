import React, {useState} from 'react'
import Checkbox from './Checkbox.jsx'

const Questions = ({allQuestions}) => {
    const [totalChecked, setTotalChecked] = useState(0);
    

    const handleChange = (e, value) => {
        if (e.target.checked) {
            setTotalChecked(totalChecked + value);
        } else {
            setTotalChecked(totalChecked - value);
        }
    }
    return (
        <div className="box-body">
            <div className="box-body-content">
                {/* create an array of numbers and map on it*/}
                {allQuestions.map((question, index) => {
                    return (
                        <Checkbox value={question.value} ifChecked={handleChange} displayText={question.question} number={index+1} />
                    )
                })}
            
                <div className = "text-center">
                    <h3> Total Count: {totalChecked} / 100 </h3>
                    { totalChecked < 5 ?<h5> You must be a BU student </h5> :
                    totalChecked < 25 ?<h5> Do you even go to Northeastern? </h5> :
                        totalChecked < 50 ? <h5> Still have a few more semesters to get there! </h5> :
                        totalChecked < 75 ? <h5> Either a senior or you have a slight obsession with NEU </h5> :
                        totalChecked < 99 ? <h5> The Top 1% of Northeastern Students </h5> :
                        totalChecked === 99 ? <h5> Theres a pretty high chance you're from NJ </h5> :
                        <h5> What building should we name after you? </h5>
                    
                    }
                </div>
            </div>
        </div>
    )
}

export default Questions
