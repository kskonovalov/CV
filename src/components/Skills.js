import React from 'react';

// data
import SkillsData from '../data/SkillsData';

const Skills = () => {
  const renderSkill = skill => {
    return (
      <span title={skill.since} key={skill.title}>
        {skill.title}
      </span>
    );
  };
  return (
    <>
      <h2>My skills</h2>
      <div className="skills-line">
        <em>Main:</em>
        {SkillsData.Main.map(renderSkill)}
      </div>
      <div className="skills-line">
        <em>I can also work with:</em>
        {SkillsData.Also.map(renderSkill)}
      </div>
    </>
  );
};

export default Skills;
