require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const massive = require('massive');
const session = require('express-session');
const path = require('path')
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
app.get('/api/client/quiz', clientCtrl.takeQuiz)
app.post('/api/client/quiz/submit/:client_id', clientCtrl.submitQuiz)
app.post('/api/client/provider/:client_id',clientCtrl.addProvider)
// fix this POST -- use a query rather than PARAMS
app.post('/api/client/provider/:gender,:primary_service',clientCtrl.getProviders)
app.delete('/api/client/provider/:client_id',clientCtrl.deleteProvider)
app.get('/api/client/provider/calendar/:provider_id',clientCtrl.getCalendar)
app.post('/api/client/appointment/:provider_id',clientCtrl.addAppointment)
//provider
app.post('/api/provider/calendar/:provider_id',providerCtrl.postCalendar)
app.get('/api/provider/quiz/:client_id', providerCtrl.getQuizScores)
app.put('/api/provider/calendar/:provider_id',providerCtrl.editCalendar)
app.get('/api/provider/calendar/:provider_id',providerCtrl.getCalendar)
app.post('/api/provider/assignments/:provider_id',providerCtrl.postAssignments)
app.get(`/api/provider/appointments/:provider_id`,providerCtrl.getAppointments);

app.use(express.static(__dirname + '/../build'))
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, '../build/index.html'))
})
