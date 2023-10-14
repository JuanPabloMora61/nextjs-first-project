
import Link from "next/link";

export default function Users({ users }) {
  return (
    <ul className="flex flex-wrap justify-around">
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <li
            className="bg-slate-400 m-5 p-4 text-black flex flex-col items-center justify-center w-100"
          >
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-bold">
                {user.id}. {user.first_name} {user.last_name}
              </h3>
              <p className="text-slate-200">Email:</p>
              <p className="text-slate-200">{user.email}</p>
            </div>
            <img
              src={user.avatar}
              alt="avatar usuario"
              className="rounded-full w-15"
            />
          </li>
        </Link>
      ))}
    </ul>
  );
}
