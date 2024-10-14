import { Volunteer } from './people';

export enum WeekDays {
  sunday,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
}

export type TimeSlot = {
  startTime: string; // Format: 'HH:MM'
  endTime: string; // Format: 'HH:MM'
};

export type Availability = {
  days: Set<WeekDays>;
  timeSlots?: Array<TimeSlot>;
};

export type TimeSheet = {
  date: Date;
  timeSlots: Array<TimeSlot>;
  volunteer: Volunteer;
  isConfirmed: boolean;
  isPaid: boolean;
  notes: string;
};
