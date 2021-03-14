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
        console.log("addQuestionOne " + req.body.questionOneRate);
        if (req.body.questionOneRate != null) {
            return this.setQuestionOneRate(req, res);
        }
        else if (req.body.questionTwoRate != null) {
            return this.setQuestionTwoRate(req, res);
        }
        else if (req.body.questionThreeRate != null) {
            return this.setQuestionThreeRate(req, res);
        }
    }
    setQuestionOneRate(req, res) {
        app_1.default.feedback.questionOneRate = req.body.questionOneRate;
        if (req.body.questionOneRate <= 6) {
            return res.send(`Why did you give ${req.body.questionOneRate}? What can we improve to get a higher rating`);
        }
        else {
            return res.send(`Why did you give ${req.body.questionOneRate}? Please tell us what have we done good and what can be done better?`);
        }
    }
    setQuestionTwoRate(req, res) {
        app_1.default.feedback.questionTwoRate = req.body.questionTwoRate;
        app_1.default.feedback.questionTwoRate = req.body.questionTwoRate;
        return res.sendStatus(200);
    }
    addQuestionTwo(req, res) {
        console.log("addQuestionTwo " + req.body.questionTwoRate);
        app_1.default.feedback.questionTwoRate = req.body.questionTwoRate;
        return res.sendStatus(200);
    }
    ;
    setQuestionThreeRate(req, res) {
        app_1.default.feedback.questionThreeRate = req.body.questionThreeRate;
        return res.sendStatus(200);
    }
    ;
    getTest(req, res) {
        console.log("feedback.addQuestionOne " + app_1.default.feedback.questionOneRate);
        console.log("feedback.addQuestionTwo " + app_1.default.feedback.questionTwoRate);
        console.log("feedback.questionThreeRate " + app_1.default.feedback.questionThreeRate);
        return res.json(app_1.default.feedback);
    }
}
exports.default = new FeedbackController();
//# sourceMappingURL=feedbackController.js.map