import Users from "@/components/users";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

export default async function HomePage() {
  const users = await fetchUsers();

  return (
    <div>
      <Users users={users}/>
    </div>
  );
}
