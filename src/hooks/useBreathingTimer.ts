import { useState, useEffect, useCallback } from "react";
import type {
  BreathingPhase,
  TimerState,
  TimerContext,
  ExerciseSettings,
} from "../types/breathing";

interface BreathingTimerOptions {
  onPhaseChange?: () => void;
  onCycleComplete?: () => void;
  onExerciseComplete?: () => void;
  onStart?: () => void;
  onPause?: () => void;
  onResume?: () => void;
}

export const useBreathingTimer = (
  settings: ExerciseSettings,
  options: BreathingTimerOptions = {}
) => {
  const [state, setState] = useState<TimerState>("idle");
  const [currentCycle, setCurrentCycle] = useState(0);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const technique = settings.technique;
  const totalCycles = settings.cycles;
  const phases = technique.phases;
  const currentPhase = phases[currentPhaseIndex];

  // Calculer la durée de la phase actuelle
  const getPhaseDuration = useCallback(
    (phase: BreathingPhase): number => {
      const customDuration = settings.customDurations?.[phase.name];
      return customDuration || phase.duration;
    },
    [settings.customDurations]
  );

  // Initialiser le timer
  const initializeTimer = useCallback(() => {
    if (phases.length > 0) {
      setTimeRemaining(getPhaseDuration(phases[0]));
    }
  }, [phases, getPhaseDuration]);

  // Démarrer le timer
  const start = useCallback(() => {
    setState("running");
    if (state === "idle") {
      initializeTimer();
    }
    options.onStart?.();
  }, [state, initializeTimer, options]);

  // Mettre en pause
  const pause = useCallback(() => {
    setState("paused");
    options.onPause?.();
  }, [options]);

  // Reprendre
  const resume = useCallback(() => {
    setState("running");
    options.onResume?.();
  }, [options]);

  // Arrêter et réinitialiser
  const reset = useCallback(() => {
    setState("idle");
    setCurrentCycle(0);
    setCurrentPhaseIndex(0);
    initializeTimer();
  }, [initializeTimer]);

  // Passer à la phase suivante
  const nextPhase = useCallback(() => {
    const nextPhaseIndex = currentPhaseIndex + 1;

    if (nextPhaseIndex >= phases.length) {
      // Fin du cycle, passer au cycle suivant
      const nextCycle = currentCycle + 1;

      options.onCycleComplete?.();

      if (nextCycle >= totalCycles) {
        // Exercice terminé
        setState("completed");
        options.onExerciseComplete?.();
        return;
      }

      // Nouveau cycle
      setCurrentCycle(nextCycle);
      setCurrentPhaseIndex(0);
      setTimeRemaining(getPhaseDuration(phases[0]));
      options.onPhaseChange?.();
    } else {
      // Phase suivante dans le même cycle
      setCurrentPhaseIndex(nextPhaseIndex);
      setTimeRemaining(getPhaseDuration(phases[nextPhaseIndex]));
      options.onPhaseChange?.();
    }
  }, [
    currentPhaseIndex,
    currentCycle,
    phases,
    totalCycles,
    getPhaseDuration,
    options,
  ]);

  // Gestion du timer
  useEffect(() => {
    if (state !== "running" || timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          nextPhase();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [state, timeRemaining, nextPhase]);

  // Contexte du timer
  const context: TimerContext = {
    currentPhase,
    phaseIndex: currentPhaseIndex,
    cycleIndex: currentCycle,
    timeRemaining,
    totalCycles,
  };

  return {
    state,
    context,
    start,
    pause,
    resume,
    reset,
  };
};
