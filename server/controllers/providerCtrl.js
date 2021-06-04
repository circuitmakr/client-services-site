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
           res.status(500).send(err)
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
         res.status(500).send(err);
      })
  },
  postCalendar: (req, res) => {
     const{ provider_id } = req.params
     const {cal_date,time_range_01,time_range_02,time_range_03,time_range_04,time_range_05,
      time_range_06,time_range_07,time_range_08,time_range_09,time_range_10,time_range_11,time_range_12, 
      time_range_13,time_range_14, available} = req.body

    const db = req.app.get("db")
    console.log('I\'ve got a calender post here!')
    console.log(provider_id,req.body)
    db.c_provider.add_calendar(provider_id, cal_date,time_range_01,time_range_02,time_range_03,time_range_04,time_range_05,
      time_range_06,time_range_07,time_range_08,time_range_09,time_range_10,time_range_11,time_range_12,time_range_13,time_range_14, available)
      .then((newCalendar) => {
        res.status(200).send('Your calendar has been updated.');
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};
