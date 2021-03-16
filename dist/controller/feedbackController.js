"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
class FeedbackController {
    homePage(req, res) {
        res.send('Welcome to feedback service');
    }
    addFeedback(req, res) {
        if (req.body.questionOneAnswer != null) {
            return this.setQuestionOneAnswer(req, res);
        }
        else if (req.body.questionTwoAnswer != null) {
            return this.setQuestionTwoAnswer(req, res);
        }
        else if (req.body.questionThreeAnswer != null) {
            return this.setQuestionThreeAnswer(req, res);
        }
    }
    setQuestionOneAnswer(req, res) {
        app_1.default.survey.question1 = 'How likely are you going to recommend our service to a friend or colleague?';
        app_1.default.survey.answer1 = req.body.questionOneAnswer;
        if (req.body.questionOneAnswer <= 6) {
            app_1.default.survey.question2 = `It is considered a lower rating. Why did you give ${req.body.questionOneAnswer}?`;
            return res.send(app_1.default.survey.question2);
        }
        else {
            app_1.default.survey.question2 = `It is considered a high rating. Why did you give ${req.body.questionOneAnswer}?`;
            return res.send(app_1.default.survey.question2);
        }
    }
    setQuestionTwoAnswer(req, res) {
        app_1.default.survey.answer2 = req.body.questionTwoAnswer;
        return res.sendStatus(200);
    }
    setQuestionThreeAnswer(req, res) {
        app_1.default.survey.question3 = 'How likely will you continue using our service?';
        app_1.default.survey.answer3 = req.body.questionThreeAnswer;
        return res.sendStatus(200);
    }
    ;
    getFeedback(req, res) {
        return res.json(app_1.default.survey);
    }
}
exports.default = new FeedbackController();
//# sourceMappingURL=feedbackController.js.map