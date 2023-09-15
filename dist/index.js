"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//Configuration the .env file
dotenv_1.default.config();
//Create express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
//Define the first route of app
app.get('/', (req, res) => {
    //Send HELLO WORLD!
    res.send('Welcome to my API Restfull: Express + TypeScript + Swagger + Mongoose');
});
//Execute APP ann Listen Request to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map