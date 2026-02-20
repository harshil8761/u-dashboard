import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import EditProfile from "./EditProfile";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [edit,setEdit] = useState(false);
  if (edit) {
    return <EditProfile setEdit={setEdit} />
  }
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">My Profile</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Password</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-3">{user?.username}</td>
              <td className="p-3">{user?.email}</td>
              <td className="p-3">{user?.password}</td>
              <td className="p-3">
                <button onClick={() => setEdit(true)} className="bg-blue-600 text-white px-3 py-1 rounded cursor-pointer">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
