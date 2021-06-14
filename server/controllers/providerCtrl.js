module.exports = {
  getQuizScores: (req, res) => {
    const db = req.app.get("db");
    const { client_id } = req.params;
    db.quizzes.get_scores(client_id)
      .then((scores) => {
        res.status(200).send(scores);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  editCalendar:(req,res) =>{
      const db = req.app.get('db')
      const {provider_id} = req.params
      const {cal_date, column, newValue} = req.body;
     db.c_provider.edit_calendar(provider_id,cal_date,column,newValue)
     .then(update =>{
        res.status(200).send(update)
        .cath(err=>{
           res.status(417).send(err)
        })
     })
  },
  getCalendar: (req, res) => {
    const { provider_id } = req.params;
    const db = req.app.get("db");
    db.c_provider.get_calendar(provider_id)
    .then(calendar=>{
       res.status(200).send(calendar)
      }).then(err=>{
         res.status(417).send(err);
      })
  },
  postCalendar: (req, res) => {
     const {provider_id}  = req.params
     const {calendar} = req.body
     const {calendarDate} = req.body
     const {flagAvailable} = req.body

    const db = req.app.get("db")
    console.log('I\'ve got a calender post here!')
    console.log(provider_id,req.body)

    db.c_provider.add_calendar(provider_id, calendarDate, calendar,flagAvailable)
      .then((newCalendar) => {
        res.status(200).send(newCalendar);
        console.log(newCalendar)
      })
      .catch((err) => {
        console.log(err)
        res.status(417).send(err);
      });
  },
  postAssignments: (req,res) =>{
    console.log('I\'ve got an assignment post here!')
    const {provider_id} = req.params;
    const {client_id} = req.body;
    const {providerList} = req.body
    const db = req.app.get('db')
    db.c_provider.add_assignment(client_id, provider_id, providerList)
    .then((newAssignment)=>{
      res.status(200).send(newAssignment);
    }).catch(err=>{
      res.status(417).send(err);
    });
  },
  getAppointments: (req,res) => {
    console.log('I\'ve got an appointment request here!')
    const {provider_id} = req.params;
    const db = req.app.get('db')
    db.c_provider.get_appointments(provider_id)
    .then((assignmentList)=>{
      res.status(200).send(assignmentList)
    })
    .catch((err)=>{
      res.status(417).send(err);
    });
  }
};
