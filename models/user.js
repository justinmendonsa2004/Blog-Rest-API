const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, rquired: true },
    email: { type: String, rquired: true, unique: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    // role: 1 -> super admin,role 2 -> normal admin, role: 3 normal user
    role: { type: Number, defult: 3 },
  },
  { timestamps: true },
);

const User = mongoose.model("user", userSchema);
module.exports = User;
