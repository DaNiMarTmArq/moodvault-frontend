import { MoodAttribute } from './MoodAttribute';

export interface Mood {
  id?: string;
  score: string;
  description: string;
  userId: string;
  createdAt?: string;
  modifiedAt?: string;
  moodAttributes?: MoodAttribute[];
}
