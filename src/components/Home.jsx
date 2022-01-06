import React, {useState} from 'react'
import { useMediaQuery } from 'react-responsive';
import Checkbox from './Checkbox.jsx'

//a home page route with a sandbox logo and a bunch of buttons to redirect to other pages
const Home = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 992px)` });
    const [totalChecked, setTotalChecked] = useState(0);


    const handleChange = (e, value) => {
        if (e.target.checked) {
            setTotalChecked(totalChecked + value);
        } else {
            setTotalChecked(totalChecked - value);
        }
    }

    const allQuestions = [
        {value: 1, question: "Cried in Snell library"},
        {value: 1, question: "Stayed in Snell past 4 a.m"},
        {value: 1, question: "Pulled an all nighter in Snell"},
        {value: 1, question: "Have had the urge to yell at another student in Snell"},
        {value: 1, question: "Debated switching your major while in Snell"},
        {value: 1, question: "Debated dropping out while in Snell"},
        {value: 1, question: "Sat by the Koi Pond"},
        {value: 1, question: "Gotten screwed over by Northeastern housing"},
        {value: 1, question: "Gotten screwed over by Northeastern student finances"},
        {value: 1, question: "Gotten screwed over by Northeastern class registration"},
        {value: 1, question: "Had an advisor ghost you"},
        {value: 1, question: "Randomly were assigned a new advisor"},
        {value: 1, question: "Wore Northeastern merch within the last week"},
        {value: 1, question: "Know someone that transferred into Northeastern"},
        {value: 1, question: "Know someone that transferred out of Northeastern"},
        {value: 1, question: "Thought about transferring out of Northeastern"},
        {value: 1, question: "Thought about living in Lightview"},
        {value: 1, question: "Actually deciding to live in Lightview"},
        {value: 1, question: "Regretted living in Lightview"},
        {value: 1, question: "Came to Northeastern because you liked Boston "},
        {value: 1, question: "Came to Northeastern because ISEC was pretty"},
        {value: 1, question: "Came to Northeastern for co-op"},
        {value: 1, question: "Done a Boston co-op"},
        {value: 1, question: "Done an out-of-state co-op"},
        {value: 1, question: "Done an unpaid co-op "},
        {value: 1, question: "Been jealous of someone else's co-op"},
        {value: 1, question: "Your friend group was split up because of co-op"},
        {value: 1, question: "If any one of your co-ops bored you to death"},
        {value: 1, question: "Tried to explain your co-op schedule to someone outside of Northeastern but eventually gave up"},
        {value: 1, question: "Told someone you go to Northeastern and they had no clue about the university"},
        {value: 1, question: "Told someone you go to Northeastern and they think you meant Northwestern"},
        {value: 1, question: "Partied at a Northeastern frat"},
        {value: 1, question: "Partied at another university (frat/house)"},
        {value: 1, question: "Went on a date/hooked up with a Wentworth student"},
        {value: 1, question: "Went on a date/hooked up with a BU student"},
        {value: 1, question: "Went on a date/hooked up with a Harvard student"},
        {value: 1, question: "Went on a date/hooked up with a MIT student"},
        {value: 1, question: "Had a date at a Northeastern dining hall"},
        {value: 1, question: "Hooked up inside Snell library"},
        {value: 1, question: "Hooked up inside any other campus building besides Snell and dorms"},
        {value: 1, question: "Changed the song at a Northeastern dining hall"},
        {value: 1, question: "Encountered food that was highly questionable in terms of if it could be eaten"},
        {value: 1, question: "Gotten food poisoning from one of the dining halls"},
        {value: 1, question: "Stolen dining hall cookies"},
        {value: 1, question: "Jaywalked Huntington"},
        {value: 1, question: "Gone on a study abroad"},
        {value: 1, question: "Bonus: You were an NU.in student"},
        {value: 1, question: "Saw a rat in your dorm/apartment"},
        {value: 1, question: "Saw a cockroach in your dorm/apartment"},
        {value: 1, question: "Saw Aoun on campus"},
        {value: 1, question: "Talked with Aoun one on one"},
        {value: 1, question: "Saw Paws on Campus"},
        {value: 1, question: "Saw a goose on campus (fens dont count)"},
        {value: 1, question: "Saw someone wearing a Canada Goose Jacket"},
        {value: 1, question: "Saw a student tour while walking to class"},
        {value: 1, question: "Saw someone sleeping on centennial"},
        {value: 1, question: "Saw something happen and thought, 'Only at Northeastern…'"},
        {value: 1, question: "Met another student and wondered, 'How did they get into Northeastern?'"},
        {value: 1, question: "Met another student and wondered, 'Why aren't you at a better college than Northeastern?'"},
        {value: 1, question: "Met another student who outright displayed that they were rich"},
        {value: 1, question: "Met someone from NJ "},
        {value: -1, question: "You are from NJ (subtracts a point)"},
        {value: 1, question: "Have an international friend at Northeastern"},
        {value: 1, question: "Bonus: You are an international student"},
        {value: 1, question: "Gotten called by OSCCR"},
        {value: 1, question: "Have ever heard construction on campus"},
        {value: 1, question: "Worked an on campus job"},
        {value: 1, question: "TAed a course and vowed to never TA it again"},
        {value: 1, question: "Developed depression due to Northeastern"},
        {value: 1, question: "Ate at Boston Shwarma"},
        {value: 1, question: "Ate at El Jefes on Huntington"},
        {value: 1, question: "Ate at Amelias on Huntington"},
        {value: 1, question: "Drank Kung Fu Tea on Huntington"},
        {value: 1, question: "Drank Gong Cha on Huntington"},
        {value: 1, question: "Bought food/drinks from Dunkin at Shillman"},
        {value: 1, question: "Tried all of the restaurants in Curry Dining (including the Starbucks!)"},
        {value: 1, question: "Shopped at the Target in Fenway"},
        {value: 1, question: "Shopped at the Trader Joe's near Newbury"},
        {value: 1, question: "Visited the Prudential Mall "},
        {value: 1, question: "Been to the Fens at night"},
        {value: 1, question: "Built a snowman on Carter Field"},
        {value: 1, question: "Taken a picture at one of the garage roofs"},
        {value: 1, question: "Been to both Wollastons"},
        {value: 1, question: "Been to every building on campus "},
        {value: 1, question: "Been to a Northeastern hockey game"},
        {value: 1, question: "Waited 10+ minutes for a campus elevator"},
        {value: 1, question: "Snuck onto to the green line via back door and got caught"},
        {value: 1, question: "Snuck onto to the green line via back door and weren't caught"},
        {value: 1, question: "Tripped while walking up/down the ruggles stairs"},
        {value: 1, question: "Gotten robbed in Ruggles"},
        {value: 1, question: "Gotten asked for a dollar by the dollar lady"},
        {value: 1, question: "Gotten lost in the tunnels"},
        {value: 1, question: "Gotten upset about the ranking"},
        {value: 1, question: "Shitposted on Yammer/Canvas/Piazza"},
        {value: 1, question: "Shitposted on r/Neu"},
        {value: 1, question: "A Northeastern site was broken for you"},
        {value: 1, question: "Unironically used the word wicked in a conversation"},
        {value: 1, question: "Thought about doing or actually did research with a Northeastern professor "},
        {value: 1, question: "Know at least one historical fact about campus history"},
        {value: 1, question: "Did the naked run"},
        {value: 1, question: "Have a love hate relationship with Northeastern"},

    ]

    return (
        <div>
            {!isMobile && <br /> }
            <div className="card container text-left">
                <div className="box-content">
                    <br/>
                    
                    <div className="box-header">
                        <div className = "text-center">
                            <h1>The Northeastern Checklist</h1>
                            <p> Hit the checkboxes on your way down to to see your total score!</p>
                        </div>                
                    </div>
                    <br/>

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
                                { totalChecked < 25 ?<h5> Do you even go to Northeastern? </h5> :
                                    totalChecked < 50 ? <h5> Still have a few more semesters to get there! </h5> :
                                    totalChecked < 75 ? <h5> Either a senior or you have a slight obsession with NEU </h5> :
                                    totalChecked < 99 ? <h5> The Top 1% of Northeastern Students </h5> :
                                    totalChecked === 99 ? <h5> Theres a pretty high chance you're from NJ </h5> :
                                    <h5> What building should we name after you? </h5>
                                
                                }
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>



        </div>
    )
}

export default Home
