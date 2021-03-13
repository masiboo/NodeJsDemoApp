"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const feedbackController_1 = __importDefault(require("../controller/feedbackController"));
const routes = (app) => {
    app.route('/')
        .get(feedbackController_1.default.homePage);
    app.route('/questionOne')
        .post(feedbackController_1.default.addQuestionOne);
    app.route('/questionTwo')
        .post(feedbackController_1.default.addQuestionTwo);
    app.route('/questionThree')
        .post(feedbackController_1.default.questionThreeRate);
    app.route('/getFeedback')
        .get(feedbackController_1.default.getTest);
};
exports.default = routes;
//# sourceMappingURL=feedbackRoutes.js.map