import MePicture from "./MePicture";
import SectionSubtitle from "./SectionSubtitle";
import SectionText from "./SectionText";
import SectionTitle from "./SectionTitles";

export default function Aboutme() {
  return (
    <section
      id="Aboutme"
      className="flex flex-col gap-3 lg:flex-row lg:justify-between lg2:justify-between"
    >
      <hgroup className="lg:invisible lg:absolute lg:self-end lg:justify-self-center">
        <SectionTitle title="Denilson Trujillo Salazar"></SectionTitle>
        <SectionSubtitle subtitle="Data Scientist / Software and Hardware Developer"></SectionSubtitle>
      </hgroup>
      <MePicture extraCss="lg:absolute lg:invisible"></MePicture>
      <SectionText extraCss="lg:absolute lg:invisible"></SectionText>
      {/* ---------------- */}
      <MePicture extraCss="absolute invisible lg:visible lg:relative"></MePicture>
      <div className="invisible absolute lg:visible lg:relative lg:flex lg:flex-col lg:justify-center lg:gap-3 lg2:max-w-[610px]  lg2:gap-12">
        <hgroup className="lg:flex lg:flex-col">
          <SectionTitle title="Denilson Trujillo Salazar"></SectionTitle>
          <SectionSubtitle subtitle="Data Scientist / Software and Hardware Developer"></SectionSubtitle>
        </hgroup>
        <SectionText></SectionText>
      </div>
    </section>
  );
}
