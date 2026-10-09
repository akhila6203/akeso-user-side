import Breadcrumb from "../components/Breadcrumb";

import HealthConditionGrid from "../components/health/HealthConditionGrid";
import HealthLibraryProvides from "../components/health/HealthLibraryProvides";
import AkesoResearch from "../components/health/AkesoResearch";
import HealthcareEasier from "../components/health/HealthcareEasier";
import HealthTechnologySlider from "../components/health/HealthTechnologySlider";

import KnowledgeCenterSection from "../components/knowledge/KnowledgeCenterSection";


import {
  healthConditions,
  libraryProvides,
  healthcareCards,
} from "../data/healthLibraryData";

import {  
  healthLibraryTechnologies,
} from "../data/technologyData";


export default function HealthLibrary() {
  return (
    <main className="bg-white">
      <Breadcrumb
        items={[
          {
            label:
              "Health Library",
          },
        ]}
        title="Health Library"
        description="Explore diseases, conditions, treatments, ailments and healthcare information."
      />

      <HealthConditionGrid
        conditions={
          healthConditions
        }
      />

      <HealthLibraryProvides
        items={
          libraryProvides
        }
      />

      <AkesoResearch />

      <HealthcareEasier
        cards={
          healthcareCards
        }
      />

      <HealthTechnologySlider
        technologies={
          healthLibraryTechnologies
        }
      />

      <KnowledgeCenterSection />
      
    </main>
  );
}