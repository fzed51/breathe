import { useCallback } from 'react';

interface VibrationPattern {
  short: number[];
  medium: number[];
  long: number[];
  phaseChange: number[];
  cycleComplete: number[];
  exerciseComplete: number[];
}

export const useVibration = () => {
  // Patterns de vibration en millisecondes [vibrer, pause, vibrer, pause, ...]
  const patterns: VibrationPattern = {
    short: [100],
    medium: [200],
    long: [300],
    phaseChange: [150, 50, 150], // Double vibration pour changement de phase
    cycleComplete: [200, 100, 200, 100, 200], // Triple vibration pour fin de cycle
    exerciseComplete: [300, 150, 300, 150, 300, 150, 300] // Vibration longue pour fin d'exercice
  };

  // Vérifier si la vibration est disponible
  const isVibrationSupported = useCallback((): boolean => {
    return 'navigator' in window && 'vibrate' in navigator;
  }, []);

  // Fonction générique de vibration
  const vibrate = useCallback((pattern: number | number[]): boolean => {
    if (!isVibrationSupported()) {
      console.log('Vibration non supportée sur cet appareil');
      return false;
    }

    try {
      navigator.vibrate(pattern);
      return true;
    } catch (error) {
      console.error('Erreur lors de la vibration:', error);
      return false;
    }
  }, [isVibrationSupported]);

  // Vibrations spécifiques pour les différents événements
  const vibratePhaseChange = useCallback(() => {
    return vibrate(patterns.phaseChange);
  }, [vibrate, patterns.phaseChange]);

  const vibrateCycleComplete = useCallback(() => {
    return vibrate(patterns.cycleComplete);
  }, [vibrate, patterns.cycleComplete]);

  const vibrateExerciseComplete = useCallback(() => {
    return vibrate(patterns.exerciseComplete);
  }, [vibrate, patterns.exerciseComplete]);

  const vibrateStart = useCallback(() => {
    return vibrate(patterns.medium);
  }, [vibrate, patterns.medium]);

  const vibratePause = useCallback(() => {
    return vibrate(patterns.short);
  }, [vibrate, patterns.short]);

  const vibrateResume = useCallback(() => {
    return vibrate(patterns.short);
  }, [vibrate, patterns.short]);

  // Arrêter toute vibration
  const stopVibration = useCallback(() => {
    if (isVibrationSupported()) {
      navigator.vibrate(0);
    }
  }, [isVibrationSupported]);

  return {
    isVibrationSupported: isVibrationSupported(),
    vibrate,
    vibratePhaseChange,
    vibrateCycleComplete,
    vibrateExerciseComplete,
    vibrateStart,
    vibratePause,
    vibrateResume,
    stopVibration
  };
};
