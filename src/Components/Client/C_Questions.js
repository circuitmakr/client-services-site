const Questions = (props) => {
  return (
    <div>
      {props.question.key}
      {props.question.question_txt}
    </div>
  );
};
export default Questions;
