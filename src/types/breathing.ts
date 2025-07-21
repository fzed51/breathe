export interface BreathingTechnique {
  id: string;
  name: string;
  description: string;
  phases: BreathingPhase[];
  defaultCycles: number;
}

export interface BreathingPhase {
  name: 'inhale' | 'hold' | 'exhale' | 'pause';
  duration: number; // en secondes
  instruction: string;
}

export interface ExerciseSettings {
  technique: BreathingTechnique;
  cycles: number;
  customDurations?: {
    inhale?: number;
    hold?: number;
    exhale?: number;
    pause?: number;
  };
}

export interface SessionData {
  id: string;
  technique: string;
  cycles: number;
  duration: number; // durée totale en secondes
  completedAt: Date;
}

export type TimerState = 'idle' | 'running' | 'paused' | 'completed';

export interface TimerContext {
  currentPhase: BreathingPhase;
  phaseIndex: number;
  cycleIndex: number;
  timeRemaining: number;
  totalCycles: number;
}
