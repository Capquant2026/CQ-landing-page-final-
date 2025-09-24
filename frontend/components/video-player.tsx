export default function VideoPlayer() {
  return (
    <div className="mt-40 w-[80%] lg:w-5xl h-[500px] rounded-lg bg-amber-50 gap-2 flex items-center justify-center flex-col border border-white/[.08] bg-gradient-to-b from-[#141516] to-[#08090A] ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-20 p-4 hover:opacity-90 cursor-pointer  bg-white rounded-full"
        viewBox="0 0 640 640"
      >
        <path
          fill="black"
          d="M147.6 101.6C135.5 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6zM176 490.5L176 149.5L487.3 320L176 490.5z"
        />
      </svg>
      <div className="text-center">
        <h2 className="tracking-tight">Video Integration placeholder</h2>
        <p className="font-light tracking-tight">Click to play demo video</p>
      </div>
    </div>
  );
}
