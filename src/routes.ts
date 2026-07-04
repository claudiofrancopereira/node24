import { Router } from "express";

//import { UsersController } from "./controllers/UsersController";

const router = Router();

router.get("/users", (req, res) => {
  res.json({ message2: "Hello, World!" });
});

export { router };
