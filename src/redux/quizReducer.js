//initial state
//if a quiz has been started but not completed,
//then the user will be reminded to continue before the scheduled session
const initialState = {
  quiz: [],
  completed: false,
};
//action type
const SET_START_QUIZ = "SET_START_QUIZ";
const SET_END_QUIZ = "SET_END_QUIZ";
//action builder
export function setStartQuiz(quiz) {
  return {
    type: SET_START_QUIZ,
    payload: quiz,
  };
}
export function setEndQuiz(completed) {
  return {
    type: SET_END_QUIZ,
    payload: completed,
  };
}
//reducer
export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case SET_START_QUIZ:
      console.log('START_QUIZ', action.payload)
      return { ...state, quiz:  [...state.quiz, action.payload] };
    case SET_END_QUIZ:
      console.log('END QUIZ', action.payload)
      return { ...state, completed: action.payload };
    default:
      return { ...state };
  }
}
