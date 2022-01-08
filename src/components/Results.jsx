import React from 'react'
import Result from './Result.jsx'
import useFetch from 'react-fetch-hook'

const Results = ({allQuestions, buttonPress}) => {

    let heroku = "https://neuchecklistbackend.herokuapp.com/results/"
    const { loading, error, data } = useFetch(heroku)
    
    if (data === undefined) return <p>Loading...</p>
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    let newData = {}
    let totalScore = 0
    let totalResponses = 0
    for (let i = 0; i < 101; i++) {
        if (data.length === 0) {
            newData[i+1] = 0
        } else {
            let curResult = data[i]
            newData[curResult["id"]] = Number(curResult["checked"] / curResult["responses"] * 100).toFixed(1)
            if (newData[curResult["id"]] === 62) {
                totalScore += curResult["checked"] * -1
            } else {
                totalScore += curResult["checked"]
            }
            
            totalResponses = curResult["responses"]
        }
    }
    let averageScore = Number(totalScore / totalResponses).toFixed(1)

    return (
        <div className="box-body">
            <div className="box-body-content">
                {/* create an array of numbers and map on it*/}
                {allQuestions.map((question, index) => {
                    return (
                        <Result percent = {newData[index+1]} displayText={question.question} number={index+1} />
                    )
                })}
            
                <div className = "text-center">
                    <h3>Average Score: {averageScore} / 100</h3>
                    {/* button */}
                    <button type="button" className="btn btn-primary" onClick={buttonPress}> Go Back to the Checklist </button>

                </div>
            </div>
        </div>
    )
}

export default Results
