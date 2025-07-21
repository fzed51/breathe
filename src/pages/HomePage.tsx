import React, { useState } from 'react';
import { BREATHING_TECHNIQUES } from '../utils/breathingTechniques';
import { BreathingExercise } from '../components/BreathingExercise';
import type { BreathingTechnique, ExerciseSettings } from '../types/breathing';

export const HomePage: React.FC = () => {
  const [selectedTechnique, setSelectedTechnique] = useState<BreathingTechnique | null>(null);
  const [cycles, setCycles] = useState<number>(4);
  const [isExerciseStarted, setIsExerciseStarted] = useState(false);

  const handleStartExercise = () => {
    if (selectedTechnique) {
      setIsExerciseStarted(true);
    }
  };

  const handleBackToForm = () => {
    setIsExerciseStarted(false);
  };

  if (isExerciseStarted && selectedTechnique) {
    const settings: ExerciseSettings = {
      technique: selectedTechnique,
      cycles
    };

    return (
      <BreathingExercise 
        settings={settings} 
        onComplete={handleBackToForm}
        onBack={handleBackToForm}
      />
    );
  }

  return (
    <div className="home-page">
      <div className="container">
        <header className="header">
          <h1>Breathe</h1>
          <p>Choisissez votre exercice de respiration</p>
        </header>

        <form className="exercise-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="technique-select">Technique de respiration :</label>
            <select
              id="technique-select"
              value={selectedTechnique?.id || ''}
              onChange={(e) => {
                const technique = BREATHING_TECHNIQUES.find(t => t.id === e.target.value);
                setSelectedTechnique(technique || null);
                if (technique) {
                  setCycles(technique.defaultCycles);
                }
              }}
              required
            >
              <option value="">Sélectionnez une technique</option>
              {BREATHING_TECHNIQUES.map(technique => (
                <option key={technique.id} value={technique.id}>
                  {technique.name}
                </option>
              ))}
            </select>
          </div>

          {selectedTechnique && (
            <>
              <div className="technique-description">
                <h3>{selectedTechnique.name}</h3>
                <p>{selectedTechnique.description}</p>
                <div className="phases">
                  <h4>Phases :</h4>
                  <ul>
                    {selectedTechnique.phases.map((phase, index) => (
                      <li key={index}>
                        <strong>{phase.instruction}</strong> - {phase.duration}s
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="cycles-input">Nombre de cycles :</label>
                <input
                  id="cycles-input"
                  type="number"
                  min="1"
                  max="20"
                  value={cycles}
                  onChange={(e) => setCycles(parseInt(e.target.value) || 1)}
                />
              </div>

              <button 
                type="button"
                className="start-button"
                onClick={handleStartExercise}
              >
                Commencer l'exercice
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};
