import {Volunteer, WeekDay} from "../types/volunteer.ts";

export const volunteer: Volunteer = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: 1234567890,
    availability: {
        days: new Set([WeekDay.monday, WeekDay.wednesday, WeekDay.friday]),
        timeSlots: [
            {startTime: '10:00', endTime: '12:00'},
            {startTime: '14:00', endTime: '16:00'}
        ]
    },
    isActive: true
};