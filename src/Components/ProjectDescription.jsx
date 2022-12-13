export default function ProjectDescription(props) {
  return (
    <div className="invisible absolute flex w-full  flex-col justify-center gap-3 lg2:visible lg2:relative">
      <h3 className="border-b-4 -border--light_text-main -font--nunito text-5xl font-bold -text--light_text-main">
        Calculator
      </h3>
      <p className="w-full -font--nunito text-2xl font-medium -text--light_text-main">
        This project focused on web layout is a validated calculator with three
        different themes selectable through a toggle. Everything was done with
        react and tailwind.
      </p>
      <div className="flex justify-center gap-48">
        <a
          href="https://github.com/DenilDenilson/Calculator"
          target="_blank"
          className="inline-block cursor-pointer rounded-xl -bg--light_principal p-4 -font--nunito text-2xl font-bold -text--light_text-main shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
        >
          View code
        </a>
        <a
          href="https://denildenilson.github.io/Calculator/"
          target="_blank"
          className="inline-block cursor-pointer rounded-xl -bg--light_background p-4 -font--nunito text-2xl font-bold text-[#18b985] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] "
        >
          View site
        </a>
      </div>
    </div>
  );
}
