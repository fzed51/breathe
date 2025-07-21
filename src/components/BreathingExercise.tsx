import React from 'react';
import { useBreathingTimer } from '../hooks/useBreathingTimer';
import { useVibration } from '../hooks/useVibration';
import type { ExerciseSettings } from '../types/breathing';

interface BreathingExerciseProps {
  settings: ExerciseSettings;
  onComplete: () => void;
  onBack: () => void;
}

export const BreathingExercise: React.FC<BreathingExerciseProps> = ({
  settings,
  onComplete,
  onBack
}) => {
  const {
    vibratePhaseChange,
    vibrateCycleComplete,
    vibrateExerciseComplete,
    vibrateStart,
    vibratePause,
    vibrateResume,
    isVibrationSupported
  } = useVibration();

  const { state, context, start, pause, resume, reset } = useBreathingTimer(settings, {
    onPhaseChange: vibratePhaseChange,
    onCycleComplete: vibrateCycleComplete,
    onExerciseComplete: vibrateExerciseComplete,
    onStart: vibrateStart,
    onPause: vibratePause,
    onResume: vibrateResume
  });

  const handleComplete = () => {
    reset();
    onComplete();
  };

  const getPhaseColor = (phaseName: string): string => {
    switch (phaseName) {
      case 'inhale':
        return '#4CAF50'; // Vert
      case 'hold':
        return '#2196F3'; // Bleu
      case 'exhale':
        return '#FF9800'; // Orange
      case 'pause':
        return '#9C27B0'; // Violet
      default:
        return '#666';
    }
  };

  const getPhaseInstruction = (phaseName: string): string => {
    switch (phaseName) {
      case 'inhale':
        return 'Inspirez';
      case 'hold':
        return 'Retenez';
      case 'exhale':
        return 'Expirez';
      case 'pause':
        return 'Pausez';
      default:
        return '';
    }
  };

  return (
    <div className="breathing-exercise">
      <div className="exercise-header">
        <button className="back-button" onClick={onBack}>
          ← Retour
        </button>
        <h2>{settings.technique.name}</h2>
      </div>

      <div className="exercise-content">
        <div className="progress-info">
          <div className="cycle-info">
            Cycle {context.cycleIndex + 1} sur {context.totalCycles}
          </div>
          {isVibrationSupported && (
            <div className="vibration-indicator">
              📳 Vibrations actives
            </div>
          )}
        </div>

        <div className="breathing-circle-container">
          <div 
            className={`breathing-circle ${state === 'running' ? 'active' : ''}`}
            style={{ 
              borderColor: getPhaseColor(context.currentPhase?.name || ''),
              animationDuration: `${context.currentPhase?.duration || 4}s`
            }}
          >
            <div className="circle-content">
              <div className="phase-name">
                {getPhaseInstruction(context.currentPhase?.name || '')}
              </div>
              <div className="timer">
                {context.timeRemaining}s
              </div>
            </div>
          </div>
        </div>

        <div className="phase-instruction">
          {context.currentPhase?.instruction || ''}
        </div>

        <div className="controls">
          {state === 'idle' && (
            <button className="control-button primary" onClick={start}>
              Commencer
            </button>
          )}
          
          {state === 'running' && (
            <button className="control-button" onClick={pause}>
              Pause
            </button>
          )}
          
          {state === 'paused' && (
            <>
              <button className="control-button primary" onClick={resume}>
                Reprendre
              </button>
              <button className="control-button" onClick={reset}>
                Recommencer
              </button>
            </>
          )}
          
          {state === 'completed' && (
            <div className="completion">
              <h3>🎉 Exercice terminé !</h3>
              <p>Félicitations ! Vous avez complété votre session de respiration.</p>
              <button className="control-button primary" onClick={handleComplete}>
                Nouvel exercice
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
