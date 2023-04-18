import { useEffect, useState } from "react"


const Manageuser = () => {
    

const [userList, setuserList] = useState([]);

    const fetchUserData = async () => {
        const res =await fetch ('http://localhost:5000/user/getall');
        console.log (res.status);
        const data =await res.json();
        console.log (data);
        setuserList (data);
    }

    useEffect(() => {
      fetchUserData();
    },[]);
    

  return (
    <div>
          <h1 className="text-center display-4">Manage User</h1>
          <hr/>

          <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PASSWORD</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map( (user) =>  (
                    <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                    </tr>    
                ))}
            </tbody>
          </table>
    </div>
  )
}

export default Manageuser;