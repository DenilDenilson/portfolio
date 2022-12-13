import SectionTitles from "./SectionTitles";
import ProjectsVis from "./ProjectVis";
import ProjectSlider from "./ProjectSlider";
import ProjectDescription from "./ProjectDescription";

export default function Projects() {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center justify-center gap-3 lg:gap-6 lg2:mx-0 lg2:max-w-none">
      <SectionTitles extraCss="lg2:text-6xl" title="Projects"></SectionTitles>
      <div className="lg2:flex lg2:justify-between lg2:gap-32">
        <ProjectsVis tecIcons2={["ReactIcon", "Tailwind", "Git"]}></ProjectsVis>
        <ProjectDescription></ProjectDescription>
      </div>
    </section>
  );
}
