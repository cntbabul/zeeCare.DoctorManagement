import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your First name"],
    trim: true,
    maxlength: [30, "Name cannot exceed 30 characters"],
    minlength: [3, "Name should have more than 3 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your name"],
    trim: true,
    maxlength: [30, "Name cannot exceed 30 characters"],
    minlength: [3, "Name should have more than 3 characters"],
  },

  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email address"],
  },
  phone: {
    type: String,
    required: [true, "Please enter your phone number"],
    unique: true,
    maxlength: [10, "Phone number cannot exceed 10 characters"],
    minlength: [10, "Phone number should have atleast 10 characters"],
  },

  dob: {
    type: Date,
    required: [true, "Please enter your dob"],
  },
  gender: {
    type: String,
    required: [true, "Please enter your gender"],
    enum: ["male", "female", "other"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [6, "Password should be greater than 6 characters"],
    select: false,
  },
  role: {
    type: String,
    required: [true, "Please enter your role"],
    default: "user",
    enum: ["Patient", "Admin", "Doctor"],
  },
  doctorDepartment: {
    type: String,
    default: "none",
  },
  docAvatar: {
    public_id: String,
    url: String,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparedPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

//Export the model
export const User = mongoose.model("User", userSchema);
