DROP TABLE IF EXISTS tbl_arr_answers;
DROP TABLE IF EXISTS tbl_calendar;
DROP TABLE IF EXISTS tbl_client_to_provider;
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
  username VARCHAR(50),
  usertype VARCHAR(50)
);
CREATE TABLE tbl_provider (
  provider_id SERIAL PRIMARY KEY,
  username VARCHAR(50),
  name VARCHAR(100),
  password VARCHAR(2000),
  primary_service VARCHAR(100),
  gender VARCHAR(50)
  username VARCHAR(50),
  usertype VARCHAR(50)
);
CREATE TABLE tbl_sessions (
  session_id SERIAL PRIMARY KEY,
  provider_id INT REFERENCES tbl_provider(provider_id),
  client_id INT REFERENCES tbl_client(client_id),
  s_date DATE,
  appointment VARCHAR[]
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
  q_date DATE DEFAULT GETDATE(),
  score INT, 
  answer INT REFERENCES tbl_lu_answers(lu_answer_id)
);
CREATE TABLE tbl_client_to_provider (
  tbl_client_to_provider_id SERIAL PRIMARY KEY,
  client_id INT REFERENCES tbl_client(client_id),
  provider_id INT REFERENCES tbl_provider(provider_id)
);

CREATE TABLE tbl_calendar(
  calendar_id SERIAL PRIMARY KEY,
  provider_id INT REFERENCES tbl_provider(provider_id),
  cal_date DATE,
  daily_schedule VARCHAR[]
  available BOOL NOT NULL DEFAULT false);
 
CREATE TABLE tbl_arr_answers (
  answer_id SERIAL PRIMARY KEY,
  quiz_id INT REFERENCES tbl_quiz(quiz_id),
  client_id INT REFERENCES tbl_client(client_id),
  q_date DATE DEFAULT CURRENT_DATE,
  answers VARCHAR[] 
);
CREATE TABLE tbl_assignments(
 assignment_id SERIAL PRIMARY KEY,
 client_id INT REFERENCES tbl_client(client_id),
 provider_id INT REFERENCES tbl_provider(provider_id),
 assignments VARCHAR[]
);



-- UPDATE some_table
-- SET some_col = 'NEW VALUE GOES HERE!'
-- WHERE some_condition;

-- CREATE TEMP TABLE tbl_mock_calendar(LIKE tble_calendar INCLUDING DEFAULTS)
-- ON COMMIT DROP

-- INSERT INTO tble_mock_calendar DEFAULT VALUES RETURNING*


--DELETE TABLE DATA
-- DELETE FROM tbl_provider 
-- WHERE name IS NOT NULL;

-- ALTER TABLE z
-- RENAME COLUMN x TO y;

-- ALTER TABLE z
-- ADD COLUMN x VARCHAR(50);

--QUIZ SEED

INSERT INTO tbl_quiz
(name)
VALUES('Mood_Quiz');

INSERT INTO tbl_questions
(question_type, question_txt, quiz_id)
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

--CLIENT SEED

INSERT INTO tbl_client (name, password, primary_service, gender, insured) 
VALUES 
('Jewelle Trippitt', '5OEXcnU', 'depression', 'Male', true),
('Benedikt Oliveira', 'scyeFWpNwtWf', 'depression', 'Female', true),
('Karon Master', 'S3OXls', 'loneliness', 'Non-binary', false),
('Dorian Sheward', '7Hj0z4', 'depression', 'Male', true),
('Florance Cess', 'wkud1niok', 'anxiety', 'Polygender', true),
('Verney Laugheran', '7BZMK7Vd6e3y', 'depression', 'Non-binary', false),
('Dyann Kummerlowe', 'eiqTO3CAdb', 'loneliness', 'Bigender', true),
('Rudolph Capstack', 'eKz0sOy5n19', 'anxiety', 'Female', true),
('Terri-jo Straniero', 'xzVa6Xvmt', 'depression', 'Genderqueer', true),
('Dianne Burbidge', 'KnDYivio', 'anxiety', 'Genderqueer', true);

-- PROVIDER SEED

