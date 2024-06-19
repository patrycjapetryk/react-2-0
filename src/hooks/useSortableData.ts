import { useState } from "react";
import { type UsersData } from "../components/Users/usersData";

export enum SortingType {
  NICKNAME_ASC = "nickname-ascending",
  NICKNAME_DES = "nickname-descending",
  AGE_ASC = "age-ascending",
  AGE_DES = "age-descending",
  NOT_SET = "",
}

export function useSortableData({ data }: { data: UsersData }) {
  const [sortingField, setSortingField] = useState<SortingType | string>(
    SortingType.NOT_SET,
  );

  const sortedData = (data: UsersData) => {
    if (sortingField === SortingType.NICKNAME_ASC) {
      return data.sort((a, b) => {
        const nameA = a.nickname.toUpperCase();
        const nameB = b.nickname.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else if (sortingField === SortingType.NICKNAME_DES) {
      return data.sort((a, b) => {
        const nameA = a.nickname.toUpperCase();
        const nameB = b.nickname.toUpperCase();
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });
    } else if (sortingField === SortingType.AGE_ASC) {
      return data.sort((a, b) => a.age - b.age);
    } else if (sortingField === SortingType.AGE_DES) {
      return data.sort((a, b) => b.age - a.age);
    } else {
      return data;
    }
  };

  const setSorting = (field: SortingType | string) => {
    setSortingField(field);
  };

  return { sortedData: sortedData(data), setSorting };
}
