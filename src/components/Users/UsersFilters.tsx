import { type ChangeEventHandler } from "react";
import { SortingType } from "../../hooks/useSortableData";

type Props = {
  handleChange: ChangeEventHandler<HTMLSelectElement>;
};

export function UsersFilters({ handleChange }: Props) {
  return (
    <select className="flex gap-6" onChange={handleChange}>
      <option value="">Sort by</option>
      <option value={SortingType.NICKNAME_ASC}>Nickname ascending</option>
      <option value={SortingType.NICKNAME_DES}>Nickname descending</option>
      <option value={SortingType.AGE_ASC}>Age ascending</option>
      <option value={SortingType.AGE_DES}>Age descending</option>
    </select>
  );
}
