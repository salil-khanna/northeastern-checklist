import React, {useState} from 'react'
import Checkbox from './Checkbox.jsx'


const Questions = ({buttonPress, allQuestions}) => {
    const [totalChecked, setTotalChecked] = useState(0);
    const [payload, setPayload] = useState({
        //fill payload with numbers 1 to 101, and set the value of each to false
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
        17: false,
        18: false,
        19: false,
        20: false,
        21: false,
        22: false,
        23: false,
        24: false,
        25: false,
        26: false,
        27: false,
        28: false,
        29: false,
        30: false,
        31: false,
        32: false,
        33: false,
        34: false,
        35: false,
        36: false,
        37: false,
        38: false,
        39: false,
        40: false,
        41: false,
        42: false,
        43: false,
        44: false,
        45: false,
        46: false,
        47: false,
        48: false,
        49: false,
        50: false,
        51: false,
        52: false,
        53: false,
        54: false,
        55: false,
        56: false,
        57: false,
        58: false,
        59: false,
        60: false,
        61: false,
        62: false,
        63: false,
        64: false,
        65: false,
        66: false,
        67: false,
        68: false,
        69: false,
        70: false,
        71: false,
        72: false,
        73: false,
        74: false,
        75: false,
        76: false,
        77: false,
        78: false,
        79: false,
        80: false,
        81: false,
        82: false,
        83: false,
        84: false,
        85: false,
        86: false,
        87: false,
        88: false,
        89: false,
        90: false,
        91: false,
        92: false,
        93: false,
        94: false,
        95: false,
        96: false,
        97: false,
        98: false,
        99: false,
        100: false,
        101: false,
    });
    

    const handleChange = (e, value, number) => {
        if (e.target.checked) {
            setTotalChecked(totalChecked + value);
            setPayload({...payload, [number]: true});
        } else {
            setTotalChecked(totalChecked - value);
            setPayload({...payload, [number]: false});
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
                    
                    {/* button */}
                    <button type="button" className="btn btn-primary" onClick={(e) => buttonPress(e, payload)}> Submit data and view all student results! </button>

                
                </div>
            </div>
        </div>
    )
}

export default Questions
