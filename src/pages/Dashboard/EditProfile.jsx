import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const EditProfile = ({ setEdit }) => {
  const { user, setUser } = useContext(AuthContext);
  const [form, setForm] = useState({
    username: user?.username,
    email: user?.email,
    password: user?.password,
  });
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    const updatedUsers = users.map((u) =>
      u.email === user.email ? { ...u, ...form } : u,
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("user", JSON.stringify(form));
    setUser(form);
    toast.success("Profile Updated Successfully ✅");
    setEdit(false);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-lg">
      <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
      <div className="space-y-4">
        <div>
          <label className="text-sm">Name</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        <div>
          <label className="text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        <div>
          <label className="text-sm">Password</label>
          <div className=" relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            >
              {showPass ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>

          <button
            onClick={() => setEdit(false)}
            className="bg-gray-300 px-4 py-2 rounded cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
