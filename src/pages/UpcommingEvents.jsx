import React from 'react';
import Eventcomponent from '../components/Eventcomponent';
import event1 from "../assets/images/event1.jfif";
import event2 from "../assets/images/event2.jfif";

const UpcommingEvents = (props) => {
  return (
    <div className="mt-20">
      <p className="flex items-center justify-center text-lg font-semibold">Select Any Events</p>
      <div className="flex sm:flex-row flex-col items-center justify-center gap-6 mt-4">
        <Eventcomponent text={"Upcoming Events"} image={event1} className="w-full sm:w-auto" />
        <Eventcomponent image={event2} text={"Registered Events"} className="w-full sm:w-auto" />
      </div>
    </div>
  );
};

export default UpcommingEvents;
