import { useState } from "react";
import axios from "axios";

export default function EventForm({ onEventAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/events", {
      title, description, date, location
    });
    onEventAdded();
    setTitle(""); setDescription(""); setDate(""); setLocation("");
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 shadow mb-4">
      <h2 className="mb-3">Create New Event</h2>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Event Title"
          value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Description"
          value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="mb-3">
        <input type="date" className="form-control"
          value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Location"
          value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Add Event</button>
    </form>
  );
}
