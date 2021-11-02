import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController"
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
);

router.get("/messages/last3", new GetLast3MessagesController().handle);

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

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
  })
})

export { router };