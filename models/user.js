const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImageURL: {
      type: String,
      default: "/images/userImage.png",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

// 🔹 Hash password before saving to DB
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const saltRounds = 10; // Recommended salt rounds
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

const User = model("User", userSchema);

module.exports = User;
