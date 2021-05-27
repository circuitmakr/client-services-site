//initial state
//if a quiz has been started bu not completed,
//then the user will be reminded to continue before the session
const initialState = {
  quiz: [],
  completed: false,
};
//action type
const START_QUIZ = "START_QUIZ";
const END_QUIZ = "END_QUIZ";
//action builder
export function startQuiz(quiz) {
  return {
    type: START_QUIZ,
    payload: quiz,
  };
}
export function endQuiz(completed) {
  return {
    type: END_QUIZ,
    payload: completed,
  };
}
//reducer
export default function quizReducer(state = initialState, action) {
  switch (action.payload) {
    case START_QUIZ:
      return { ...state, quiz: action.payload };
    case END_QUIZ:
      return { ...state, completed: action.payload };
    default:
      return { ...state };
  }
}
