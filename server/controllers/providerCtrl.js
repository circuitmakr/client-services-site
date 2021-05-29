
module.exports ={
    getQuiz: (req,res)=>{
     const db = req.app.get('db')
     const {client_id} = req.params
     db.quizzes.get_scores(client_id)
     .then(scores =>{
        res.status(200).send(scores) 
     }).catch(err =>{
        console.log(err)
        res.status(500).send(err)
     })
    },
    addQuiz: (req,res)=>{
        
    },
    closeClient: (req,res)=>{},
    postMessage: (req,res)=>{}
}