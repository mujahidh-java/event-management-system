import { useState } from "react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

export default function Home() {
  // refresh trigger state
  const [refresh, setRefresh] = useState(false);

  // toggle refresh when new event added
  const handleEventAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Event Management System</h1>
      <EventForm onEventAdded={handleEventAdded} />
      {/* key={refresh} → re-render list when refresh toggles */}
      <EventList key={refresh} />
    </div>
  );
}
