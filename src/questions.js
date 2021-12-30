import React, { useState } from 'react';
function questions() {
    const [dispid, changedDispid] = useState(0);
    const [finalscore, addScore] = useState(0);
    const [testcompleted, testStatus] = useState(0);
    const nextQuestion = () => {
        if (dispid < 4) {
            changedDispid(dispid + 1);
        }
        else {
            testStatus(testcompleted + 1);
        }
    }
    const questions = [
        {
            id: 1,
            question: "Who is the father of our nation?",
            option1: "Nehru",
            option2: "Gandhi",
            option3: "Thilak",
            option4: "Modi",
            ans: 'b'
        },
        {
            id: 2,
            question: "What is the psi of a tiger?",
            option1: "200psi",
            option2: "680psi",
            option3: "1080psi",
            option4: "4000psi",
            ans: 'c'
        },
        {
            id: 3,
            question: "How much centuries did virat kohli scored?",
            option1: "70",
            option2: "56",
            option3: "100",
            option4: "90",
            ans: 'a'
        },
        {
            id: 4,
            question: "In how much degree celcius water starts to boil?",
            option1: "91",
            option2: "80",
            option3: "76",
            option4: "100",
            ans: 'd'
        },
        {
            id: 5,
            question: "Which one of the following alphabet is not a vowel?",
            option1: "a",
            option2: "e",
            option3: "b",
            option4: "o",
            ans: 'c'
        }
    ];
    const checkAnswer = (id, answer) => {
        let actualans = questions[id - 1].ans;
        if (actualans === answer) {
            addScore(finalscore + 1);
        }
        nextQuestion();
    }
    return (
        <div>
            {testcompleted === 0 ? <div className='questioncoinatiner'>
                {dispid + 1}
                {questions[dispid].question}
                <br></br>
                <br></br>
                <br></br>
                <div style={{ display: "flex" }}>
                    <span style={{ marginLeft: "5%" }}><button className='optionButton' onClick={() => checkAnswer(dispid + 1, 'a')}>{questions[dispid].option1}</button></span>
                    <span style={{ marginLeft: "5%" }}><button className='optionButton' onClick={() => checkAnswer(dispid + 1, 'b')}>{questions[dispid].option2}</button></span>
                </div>
                <br></br>
                <br></br>
                <div style={{ display: "flex" }}>
                    <span style={{ marginLeft: "5%" }}><button className='optionButton' onClick={() => checkAnswer(dispid + 1, 'c')}>{questions[dispid].option3}</button></span>
                    <span style={{ marginLeft: "5%" }}><button className='optionButton' onClick={() => checkAnswer(dispid + 1, 'd')}>{questions[dispid].option4}</button></span>
                </div>
                <br></br>
                <br></br>
                <button className='nextbutton' onClick={nextQuestion}>Next</button>
            </div> : <div className='questioncoinatiner' style={{ fontSize: "30px" }}><center><div style={{ marginTop: "18%" }}>Your Score is &nbsp;{finalscore}</div></center></div>}
        </div>
    )
}
export default questions
