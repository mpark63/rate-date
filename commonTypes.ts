/* 
  File containing all the common types we use throughout the app.
*/

export type Event = {
  name: string;
  description?: string;
  date: Date; 
  location?: String; 
  recurring?: boolean; 
  rating?: number; 
};

export type Task = {
  name: string;
  description?: string;
  date: Date; 
  recurring?: boolean; 
  rating?: number; 
};

export type Day = {
  date: Date; 
  events: Event[]; 
  tasks: Task[]; 
  rating?: number; 
  reflection?: string; 
};

export type User = {
  _id: string; //JHED ID
  name: string;
  email: string;
  calendar: Day[];
};