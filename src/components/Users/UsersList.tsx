import { type UsersData } from "./usersData";

export function UsersList({ data }: { data: UsersData }) {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {data.map(({ id, nickname, age }) => {
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
  );
}
