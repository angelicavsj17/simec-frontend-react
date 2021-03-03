import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.scss'

let SideBarContain = ({ appointments }) => {
    let [date] = useState(new Date());
    let [dateClock, setDateClock] = useState(new Date());
    useEffect(() => {
        var timerID = setInterval(() => setDateClock(new Date()), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    });
    return (
        <div className="side-bar-container">
            <Calendar selectable={true} value={null}
                className="react-calendar-events"
                value={date}
                tileClassName={({ date }) => {
                    let hasEvent = appointments.find((d) => new Date(d.dayAppointment).getDate() === date.getDate() && new Date(d.dayAppointment).getMonth() === date.getMonth() && new Date(d.dayAppointment).getFullYear() === date.getFullYear())
                    if (hasEvent) {
                        return 'highlight';
                    }
                }}
            />
            <div className="time-side-bar">
                <span>{dateClock.toLocaleTimeString()}</span>
            </div>
        </div>
    )
}
export default SideBarContain