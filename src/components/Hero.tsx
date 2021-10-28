interface HeroProps {
  onSearch: (text: string) => void;
}

export const Hero = ({ onSearch }: HeroProps) => {
  return (
    <div
      className="h-52 md:h-96 bg-cover bg-no-repeat flex content-center backdrop-filter backdrop-opacity-80"
      style={{ backgroundImage: "url(/imgs/hero.png)" }}
    >
      <div className="flex w-full justify-center bg-black bg-opacity-60">
        <input
          placeholder="Search for a movie..."
          onChange={(e) => onSearch(e.target.value)}
          className="flex self-center rounded-full px-4 w-2/3 md:w-1/3 h-10"
        />
      </div>
    </div>
  );
};
