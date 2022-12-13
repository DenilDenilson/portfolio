import SectionTitles from "./SectionTitles";
import ProjectsVis from "./ProjectVis";
import ProjectSlider from "./ProjectSlider";

export default function Projects() {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center justify-center gap-3 lg:gap-6">
      <SectionTitles title="Projects"></SectionTitles>
      <ProjectsVis
        // tecIcons2={{
        //   ReactIcon: <ReactIcon width={"32px"} height={"32px"}></ReactIcon>,
        //   Tailwind: <Tailwind width={"32px"} height={"32px"}></Tailwind>,
        //   Git: <Git width={"32px"} height={"32px"}></Git>,
        // }}
        tecIcons2={["ReactIcon", "Tailwind", "Git"]}
      ></ProjectsVis>
    </section>
  );
}
