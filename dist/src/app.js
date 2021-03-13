"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const feedbackRoutes_1 = __importDefault(require("./routes/feedbackRoutes"));
const feedback_1 = require("./model/feedback");
class App {
    constructor() {
        this.feedback = new feedback_1.Feedback();
        this.express = express_1.default();
        this.config();
    }
    config() {
        this.express.use(express_1.default.urlencoded({ extended: true }));
        this.express.use(express_1.default.json());
        feedbackRoutes_1.default(this.express);
    }
}
exports.default = new App();
//# sourceMappingURL=app.js.map