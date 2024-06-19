import { type ChangeEventHandler } from "react";

import { capitalizeText } from "../../utils/capitalizeText";
import { type UsersData } from "./usersData";
import { SortingType, useSortableData } from "../../hooks/useSortableData";

type Props = {
  usersData: UsersData;
};

export function Users({ usersData }: Props) {
  const data = usersData.map(({ id, nickname, age }) => {
    return { id, nickname: capitalizeText(nickname), age };
  });

  const { sortedData, setSorting } = useSortableData({ data });

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const selectValue = event.target.value as SortingType;
    setSorting(selectValue);
  };

  return (
    <section className="max-w-xl rounded-lg border border-zinc-300 p-10">
      <select className="flex gap-6" onChange={handleChange}>
        <option value="">Sort by</option>
        <option value={SortingType.NICKNAME_ASC}>Nickname ascending</option>
        <option value={SortingType.NICKNAME_DES}>Nickname descending</option>
        <option value={SortingType.AGE_ASC}>Age ascending</option>
        <option value={SortingType.AGE_DES}>Age descending</option>
      </select>

      <div className="mt-10 flex flex-wrap gap-3">
        {sortedData.map(({ id, nickname, age }) => {
          return (
            <div
              className="flex gap-3 rounded-md bg-slate-200 px-4 py-1"
              key={id}
            >
              <p>{nickname}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
