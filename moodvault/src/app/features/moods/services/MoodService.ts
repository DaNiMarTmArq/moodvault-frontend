import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE_URL_MOOD } from '../../../shared/constants/constants';
import { CreateMoodDTO, CreateMoodResponseDTO } from './models/CreateMood';
import { last, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoodService {
  private readonly endpoint = `${API_BASE_URL_MOOD}/${localStorage.getItem(
    'uuid'
  )}`;
  private http = inject(HttpClient);

  createMood(newMood: CreateMoodDTO): Promise<CreateMoodResponseDTO> {
    throw new Error('Method not implemented.');
  }
}
