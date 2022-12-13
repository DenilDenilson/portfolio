import SectionTitle from "./SectionTitles";
import AllIcons from "./AllIcons";

export default function Skills() {
  return (
    <section
      id="Skills"
      className="mx-auto flex w-full max-w-md flex-col items-center gap-3 lg:max-w-none lg:gap-6"
    >
      <SectionTitle extraCss="lg2:text-6xl" title="Skills" />
      <AllIcons extraCss="lg:invisible lg:absolute" size="32px"></AllIcons>
      <AllIcons
        extraCss="absolute invisible lg:visible lg:relative"
        size="96px"
      ></AllIcons>
    </section>
  );
}
