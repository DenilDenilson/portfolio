import SectionTitle from "./SectionTitles";

export default function Aboutme() {
  return (
    <section className="flex flex-col gap-3">
      <hgroup>
        <SectionTitle title="Denilson Trujillo Salazar"></SectionTitle>
        <h3 className="-font--nunito text-sm font-bold italic -text--light_text-main">
          Data Scientist / Software and Hardware Developer
        </h3>
      </hgroup>
      <div id="me-picture"></div>
      <p className="text-left -font--nunito text-xs font-medium -text--light_text-main">
        Hello my name is Denilson Trujillo Salazar, I am passionate about
        technology. I have special interest in the development of software,
        hardware and the creation of IA and machine learning models with data
        processing. I like to know all the workflow in the projects. Personally,
        I consider myself a person of great intellectual curiosity and a fast
        learner. I love cats 😸 and I give my best when cooking 😶. I have a
        goal to be and work with the best professionals in technology. <br></br>{" "}
        If you want to get to know me better then Download Cv
      </p>
    </section>
  );
}
