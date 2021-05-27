module.exports ={
    getQuiz: (req,res)=>{
        const db = req.app.get('db')
        const {user} = req.session
        if(!user){
            return res.status(511).send('User not logged in.')
        }
        db.quizzes.create_new_quiz()
    },
    addProvider: (req,res)=>{},
    deleteProvider: (req,res)=>{},
    updateQuiz: (req,res)=>{},
    submitQuiz: (req,res)=>{}
}