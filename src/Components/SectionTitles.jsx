export default function SectionTitle(props) {
  return (
    <h2
      className={`-font--nunito text-xl font-black italic -text--light_text-main lg:text-left lg:text-3xl ${props.extraCss}`}
    >
      {props.title}
    </h2>
  );
}
