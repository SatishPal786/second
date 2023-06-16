import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
  },
  user_password: {
    type: String,
    required: true,
  },
  user_mobile: {
    type: Number,
    required: true,
    max: 10,
    min: 10,
  },
  user_dob: {
    type: Date,
    required: true,
  },
  user_gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
});
export const user_schema = new mongoose.model("user_schema", userSchema);
