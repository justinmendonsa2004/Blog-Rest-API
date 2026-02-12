const express = require("express");
const router = express.Router();
const { authController } = require("../controllers/auth");

/*// example route
router.post("/signup", (req, res) => {
  res.json({ message: "signup working" });
});*/
router.post("/signup", authController.signup);

module.exports = router;
