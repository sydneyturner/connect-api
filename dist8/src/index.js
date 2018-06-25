"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
exports.ConnectApiApplication = application_1.ConnectApiApplication;
async function main(options) {
    const app = new application_1.ConnectApiApplication(options);
    await app.boot();
    await app.start();
    return app;
}
exports.main = main;
//# sourceMappingURL=index.js.map