import { Volunteer } from '../types/people';
import { WeekDays } from '../types/scheduling';

export const volunteer: Volunteer = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: 1234567890,
  availability: {
    days: new Set([WeekDays.monday, WeekDays.wednesday, WeekDays.friday]),
    timeSlots: [
      { startTime: '10:00', endTime: '12:00' },
      { startTime: '14:00', endTime: '16:00' },
    ],
  },
  isActive: true,
};
