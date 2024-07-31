import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
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
  message: {
    type: String,
    required: [true, "Please enter your message"],
    // maxlength: [500, "Message cannot exceed 500 characters"],
    // minlength: [5, "Message should have more than 5 characters"],
  },
});

//Export the model
export const Message = mongoose.model("Message", messageSchema);
