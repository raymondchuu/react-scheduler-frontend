import React, { useState } from "react";
import DayList from "components/DayList";
import Appointment from "components/Appointment";

import "components/Application.scss";

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  }, 
  {
      id: 3,
      time: "2pm",
      interview: {
          student: "Devin Booker",
          interviewer: {
          id: 2,
          name: "Mildred Nazir",
          avatar: "https://i.imgur.com/T2WwVfS.png",
          }
      }
  },
  {
      id: 4,
      time: "3pm",

  },
  {
      id: 5,
      time: "4pm",
      interview: {
        student: "Kevin Durant",
        interviewer: {
          id: 4,
          name: "Sven Jones",
          avatar: "https://i.imgur.com/twYrpay.jpg",
        }
      }
  },   
];


const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

export default function Application(props) {
  const [day, setDay] = useState("Monday");
  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
        <DayList
          days={days}
          day={day}
          setDay={setDay}
        />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
        {appointments.map((appointment) => (
          <Appointment 
            key={appointment.id}
            {...appointment}
          />
        ))}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
