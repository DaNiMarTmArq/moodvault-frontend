import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AttributeService {
  private attributes = {
    veryUnpleasant: [
      'Desesperanza',
      'Soledad',
      'Vergüenza',
      'Ansiedad intensa',
      'Abatimiento',
    ],
    unpleasant: ['Tristeza', 'Ira', 'Miedo', 'Asco', 'Frustración'],
    neutral: [
      'Indiferencia',
      'Aburrimiento',
      'Curiosidad leve',
      'Serenidad',
      'Desconcierto',
    ],
    pleasant: [
      'Alegría',
      'Interés',
      'Satisfacción',
      'Tranquilidad',
      'Gratitud',
    ],
    veryPleasant: ['Euforia', 'Amor', 'Entusiasmo', 'Plenitud', 'Esperanza'],
  };

  getAttributesByScore(score: number) {
    if (score <= 1) {
      return this.attributes.veryUnpleasant;
    } else if (score <= 2) {
      return this.attributes.unpleasant;
    } else if (score <= 3) {
      return this.attributes.neutral;
    } else if (score <= 4) {
      return this.attributes.pleasant;
    } else if (score <= 5) {
      return this.attributes.veryPleasant;
    }
    return [];
  }
}
