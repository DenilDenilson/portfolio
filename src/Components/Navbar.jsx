export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <a
        href="https://www.youtube.com/channel/UCkYXAoEQjQIIbOjgMAz4rYw"
        target="_blank"
        id="denildenilson"
        className="-font--nunito text-base font-extrabold italic leading-6 tracking-widest text-transparent"
      >
        @DenilDenilson
      </a>

      <div className="h-5 w-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            fill="#272743"
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </div>
    </nav>
  );
}
