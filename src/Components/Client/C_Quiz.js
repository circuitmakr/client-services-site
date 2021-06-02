import "./C_Quiz.css";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startQuiz, endQuiz } from "../../redux/quizReducer";
import Header from "./C_Header";
import Questions from "./C_Questions";
import Notes from "./C_Notes";

function Quiz() {
  const [answers, setAnswers] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [sliderreset, setSliderReset] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [collectanswers, setCollectAnswers] = useState([]);
  const [toggle, setToggle] = useState(false);
  let [status, setStatus] = useState(true);
  let [count, setCount] = useState(0);
  const { quiz } = useSelector((store) => store.quizReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/client/quiz")
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      setToggle(false)  
  }, []);

  let check_in = [];
  check_in.push(questions.map((e, i) => e.question_txt));

  let selection = [
    "Not at All",
    "Several Days",
    "More than Half of the Days",
    "Nearly Every Day",
  ];
  const handleSliderChange = (e) => {
    setAnswers(parseInt(e.target.value));
  };

  useEffect(() => {
    setCollectAnswers(count, answers);
    if (count < check_in[0].length - 1 || check_in[0].length === 0) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [count]);
const handleToggle =() =>{
    setToggle(!toggle)
}
useEffect(()=>{
    console.log(toggle)
}, [toggle]);

  //const date = Date(mm/dd/yyyy)
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <div className="q_tiles_container">
        <div className="q_title_block">
          <h2>How are you today?</h2>
        </div>
        {toggle===false?
        <div className="q_quiz_cover">
          <article className="q_opening_msg">
            The following questions are designed to help us assess your long
            term improvement together. All answers are confidential and will
            only be shared with your therapist according their mandate.
          </article>
          <button onClick={handleToggle} className="q_btn_start_quiz">Begin.</button>
        </div>:<></>}
        <div className="q_container">
          {check_in.map((question, index) => {
            return (
              <div className="q_questions">
                <h3>{question[count]}</h3>
              </div>
            );
          })}
          <nav>{`${count + 1} of ${check_in[0].length}`}</nav>
          <nav className="q_nav_controls">
            <div
              onClick={() => setCount(count > 0 ? count - 1 : (count = 0))}
              className="q_btn_left q_btn"
            ></div>
            <div
              onClick={() =>
                setCount(
                  count < check_in[0].length - 1
                    ? count + 1
                    : (count = check_in[0].length - 1)
                )
              }
              className="q_btn_right q_btn"
            ></div>
          </nav>
          <div className="q_answer_container">
            <div className="minimum">
              <span>Not at All</span>
            </div>
            <input
              onChange={(e) => handleSliderChange(e)}
              className="slider"
              type="range"
              min="0"
              max="3"
              defaultValue="0"
            />
            <div className="minimum">
              <span>Nearly Every Day</span>
            </div>
          </div>
          <caption>{selection[answers]}</caption>
        </div>
        <div className="q_log_quiz">
          <button className="q_btnSubmit" disabled={status}>
            Submit
          </button>
        </div>
        <br />
        <br />
        <div className="q_notes_container">
          <Notes />
          <button className="q_btn_trash q_btn_msg_tile">
            <i class="fas fa-trash-alt"></i>
          </button>
          <button className="q_btn_send send q_btn_msg_tile">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
        <textarea
          className="q_session_msg"
          rows="30"
          cols="150"
          placeholder="Is there anything in particular that you would like to discuss in your next session?"
        ></textarea>
      </div>
    </div>
  );
}
export default Quiz;
