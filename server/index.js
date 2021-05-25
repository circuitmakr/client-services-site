require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const massive = require('massive');
const session = require('express-session');

const authCtrl = require('./controllers/authCtrl')
const clientCtrl = require('./controllers/clientCtrl')
const providerCtrl = require('./controllers/providerCtrl')

const {SESSION_SECRET, CONNECTION_STRING, SERVER_PORT} = process.env

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 *60 *24}
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(db =>{
    app.set('db', db)
    console.log('database connected')
    app.listen(SERVER_PORT, ()=>console.log(`App listening on Port ${SERVER_PORT}`))
}).catch(err => console.log(err))

//ENDPOINTS
//auth
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCtrl.getUser)

//client
app.post('/api/client/message/:therapist_id')
app.get('api/client/message')
app.get('/api/client/test')
app.post('/api/client/test/:quiz_question_id, :quiz_answer')
app.put('api/assignments/status/:assignment_id')
app.delete('api/client/appointments/:appointment_id')

//provider
app.post('/api/client/message/:client_id')
app.get('/api/provider/test/:client_id, quiz_scores')
app.post('/api/provider/assignments/:assignment_id')
app.post('api/provider/message/:client_id')
app.get('api/provider/message/:client_id')
app.get('api/test/:client_id, :quiz_score, :date_taken')
app.post('api/assignments/:assignment_id, : client_id')
app.put('api/provider/messages/:message_id')
app.delete('api/provider/appointments/:appointment_id')

