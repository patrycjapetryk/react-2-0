import { type ChangeEventHandler } from "react";

import { capitalizeText } from "../../utils/capitalizeText";
import { type UsersData } from "./usersData";
import { useSortableData } from "../../hooks/useSortableData";
import { AddUser } from "../AddUser";
import { UsersList } from "./UsersList";
import { UsersFilters } from "./UsersFilters";

type Props = {
  usersData: UsersData;
};

export function Users({ usersData }: Props) {
  const data = usersData.map(({ id, nickname, age }) => {
    return { id, nickname: capitalizeText(nickname), age };
  });

  const { sortedData, setSorting } = useSortableData({ data });

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const selectValue = event.target.value;
    setSorting(selectValue);
  };

  return (
    <section className="max-w-xl rounded-xl border bg-white p-10">
      <UsersFilters handleChange={handleChange} />
      <UsersList data={sortedData} />
      <AddUser />
    </section>
  );
}
