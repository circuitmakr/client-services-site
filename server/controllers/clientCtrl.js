module.exports ={
    takeQuiz: (req,res)=>{
        console.log('I\'ve got a get quiz request here!')
        const db = req.app.get('db')
        //const {user} = req.session
        // if(!user){
        //     return res.status(511).send('User not logged in.')
        // }
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
    deleteProvider: (req,res)=>{
        const db = req.app.get('db')
        const{client_id} = req.params
        console.log(client_id)
        const{provider_id}=req.body
        console.log(provider_id)
        db.c_client.remove_provider(client_id, provider_id)
        .then((providers)=>{
            res.status(200).send(providers)
        }).catch((err)=>{
            res.status(404).send('Provider not found.')
        })
    }
}