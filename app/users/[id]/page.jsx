
async function getUser(id){
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data
}

export default async function UserPage({params}) {
    const user = await getUser(params.id)
  return (
    <div className="bg-slate-500 flex flex-col items-center p-4 rounded">
        <h2 className="text-3xl font-bold">{user.first_name} {user.last_name}</h2>
        <img src={user.avatar} alt="avatar de usuario" className="rounded-full m-5"/>
        <p>{user.email}</p>
    </div>
  )
}
