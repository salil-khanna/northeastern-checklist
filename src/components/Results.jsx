import React from 'react'
import Result from './Result.jsx'

const Results = ({allQuestions, buttonPress}) => {
    return (
        <div className="box-body">
            <div className="box-body-content">
                {/* create an array of numbers and map on it*/}
                {allQuestions.map((question, index) => {
                    return (
                        <Result percent = "100" displayText={question.question} number={index+1} />
                    )
                })}
            
                <div className = "text-center">
                    {/* button */}
                    <button type="button" className="btn btn-primary" onClick={buttonPress}> Go Back to the Checklist </button>

                </div>
            </div>
        </div>
    )
}

export default Results
