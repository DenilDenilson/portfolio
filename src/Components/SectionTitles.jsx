export default function SectionTitle(props) {
  return (
    <h2
      className={`text-center -font--nunito text-xl font-black italic -text--light_text-main lg:text-left lg:text-3xl lg2:text-5xl ${props.extraCss}`}
    >
      {props.title}
    </h2>
  );
}
