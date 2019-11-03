import React from 'react';
import ReactDOM from 'react-dom';
import Skills from '../components/Skills';
import SkillsData from '../data/SkillsData';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Skills />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders skill correctly', () => {
  const result = Skills.renderSkill({
    'since': '2018',
    'title': 'test'
  });
  expect(result).toEqual('<span title="2019" key="test">test</span>');

});