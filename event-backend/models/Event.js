import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    date: { type: Date, required: true },
    location: String
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
