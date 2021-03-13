import App from '../app';

class FeedbackController {

  public homePage(req, res){
    res.send('Welcome to feedback service');
  }
  
  public addQuestionOne(req, res){
    console.log("addQuestionOne " + req.body.questionOneRate);
    App.feedback.questionOneRate = req.body.questionOneRate;
    if(req.body.questionOneRate <= 6){
      return  res.send(`Why did you give ${req.body.questionOneRate}? How can we improve to get a higher rating`);
    }else {
      return  res.send(`Why did you give ${req.body.questionOneRate}? Please tell us what have we done good and what can be done better?` );
    }
  };

  public addQuestionTwo(req, res){
    console.log("addQuestionTwo " + req.body.questionTwoRate);
    App.feedback.questionTwoRate = req.body.questionTwoRate;
    return res.sendStatus(200)
  };

  public questionThreeRate(req, res){
    console.log("questionThreeRate " + req.body.questionThreeRate);
    App.feedback.questionThreeRate = req.body.questionThreeRate;
    return res.sendStatus(200)
  };

  public getTest(req, res){
    console.log("feedback.addQuestionOne " + App.feedback.questionOneRate);
    console.log("feedback.addQuestionTwo " + App.feedback.questionTwoRate); 
    console.log("feedback.questionThreeRate " + App.feedback.questionThreeRate);
    return res.json(App.feedback);
  }

}

export default new FeedbackController();