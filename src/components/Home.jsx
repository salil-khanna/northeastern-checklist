import React, {useState, useEffect} from 'react'
import { useMediaQuery } from 'react-responsive';
import Questions from './Questions.jsx'
import Results from './Results.jsx'
import useFetch from 'react-fetch-hook'

//a home page route with a sandbox logo and a bunch of buttons to redirect to other pages
const Home = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 992px)` });
    const [viewResults, setViewResults] = useState(false);
    const [numberOfTakers, setNumberOfTakers] = useState(0)
    const [dataLoaded, setDataLoaded] = useState(false);
    // load up useEffect and initialize number of Takers

    //useFetch hook to get all players from the api
    let heroku = "https://neuchecklistbackend.herokuapp.com/results/"
    const { loading, error, data } = useFetch(heroku)
    useEffect(() => {
        //show loading if the data is still loading
        if (data === undefined || loading || error) {
            setNumberOfTakers('(loading...)')

        } else if (data.length === 0) {
            setNumberOfTakers(0)
        } 
        else {
            setNumberOfTakers(data[0]["responses"])
        }
        setDataLoaded(true)
    }, [data, error, loading])


    const allQuestions = [
        {value: 1, question: "Cried in Snell library"},
        {value: 1, question: "Stayed in Snell past 4 a.m"},
        {value: 1, question: "Pulled an all nighter in Snell"},
        {value: 1, question: "Had the urge to yell at another student in Snell"},
        {value: 1, question: "Debated switching your major while in Snell"},
        {value: 1, question: "Debated dropping out while in Snell"},
        {value: 1, question: "Sat by the Koi Pond"},
        {value: 1, question: "Gotten screwed over by Northeastern housing"},
        {value: 1, question: "Gotten screwed over by Northeastern student finances"},
        {value: 1, question: "Gotten screwed over by Northeastern class registration"},
        {value: 1, question: "Had an advisor ghost you"},
        {value: 1, question: "Randomly been assigned a new advisor"},
        {value: 1, question: "Wore Northeastern merch within the last week"},
        {value: 1, question: "Known someone that transferred into Northeastern (could be yourself)"},
        {value: 1, question: "Known someone that transferred out of Northeastern"},
        {value: 1, question: "Thought about transferring out of Northeastern"},
        {value: 1, question: "Thought about living in Lightview"},
        {value: 1, question: "Actually lived in Lightview"},
        {value: 1, question: "Regretted living in Lightview"},
        {value: 1, question: "Came to Northeastern because you liked Boston"},
        {value: 1, question: "Came to Northeastern because ISEC was pretty"},
        {value: 1, question: "Came to Northeastern for co-op"},
        {value: 1, question: "Done a Boston co-op"},
        {value: 1, question: "Done an out-of-state co-op"},
        {value: 1, question: "Done an unpaid co-op "},
        {value: 1, question: "Been jealous of someone else's co-op"},
        {value: 1, question: "Had a friend group split up because of co-op"},
        {value: 1, question: "Had a co-op bore you to death"},
        {value: 1, question: "Tried to explain your co-op schedule to someone outside of Northeastern but eventually gave up"},
        {value: 1, question: "Told someone you go to Northeastern but they had no clue about the university"},
        {value: 1, question: "Told someone you go to Northeastern but thought you meant Northwestern"},
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
        {value: 1, question: "Been an NU.in student"},
        {value: 1, question: "Seen a rat in your dorm/apartment"},
        {value: 1, question: "Seen a cockroach in your dorm/apartment"},
        {value: 1, question: "Seen Aoun on campus"},
        {value: 1, question: "Talked with Aoun one on one"},
        {value: 1, question: "Seen Paws on Campus"},
        {value: 1, question: "Seen a goose on campus (fens dont count)"},
        {value: 1, question: "Seen someone wearing a Canada Goose Jacket"},
        {value: 1, question: "Seen a student tour while walking to class"},
        {value: 1, question: "Seen someone sleeping on centennial"},
        {value: 1, question: "Seen something happen and thought, 'Only at Northeastern…'"},
        {value: 1, question: "Met another student and wondered, 'How did they get into Northeastern?'"},
        {value: 1, question: "Met another student and wondered, 'Why aren't you at a better college than Northeastern?'"},
        {value: 1, question: "Met another student who outright displayed that they were rich"},
        {value: 1, question: "Met someone from New Jersey"},
        {value: -1, question: "Are from NJ (subtracts a point)"},
        {value: 1, question: "Made friends with an international student at Northeastern (could be yourself)"},
        {value: 1, question: "Built a snowman on Carter Field"},
        {value: 1, question: "Gotten called by OSCCR"},
        {value: 1, question: "Heard construction on campus"},
        {value: 1, question: "Worked an on campus job"},
        {value: 1, question: "TAed a course and vowed to never TA it again"},
        {value: 1, question: "Developed depression due to Northeastern"},
        {value: 1, question: "Ate at Boston Shwarma"},
        {value: 1, question: "Ate at El Jefes on Huntington"},
        {value: 1, question: "Ate at Amelias on Huntington"},
        {value: 1, question: "Ate at Chicken Lous or Rebeccas before they closed down"},
        {value: 1, question: "Drank Kung Fu Tea on Huntington"},
        {value: 1, question: "Drank Gong Cha on Huntington"},
        {value: 1, question: "Bought food/drinks from Dunkin at Shillman"},
        {value: 1, question: "Tried all of the restaurants in Curry Dining (including the Starbucks!)"},
        {value: 1, question: "Wondered if campus food was actually worth the money"},
        {value: 1, question: "Shopped at the Target in Fenway"},
        {value: 1, question: "Visited the Prudential Mall "},
        {value: 1, question: "Taken a picture on top of one of the garage roofs"},
        {value: 1, question: "Been to both Wollastons"},
        {value: 1, question: "Been to the Fens at night"},
        {value: 1, question: "Been to a Northeastern hockey game"},
        {value: 1, question: "Waited 10+ minutes for a campus elevator"},
        {value: 1, question: "Snuck onto a building roof"},
        {value: 1, question: "Snuck onto to the green line via back door and got caught"},
        {value: 1, question: "Snuck onto to the green line via back door and weren't caught"},
        {value: 1, question: "Gotten robbed in Ruggles"},
        {value: 1, question: "Gotten asked for a dollar by the dollar lady"},
        {value: 1, question: "Gotten lost in the tunnels"},
        {value: 1, question: "Gotten upset about the ranking"},
        {value: 1, question: "Shitposted on Yammer/Canvas/Piazza"},
        {value: 1, question: "Shitposted on r/Neu"},
        {value: 1, question: "Had a Northeastern site broken for you"},
        {value: 1, question: "Unironically used the word wicked in a conversation"},
        {value: 1, question: "Thought about doing or actually did research with a Northeastern professor "},
        {value: 1, question: "Know at least one fact about campus history"},
        {value: 1, question: "Done the underwear run"},
        {value: 1, question: "Participated in at least one Husky Hunt"},
        {value: 1, question: "Have a love hate relationship with Northeastern"},
    ]

    const viewChecklistFunction = () => {
        
        setViewResults(false);
        window.scrollTo(0, 0)
    }


    const submitData = (e, payload) => {
        e.preventDefault();
        let finalPayload = {"results": payload};
        console.log(JSON.stringify(finalPayload))
        // axios.post(url,JSON.stringify(finalPayload)).then(res => {
        //     console.log(res);
        //     console.log(res.data);
        // }).catch(err => {
        //     console.log(err);
        //     return alert(err)
        // })
        var request = new XMLHttpRequest();
        request.open('POST', heroku, true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(JSON.stringify(finalPayload));
        setNumberOfTakers(numberOfTakers+1)
        setViewResults(true)
        window.scrollTo(0, 0)
        

    }

    if (!dataLoaded) {
        return <div> Loading... </div>
    } else {
        return (
            <div>
                {!isMobile && <br /> }
                <div className="card container text-left">
                    <div className="box-content">
                        <br/>
                        
                        <div className="box-header">
                            <div className = "text-center">
                                <h1>The Northeastern Experience Checklist</h1>
                                <h2>Taken by {numberOfTakers} students</h2>
                                {viewResults ?
                                <p> See how other students completed the checklist!</p>
                                : <p> Hit the checkboxes on your way down to to see your total score!</p> }

                                {viewResults ?
                                <button type="button" className="btn btn-primary" onClick={() => setViewResults(false)}> Go Back to the Checklist </button> 
                                : <button type="button" className="btn btn-primary" onClick={() => setViewResults(true)}> View Results </button>}

                            </div>                
                        </div>
                        <br/>
                        {viewResults ? <Results allQuestions = {allQuestions} buttonPress = {viewChecklistFunction} /> 
                        : <Questions allQuestions = {allQuestions} buttonPress = {submitData} />}
                        
                        <br/>
                    </div>
                </div>
                {!isMobile && <br /> }



            </div>
        )
    }
}

export default Home
