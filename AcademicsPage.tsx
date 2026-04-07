
import React from 'react';
import Academics from '../components/Academics';
import ExploreMore from '../components/ExploreMore';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import { GraduationCap } from 'lucide-react';

const AcademicsPage: React.FC = () => {
  return (
    <div className="relative pb-32">
      <PageHeader 
        icon={GraduationCap}
        title="Academic"
        highlight="Excellence"
        subtitle="A synthesis of rigorous scholarship, elite university recruitment, and a 4.0 collegiate GPA."
      />

      <Section className="max-w-full mx-auto px-6">
        <Academics />
      </Section>

      <ExploreMore />
    </div>
  );
};

export default AcademicsPage;
