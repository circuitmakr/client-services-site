DROP TABLE IF EXISTS assignments_junction;
DROP TABLE IF EXISTS assignments;
DROP TABLE IF EXISTS quiz_graph;
DROP TABLE IF EXISTS quiz;
DROP TABLE IF EXISTS client;
DROP TABLE IF EXISTS tsessions;
DROP TABLE IF EXISTS tprovider;

CREATE TABLE tbl_client (
  client_id SERIAL PRIMARY KEY,
  assignment_id INt REFERENCES tbl_assignments_junction(assignment_id),
  name VARCHAR(100),
  password VARCHAR(2000),
  primary_service VARCHAR(100),
  gender VARCHAR(50),
  insured BOOL
);
CREATE TABLE tbl_provider (
  provider_id SERIAL PRIMARY KEY,
  name VARCHAR(100)
  password VARCHAR(2000)
  primary_service VARCHAR(100)
  gender VARCHAR(50)
);
CREATE TABLE tbl_sessions{
  session_id SERIAL PRIMARY KEY,
  provider_id REFERENCES provider(provider_id)
  client_id REFERENCES tbl_client(client_id),
  date DATE,
  duration VARCHAR(150)
};
CREATE TABLE tbl_quiz{
  quiz_id SERIAL PRIMARY KEY,
  client_id INT REFERENCES tbl_client(client_id),
  question_id INT REFERENCES tbl_questions,
  date DATE,
  score INT
};
CREATE TABLE tbl_graph{
  graph_id SERIAL PRIMARY KEY,
  quiz_id INT REFERENCES tbl_quiz(quiz_id),
  score INT
};
CREATE TABLE tbl_client_to_provider{
  tbl_client_to_provider_id SERIAL PRIMARY KEY,
  client_id INT REFERENCES tbl_client(client_id),
  provider_id INT REFERENCES tbl_provider
};
CREATE TABLE tbl_questions{
  question_id SERIAL PRIMARY KEY,
  quiz_id INT REFERENCES tbl_quiz(quiz_id)
  question_type VARCHAR(50)
}