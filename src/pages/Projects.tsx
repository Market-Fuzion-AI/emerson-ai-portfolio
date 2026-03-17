import React from 'react';
import { VectorCaseStudy } from '../components/VectorCaseStudy';
import { VectorEvolution } from '../components/VectorEvolution';
import { SystemArchitecture } from '../components/SystemArchitecture';
import { AutomationWorkflows } from '../components/AutomationWorkflows';
import { AIIntegration } from '../components/AIIntegration';
import { OtherProjects } from '../components/OtherProjects';

export function Projects() {
  return (
    <div className="pt-24">
      <VectorCaseStudy />
      <VectorEvolution />
      <SystemArchitecture />
      <AutomationWorkflows />
      <AIIntegration />
      <OtherProjects />
    </div>
  );
}
