import {Profile} from "./profile";

export interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  city: string;
  venue: string;
  hostUsername?: string;
  isCanceled?: boolean;
  attendees?: Profile[];
}
