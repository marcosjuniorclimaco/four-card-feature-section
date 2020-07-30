import React from 'react';
import './cards.css';
import './responsive.css'
import IconTeam from '../../images/teambuilder.svg';
import IconCalculator from '../../images/calculator.svg';
import IconKarma from '../../images/karma.svg';
import IconSupervisor from '../../images/supervisor.svg';

export class Card extends React.Component {
  render() {
    return (
        <ul class="cards-container">
            
        <li class="cyan-feature-card">
          <h2>Supervisor</h2>
          <p>
            Monitors activity to identify project roadblocks
          </p>
          <img src={IconSupervisor} 
               alt="supervisor logo" />
        </li>
    
        <li class="red-feature-card">
          <h2>Team Builder</h2>
          <p>
            Scans our talent network to create the optimal team for your project
          </p>
          <img src={IconTeam}
               alt="team builder logo" />
        </li>
    
        <li class="orange-feature-card">
          <h2>Karma</h2>
          <p>
            Regularly evaluates our talent to ensure quality
          </p>
          <img src={IconKarma}
               alt="karma logo" />
        </li>
    
        <li class="blue-feature-card">
          <h2>Calculator</h2>
          <p>
            Uses data from past projects to provide better delivery estimates
          </p>
          <img src={IconCalculator}
               alt="calculator feature icon" />
        </li>
      </ul>
    );
  }
}
