export type Volunteer = {
    name: string;
    email: string;
    phone: number;
    // skills: Skills;
    // resources: Resources;
    availability: Availability;
    isActive: boolean;
}

export enum WeekDay {
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
}

export type Availability = {
    days: Set<WeekDay>;
    timeSlots?: Array<TimeSlot>;
}

export type TimeSlot = {
    startTime: string; // Format: 'HH:MM'
    endTime: string;   // Format: 'HH:MM'
}

export type TimeSheet = {
    date: Date;
    timeSlots: Array<TimeSlot>;
    volunteer: Volunteer;
    isConfirmed: boolean;
    isPaid: boolean;
    notes: string;
}
