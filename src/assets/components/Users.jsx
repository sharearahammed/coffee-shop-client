import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = _id =>{
        fetch(`https://coffe-store-server-ruddy.vercel.app/user/${_id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount > 0){
                alert('deleted')
                const remaimingUsers = users.filter(user=>user._id !== _id)
                setUsers(remaimingUsers)
            }
        })
    }
    return (
        <div>
          <Header></Header>
            <h2>Users : {users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>LastLogge dAt</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user=><tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.lastLoggedAt}</td>
            <td>
                <button onClick={()=>handleDelete(user._id)} className="btn">X</button>
            </td>
          </tr>)
      }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;