import App from '../app';

class FeedbackController {

    public homePage(req, res){
      res.send('Welcome to feedback service');
    }

  
  public addFeedback(req, res){
    console.log("addQuestionOne " + req.body.questionOneRate);
    if(req.body.questionOneRate != null ){
       return this.setQuestionOneRate(req, res)
    }else if(req.body.questionTwoRate != null){
       return this.setQuestionTwoRate(req, res);
    }else if(req.body.questionThreeRate != null){
      return this.setQuestionThreeRate(req, res);
    }

  }

  private setQuestionOneRate(req, res): String{
    App.feedback.questionOneRate = req.body.questionOneRate;
    if(req.body.questionOneRate <= 6){
      return  res.send(`Why did you give ${req.body.questionOneRate}? What can we improve to get a higher rating`);
    }else {
      return  res.send(`Why did you give ${req.body.questionOneRate}? Please tell us what have we done good and what can be done better?` );
    } 
  }

  private setQuestionTwoRate(req, res): String{
    App.feedback.questionTwoRate = req.body.questionTwoRate;
    App.feedback.questionTwoRate = req.body.questionTwoRate;
    return res.sendStatus(200);  
  }

  public addQuestionTwo(req, res){
    console.log("addQuestionTwo " + req.body.questionTwoRate);
    App.feedback.questionTwoRate = req.body.questionTwoRate;
    return res.sendStatus(200)
  };

  public setQuestionThreeRate(req, res){
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