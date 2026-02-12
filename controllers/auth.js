//const { User } = require("../models");
exports.authController = {
  signup: async (req, res) => {
    try {
      const { name, email, password, role } = req.body;

      const newUser = new User({ name, email, password, role });

      await newUser.save();

      res.status(201).json({ message: "user registererd successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message }); // next(error);
    }
  },
};

module.exports = { signup };
