import React from 'react';

//data
import SkillsData from '../data/SkillsData';

class Skills extends React.Component {
  renderSkill = (skill) => {
    return <span title={skill.since} key={skill.title}>{skill.title}</span>;
  };
  render() {
    return <React.Fragment>
      <h2>My skills</h2>
      <div className="skills-line">
        <em>Main:</em>
        {SkillsData.Main.map(this.renderSkill)}
      </div>
      <div className="skills-line">
        <em>I can also work with:</em>
        {SkillsData.Also.map(this.renderSkill)}
      </div>
    </React.Fragment>
  }
}

export default Skills;