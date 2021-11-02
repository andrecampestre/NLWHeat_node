"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const AuthenticateUserController_1 = require("./controllers/AuthenticateUserController");
const CreateMessageController_1 = require("./controllers/CreateMessageController");
const GetLast3MessagesController_1 = require("./controllers/GetLast3MessagesController");
const ProfileUserController_1 = require("./controllers/ProfileUserController");
const ensureAuthenticated_1 = require("./middleware/ensureAuthenticated");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/authenticate", new AuthenticateUserController_1.AuthenticateUserController().handle);
router.post("/messages", ensureAuthenticated_1.ensureAuthenticated, new CreateMessageController_1.CreateMessageController().handle);
router.get("/messages/last3", new GetLast3MessagesController_1.GetLast3MessagesController().handle);
router.get("/profile", ensureAuthenticated_1.ensureAuthenticated, new ProfileUserController_1.ProfileUserController().handle);
router.get("/", (req, res) => {
    res.json({
        msg: 'API Online'
    });
});
router.get("/about", (req, res) => {
    res.json({
        name: 'Andre',
        email: 'dev.andreloiola@gmail.com',
        urls: [
            {
                type: 'github',
                url: 'http://github.com/andrecampestre'
            },
            {
                type: 'linkedin',
                url: 'https://www.linkedin.com/in/andre-loiola-a8a83b68/'
            }
        ]
    });
});
