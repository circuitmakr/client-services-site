module.exports ={
    takeQuiz: (req,res)=>{
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
        console.log('I\'ve got a update request here!')
        const{score, question_id , date} = req.body
        console.log(req.body)
        console.log(score,question_id,date)

        db.quizzes.update_answer(score, question_id, date)
        .then((update)=>{
            res.status(200).send(update)
        }).catch((err)=>{
            res.status(424).send(err)
        })
    },
    addProvider: (req,res)=>{
        const db = req.app.get('db')
        const {client_id, provider_id} = req.body
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
        
    },
    submitQuiz: (req,res)=>{}
}