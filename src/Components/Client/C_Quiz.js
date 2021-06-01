import "./C_Quiz.css";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startQuiz, endQuiz } from "../../redux/quizReducer";
import Header from "./C_Header";
import Questions from "./C_Questions";

function Quiz() {
  const [answers, setAnswers] = useState("");
  const [completed, setCompleted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(1);
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
  }, []);
 

  let check_in = [];
  check_in.push(questions.map((e, i) => e.question_txt));

  return (
    <div>
      <nav>
        <Header />
      </nav>
      <div className="q_tiles_container">
        <div className="q_title_block">
          <h2>How are you today?</h2>
        </div>
        <div className="q_container">
          {check_in.map((question, index) => {
            return (
              <div className="q_questions">
                <h3>{question[count]}</h3>
              </div>
            );
          })}
          <nav className="q_nav_controls">
            <div
              onClick={() => setCount(count - 1)}
              className="q_btn_left q_btn"
            ></div>
            <div
              onClick={() => setCount(count + 1)}
              className="q_btn_right q_btn"
            ></div>
          </nav>
          <div className="q_answer_container"></div>
        </div>
      </div>
    </div>
  );
}
export default Quiz;
