import { Availability } from './scheduling';

type User = {
  name: string;
  email: string;
  phone: number;
};

export type Volunteer = User & {
  // skills?: Skills;
  // resources?: Resources;
  availability: Availability;
  isActive: boolean;
};
