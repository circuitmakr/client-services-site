DROP TABLE IF EXISTS tbl_client_to_provider;
DROP TABLE IF EXISTS tbl_graph;
DROP TABLE IF EXISTS tbl_answers;
DROP TABLE IF EXISTS tbl_lu_answers;
DROP TABLE IF EXISTS tbl_questions;
DROP TABLE IF EXISTS tbl_quiz;
DROP TABLE IF EXISTS tbl_sessions;
DROP TABLE IF EXISTS tbl_provider;
DROP TABLE IF EXISTS tbl_client;

CREATE TABLE tbl_client (
  client_id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  password VARCHAR(2000),
  primary_service VARCHAR(100),
  gender VARCHAR(50),
  insured BOOL
);
CREATE TABLE tbl_provider (
  provider_id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  password VARCHAR(2000),
  primary_service VARCHAR(100),
  gender VARCHAR(50)
);
CREATE TABLE tbl_sessions (
  session_id SERIAL PRIMARY KEY,
  provider_id INT REFERENCES tbl_provider(provider_id),
  client_id INT REFERENCES tbl_client(client_id),
  s_date DATE,
  duration VARCHAR(150)
);
CREATE TABLE tbl_quiz (
  quiz_id SERIAL PRIMARY KEY,
  name VARCHAR(120)
);
CREATE TABLE tbl_questions (
  question_id SERIAL PRIMARY KEY,
  question_type VARCHAR(50),
  question VARCHAR(1000),
  quiz_id INT REFERENCES tbl_quiz(quiz_id)
);
CREATE TABLE tbl_lu_answers(
 lu_answer_id SERIAL PRIMARY KEY,
 lu_answer VARCHAR(200),
 lu_answer_value INT
);
CREATE TABLE tbl_answers (
  answer_id SERIAL PRIMARY KEY,
  quiz_id INT REFERENCES tbl_quiz(quiz_id),
  client_id INT REFERENCES tbl_client(client_id),
  question_id INT REFERENCES tbl_questions(question_id),
  q_date DATE,
  score INT, 
  answer INT REFERENCES tbl_lu_answers(lu_answer_id)
);
CREATE TABLE tbl_graph (
  graph_id SERIAL PRIMARY KEY,
  client_id INT REFERENCES tbl_client(client_id),
  quiz_id INT REFERENCES tbl_quiz(quiz_id),
  score INT
);
CREATE TABLE tbl_client_to_provider (
  tbl_client_to_provider_id SERIAL PRIMARY KEY,
  client_id INT REFERENCES tbl_client(client_id),
  provider_id INT REFERENCES tbl_provider(provider_id)
);
INSERT INTO tbl_quiz
(name)
VALUES('Mood_Quiz');

INSERT INTO tbl_questions
(question_type, question, quiz_id)
VALUES
  ('PHQ-9','Little interest or pleasure in doing things',1),
  ('PHQ-9','Feeling down, depressed or hopeless',1),
  ('PHQ-9','Trouble falling or staying asleep, or sleeping too much',1),
  ('PHQ-9','Feeling tired or having little energy',1),
  ('PHQ-9','Poor appetite or over eating',1),
  ('PHQ-9','Feeling bad about yourself - or that you are a failure or have let yourself or your family down',1),
  ('PHQ-9','Trouble concentrating on things, such as reading the newspaper or watching television',1),
  ('PHQ-9','Moving or speaking so slowly that other people could have noticed, or the opposite - being so fidgety or restless that you have been moving around a lot more than usual',1),
  ('PHQ-9','Thoughts that you would be better off dead or of hurting yourself in some way',1),
  ('GAD7', 'Feeling nervous, anxious or on edge',1),
  ('GAD7', 'Not being able to stop or control worrying',1),
  ('GAD7', 'Worrying too much about different things',1),
  ('GAD7', 'Trouble relaxing',1),
  ('GAD7', 'Being so restless it is hard to sit still',1),
  ('GAD7', 'Becoming easily annoyed or irritable',1),
  ('GAD7', 'Feeling afraid as if something awful might happen',1);

INSERT INTO tbl_lu_answers
(lu_answer,lu_answer_value)
VALUES
('Not at all',0),
('Several days',1),
('More than half the days',2),
('Nearly every day',3);