INSERT INTO tbl_provider 
(name, password, primary_service, gender) 
VALUES 
('Asher Lampbrecht', 'PQbcUlyJ', 'anxiety', 'Non-binary'),
('Siobhan Washington', 'edv3gSbtI', 'anxiety', 'Non-binary'),
('Loydie Ellaman', 'lSGvmzRyfs7', 'loneliness', 'Polygender'),
('Marguerite Huffey', 'PxVg4O', 'loneliness', 'Male'),
('Norby Kovnot', 'IYbrInm7', 'depression', 'Genderfluid'),
('Padraic Mainson', 'YTwIXz','anxiety', 'Bigender'),
('Elizabet Maypes', 'C2NVpzCJ', 'depression', 'Male'),
('Raphael Gladeche', 'qjXVWpeGI2Y', 'anxiety', 'Female'),
('Leo Rowney', 'tmG2iw', 'depression', 'Female'),
('Mandy Chanson', 'tV1uevux', 'anxiety', 'Genderqueer');

--Answers Seed
INSERT INTO tbl_answers 
(quiz_id, client_id, question_id, q_date, score, answer) 
VALUES 
(1, 5, 1, '5/27/2021', 1, 1),
(1, 5, 2, '5/27/2021', 1, 1),
(1, 5, 3, '5/27/2021', 3, 1),
(1, 5, 4, '5/27/2021', 2, 2),
(1, 5, 5, '5/27/2021', 0, 1),
(1, 5, 6, '5/27/2021', 4, 4),
(1, 5, 7, '5/27/2021', 0, 4),
(1, 5, 8, '5/27/2021', 1, 1),
(1, 5, 9, '5/27/2021', 0, 2),
(1, 5, 10, '5/27/2021', 3, 3),
(1, 5, 11, '5/27/2021', 1, 2),
(1, 5, 12, '5/27/2021', 1, 3),
(1, 5, 13, '5/27/2021', 3, 1),
(1, 5, 14, '5/27/2021', 2, 3),
(1, 5, 15, '5/27/2021', 0, 1),
(1, 5, 16, '5/27/2021', 3, 4),
(1, 6, 1, '5/10/2021', 2, 1),
(1, 6, 2, '5/10/2021', 1, 1),
(1, 6, 3, '5/10/2021', 3, 1),
(1, 6, 4, '5/10/2021', 2, 2),
(1, 6, 5, '5/10/2021', 0, 1),
(1, 6, 6, '5/10/2021', 0, 4),
(1, 6, 7, '5/10/2021', 0, 4),
(1, 6, 8, '5/10/2021', 1, 1),
(1, 6, 9, '5/10/2021', 0, 2),
(1, 6, 10, '5/10/2021', 3, 3),
(1, 6, 11, '5/10/2021', 1, 2),
(1, 6, 12, '5/10/2021', 1, 3),
(1, 6, 13, '5/10/2021', 3, 1),
(1, 6, 14, '5/10/2021', 1, 3),
(1, 6, 15, '5/10/2021', 0, 1),
(1, 6, 16, '5/10/2021', 3, 4),
(1, 5, 1, '5/03/2021', 2, 1),
(1, 5, 2, '5/03/2021', 4, 1),
(1, 5, 3, '5/03/2021', 3, 1),
(1, 5, 4, '5/03/2021', 4, 2),
(1, 5, 5, '5/03/2021', 4, 1),
(1, 5, 6, '5/03/2021', 1, 4),
(1, 5, 7, '5/03/2021', 4, 4),
(1, 5, 8, '5/03/2021', 1, 1),
(1, 5, 9, '5/03/2021', 0, 2),
(1, 5, 10, '5/03/2021', 3, 3),
(1, 5, 11, '5/03/2021', 1, 2),
(1, 5, 12, '5/03/2021', 1, 3),
(1, 5, 13, '5/03/2021', 3, 1),
(1, 5, 14, '5/03/2021', 2, 3),
(1, 5, 15, '5/03/2021', 4, 1),
(1, 5, 16, '5/03/2021', 3, 4);

INSERT INTO tbl_calendar(
    provider_id,
    cal_date,
    time_range_01,
    time_range_02,
    time_range_03,
    time_range_04,
    time_range_05,
    time_range_06,
    time_range_07,
    time_range_08,
    time_range_09,
    time_range_10,
    time_range_11,
    time_range_12,
    time_range_13,
    time_range_14,
    available
  )
VALUES (
  