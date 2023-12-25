import React from 'react';

import useAsyncHook from '../helpers/useAsyncHook';
import { skillsDataLink } from '../config';
import Loader from './Loader';

const Skills = () => {
  type skillType = {
    title: string;
    since: string;
  };
  type skillsDataType = {
    [skillGroupName: string]: skillType[];
  };

  const [skillsData, loading, error] = useAsyncHook({
    link: skillsDataLink,
  }) as [skillsDataType, boolean, string];

  const title = <h2>My skills</h2>;
  if (loading) {
    return (
      <>
        {title}
        <Loader />
      </>
    );
  }
  if (error) {
    return (
      <>
        {title}
        {error}
      </>
    );
  }
  if (skillsData === null) {
    return <>JavaScript</>;
  }
  const renderSkill = (skill: skillType) => (
    <span title={skill.since} key={skill.title}>
      {skill.title}
    </span>
  );
  return (
    <>
      {title}
      {Object.keys(skillsData).map((key) => (
        <div className="skills-line" key={key}>
          <em>{key}</em>
          {skillsData[key].map(renderSkill)}
        </div>
      ))}
    </>
  );
};

export default Skills;
