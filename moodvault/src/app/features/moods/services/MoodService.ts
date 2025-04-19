import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { API_BASE_URL_MOOD } from '../../../shared/constants/constants';
import { CreateMoodDTO, CreateMoodResponseDTO } from './models/CreateMood';

@Injectable({
  providedIn: 'root',
})
export class MoodService {
  private readonly uuid = localStorage.getItem('uuid') || '';
  private readonly endpoint = `${API_BASE_URL_MOOD}/${this.uuid}`;
  private http = inject(HttpClient);

  createMood(newMood: CreateMoodDTO): Promise<CreateMoodResponseDTO> {
    if (!newMood.userId) {
      newMood.userId = this.uuid;
    }
    return lastValueFrom(
      this.http.post<CreateMoodResponseDTO>(this.endpoint, newMood)
    );
  }
}
