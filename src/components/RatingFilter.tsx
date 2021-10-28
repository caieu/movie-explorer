import { Star } from "../icons/Star";

interface RatingFilterProps {
  selected: number;
  onFilter: (rate: number) => void;
}

export const RatingFilter = ({ selected, onFilter }: RatingFilterProps) => {
  const onRateClick = (rate: number) => {
    onFilter(selected === rate ? 0 : rate);
  };

  return (
    <div className="flex h-12 w-full justify-center">
      {[1, 2, 3, 4, 5].map((rate) => (
        <div
          key={rate}
          className={"flex p-2 items-center justify-center cursor-pointer"}
          onClick={() => onRateClick(rate)}
        >
          <Star outline={rate > selected } />
        </div>
      ))}
    </div>
  );
};
