"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const feedbackController_1 = __importDefault(require("../controller/feedbackController"));
const routes = (app) => {
    app.route('/')
        .get((req, res) => feedbackController_1.default.homePage(req, res));
    app.route('/addFeedback')
        .post((req, res) => feedbackController_1.default.addFeedback(req, res));
    // app.route('/questionTwo')
    // .post(FeedbackController.addQuestionTwo);
    // app.route('/questionThree')
    // .post(FeedbackController.questionThreeRate);
    app.route('/getFeedback')
        .get(feedbackController_1.default.getTest);
};
exports.default = routes;
//# sourceMappingURL=feedbackRoutes.js.map