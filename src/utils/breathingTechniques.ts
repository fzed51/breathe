import type { BreathingTechnique } from '../types/breathing';

export const BREATHING_TECHNIQUES: BreathingTechnique[] = [
  {
    id: '4-7-8',
    name: 'Technique 4-7-8',
    description: 'Technique de relaxation profonde : inspirez 4s, retenez 7s, expirez 8s',
    defaultCycles: 4,
    phases: [
      {
        name: 'inhale',
        duration: 4,
        instruction: 'Inspirez lentement par le nez'
      },
      {
        name: 'hold',
        duration: 7,
        instruction: 'Retenez votre respiration'
      },
      {
        name: 'exhale',
        duration: 8,
        instruction: 'Expirez complètement par la bouche'
      }
    ]
  },
  {
    id: 'box-breathing',
    name: 'Respiration Carrée',
    description: 'Technique d\'équilibre : 4-4-4-4 (inspirez, retenez, expirez, retenez)',
    defaultCycles: 5,
    phases: [
      {
        name: 'inhale',
        duration: 4,
        instruction: 'Inspirez lentement'
      },
      {
        name: 'hold',
        duration: 4,
        instruction: 'Retenez votre respiration'
      },
      {
        name: 'exhale',
        duration: 4,
        instruction: 'Expirez lentement'
      },
      {
        name: 'pause',
        duration: 4,
        instruction: 'Pausez avant le prochain cycle'
      }
    ]
  },
  {
    id: 'coherent-breathing',
    name: 'Respiration Cohérente',
    description: 'Respiration équilibrée : 5s inspiration, 5s expiration',
    defaultCycles: 6,
    phases: [
      {
        name: 'inhale',
        duration: 5,
        instruction: 'Inspirez profondément'
      },
      {
        name: 'exhale',
        duration: 5,
        instruction: 'Expirez complètement'
      }
    ]
  },
  {
    id: 'triangle-breathing',
    name: 'Respiration Triangulaire',
    description: 'Technique simple : 4-4-4 (inspirez, retenez, expirez)',
    defaultCycles: 5,
    phases: [
      {
        name: 'inhale',
        duration: 4,
        instruction: 'Inspirez calmement'
      },
      {
        name: 'hold',
        duration: 4,
        instruction: 'Retenez votre respiration'
      },
      {
        name: 'exhale',
        duration: 4,
        instruction: 'Expirez lentement'
      }
    ]
  }
];

export const getTechniqueById = (id: string): BreathingTechnique | undefined => {
  return BREATHING_TECHNIQUES.find(technique => technique.id === id);
};
