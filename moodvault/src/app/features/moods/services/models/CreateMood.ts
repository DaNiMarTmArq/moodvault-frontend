import { Mood } from '../../../../shared/models/Mood';
import { MoodAttribute } from '../../../../shared/models/MoodAttribute';

export interface CreateMoodDTO {
  userId?: string;
  score: number;
  description: string;
  moodAttributes: MoodAttribute[];
}

export interface CreateMoodResponseDTO {
  message: string;
  data: Mood;
}
