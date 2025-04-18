import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE_URL_MOOD } from '../../../shared/constants/constants';
import { CreateMoodDTO, CreateMoodResponseDTO } from './DTOs/CreateMood';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoodService {
  private readonly baseUrl = API_BASE_URL_MOOD;
  private http = inject(HttpClient);

  createMood(newMood: CreateMoodDTO): Promise<CreateMoodResponseDTO> {
    throw new Error('Method not implemented.');
  }
}
