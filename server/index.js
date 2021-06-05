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
app.get('/api/client/quiz', clientCtrl.takeQuiz)
app.put('/api/client/quiz/update/:client_id',clientCtrl.changeAnswer)
app.post('/api/client/provider/:client_id',clientCtrl.addProvider)
// fix this POST -- use a query rather than PARAMS
app.post('/api/client/provider/:gender,:primary_service',clientCtrl.getProviders)
app.delete('/api/client/provider/:client_id',clientCtrl.deleteProvider)

//provider
app.post('/api/provider/calendar/:provider_id',providerCtrl.postCalendar)
app.get('/api/provider/quiz/:client_id', providerCtrl.getQuizScores)
app.put('/api/provider/calendar/:provider_id',providerCtrl.editCalendar)
app.get('/api/provider/calendar/:provider_id',providerCtrl.getCalendar)


