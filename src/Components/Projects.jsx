import SectionTitles from "./SectionTitles";
import ProjectsVis from "./ProjectVis";

export default function Projects() {
  return (
    <section className="flex flex-col gap-3">
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
