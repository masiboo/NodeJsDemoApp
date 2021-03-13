"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
class FeedbackController {
    addQuestionOne(req, res) {
        console.log("addQuestionOne " + req.body.questionOneRate);
        app_1.default.feedback.questionOneRate = req.body.questionOneRate;
        if (req.body.questionOneRate <= 6) {
            return res.send(`Why did you give ${req.body.questionOneRate}? How can we improve to get a higher rating`);
        }
        else {
            return res.send(`Why did you give ${req.body.questionOneRate}? Please tell us what have we done good and what can be done better?`);
        }
    }
    ;
    addQuestionTwo(req, res) {
        console.log("addQuestionTwo " + req.body.questionTwoRate);
        app_1.default.feedback.questionTwoRate = req.body.questionTwoRate;
        return res.sendStatus(200);
    }
    ;
    questionThreeRate(req, res) {
        console.log("questionThreeRate " + req.body.questionThreeRate);
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
// export const addQuestionOne = (req, res) => {
//   console.log("addQuestionOne " + req.body.questionOneRate);
//   App.feedback.questionOneRate = req.body.questionOneRate;
//   return res.sendStatus(200)
// };
// export const addQuestionTwo = (req, res) => {
//   console.log("addQuestionTwo " + req.body.questionTwoRate);
//   App.feedback.questionTwoRate = req.body.questionTwoRate;
//   return res.sendStatus(200)
// };
// export const getTest = (req, res) => {
//   console.log("feedback.addQuestionOne " + App.feedback.questionOneRate);
//   console.log("feedback.addQuestionTwo " + App.feedback.questionTwoRate);
//   return res.json(App.feedback);
// }
//# sourceMappingURL=feedbackController.js.map