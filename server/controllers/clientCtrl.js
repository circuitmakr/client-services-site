module.exports ={
    takeQuiz: (req,res)=>{
        console.log('I\'ve got a get quiz request here!')
        const db = req.app.get('db')
        const {user} = req.session
        if(!user){
            return res.status(511).send('User not logged in.')
        }
        db.quizzes.get_quiz()
        .then((quiz)=>{
            res.status(200).send(quiz)
        }).catch((err) =>{
            res.status(400).send('No quiz available.')
        })
    },
    changeAnswer: (req,res)=>{
        const db = req.app.get('db')
        console.log('I\'ve got an update request here!')
        const {client_id} = req.params
        const {score, question_id , date} = req.body
        console.log(req.body)
        console.log(score,question_id,date)
        db.quizzes.update_answer(score, question_id, date,client_id)
        .then((update)=>{
            res.status(200).send(update)
        }).catch((err)=>{
            res.status(424).send(err)
        })
    },
    submitQuiz: (req,res)=>{
        const db = req.app.get('db')
        console.log('I\'ve got a quiz submission here!')
        console.log(req)
        const {client_id} = req.params
        const {q_date, quiz_id} = req.body
        const {collectAnswers} = req.body
     
        db.quizzes.submit_answer(quiz_id, client_id, q_date, collectAnswers)
        .then(update=>{
            res.status(200).send(update)
        }).catch((err)=>{
            res.status(424).send(err)
        })
    },
    addProvider: (req,res)=>{
        const db = req.app.get('db')
        const {client_id, provider_id} = req.body
        console.log(client_id)
        db.c_client.add_provider_to_client(client_id,provider_id)
        .then((pairing)=>{
            res.status(200).send(pairing)
        }).catch((err)=>{
            res.status(424).send('Failed Dependency. Either the client or the provider are not available')
        })
    },
    getProviders: (req,res)=>{
        const db = req.app.get('db')
        const{gender,primary_service} = req.params
        db.c_client.get_provider(gender,primary_service)
        .then((providers)=>{
            res.status(200).send(providers)
        }).catch((err)=>{
            res.status(424).send('No providers available for your selection(s). Please adjust your search and try again.')
        })
    },
    getCalendar: (req,res)=>{
        console.log('I\'ve got a calendar request here!')
        const db = req.app.get('db')
        const {provider_id} = req.params
        db.c_client.get_calendar(provider_id)
        .then((schedule)=>{
            res.status(200).send(schedule)
        }).catch(err => {res.status(500).send('No calendar available')
        })
    },
    deleteProvider: (req,res)=>{
        const db = req.app.get('db')
        const {client_id} = req.params
        console.log(client_id)
        const{provider_id}=req.body
        console.log(provider_id)
        db.c_client.remove_provider(client_id, provider_id)
        .then((providers)=>{
            res.status(200).send(providers)
        }).catch((err)=>{
            res.status(404).send('Provider not found.')
        })
    },
    addAppointment: (req,res)=>{
        console.log("I've got an appointment request here!")
        const db = req.app.get('db')
        const {provider_id} = req.body;
        const {client_id} = req.body;
        const {s_date} = req.body;
        const {appointment} = req.body;

        db.c_client.add_appointment(provider_id, client_id, s_date, appointment)
        .then((appointment)=>{
            res.status(200).send('Your appointment has been sent.')
        }).catch((err)=>{
            res.status(411).send(err)
        })
    }
}