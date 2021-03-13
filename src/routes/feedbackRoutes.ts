import FeedbackController from '../controller/feedbackController';

const routes = (app) => {
    app.route('/')
    .get(FeedbackController.homePage);

    app.route('/questionOne')
    .post(FeedbackController.addQuestionOne);
    
    app.route('/questionTwo')
    .post(FeedbackController.addQuestionTwo);

    app.route('/questionThree')
    .post(FeedbackController.questionThreeRate);
 
    app.route('/getFeedback')
    .get(FeedbackController.getTest);
};

export default routes;