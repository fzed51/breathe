import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="container">
        <header className="header">
          <h1>À propos de Breathe</h1>
        </header>

        <div className="content">
          <section className="intro">
            <h2>Qu'est-ce que Breathe ?</h2>
            <p>
              Breathe est une application web conçue pour vous aider à pratiquer des exercices 
              de respiration guidés. Ces techniques simples mais puissantes peuvent vous aider 
              à réduire le stress, améliorer votre concentration et favoriser un état de calme 
              et de bien-être.
            </p>
          </section>

          <section className="techniques">
            <h2>Les techniques proposées</h2>
            
            <div className="technique-card">
              <h3>Technique 4-7-8</h3>
              <p>
                Développée par le Dr Andrew Weil, cette technique est particulièrement efficace 
                pour l'endormissement et la gestion de l'anxiété. Elle consiste à inspirer pendant 
                4 secondes, retenir sa respiration pendant 7 secondes, puis expirer pendant 8 secondes.
              </p>
            </div>

            <div className="technique-card">
              <h3>Respiration Carrée (Box Breathing)</h3>
              <p>
                Utilisée par les forces spéciales et les professionnels de haut niveau, cette 
                technique aide à maintenir le calme sous pression. Chaque phase dure 4 secondes : 
                inspiration, rétention, expiration, pause.
              </p>
            </div>

            <div className="technique-card">
              <h3>Respiration Cohérente</h3>
              <p>
                Cette technique équilibrée synchronise votre rythme cardiaque et votre respiration. 
                Elle consiste en des cycles réguliers de 5 secondes d'inspiration et 5 secondes 
                d'expiration.
              </p>
            </div>

            <div className="technique-card">
              <h3>Respiration Triangulaire</h3>
              <p>
                Une approche simple et accessible pour débuter. Cette technique comprend 
                3 phases de 4 secondes chacune : inspiration, rétention, expiration.
              </p>
            </div>
          </section>

          <section className="benefits">
            <h2>Bienfaits de la respiration consciente</h2>
            <ul>
              <li><strong>Réduction du stress</strong> : Active le système nerveux parasympathique</li>
              <li><strong>Amélioration du sommeil</strong> : Favorise la relaxation avant le coucher</li>
              <li><strong>Meilleure concentration</strong> : Aide à centrer l'attention sur le moment présent</li>
              <li><strong>Régulation émotionnelle</strong> : Aide à gérer l'anxiété et les émotions fortes</li>
              <li><strong>Amélioration de la santé cardiovasculaire</strong> : Régule la pression artérielle et le rythme cardiaque</li>
            </ul>
          </section>

          <section className="usage">
            <h2>Comment utiliser l'application</h2>
            <ol>
              <li>Choisissez la technique de respiration qui vous convient</li>
              <li>Définissez le nombre de cycles que vous souhaitez effectuer</li>
              <li>Trouvez un endroit calme et une position confortable</li>
              <li>Suivez les instructions visuelles et respirez en rythme</li>
              <li>Pratiquez régulièrement pour de meilleurs résultats</li>
            </ol>
          </section>

          <section className="disclaimer">
            <h2>Avertissement</h2>
            <p>
              Cette application est conçue à des fins de bien-être général. Si vous avez des 
              problèmes respiratoires ou des conditions médicales particulières, consultez 
              votre médecin avant de pratiquer ces exercices. Arrêtez immédiatement si vous 
              ressentez des vertiges ou un inconfort.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
