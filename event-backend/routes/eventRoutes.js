import { Router } from "express";
import Event from "../models/Event.js";

const router = Router();

// ➕ Create
router.post("/", async (req, res) => {
  try {
    const { title, description, date, location } = req.body;
    const event = await Event.create({ title, description, date, location });
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 📖 Read All
router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// ✏️ Update (PUT)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: "Event not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ❌ Delete
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Event.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Event not found" });
    res.json({ message: "Event deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
