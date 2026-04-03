import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      
      try {
        // Fetch user details
        const res = await fetch(`http://localhost:3000/api/auth/getbyid/${id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to fetch profile");
        setUser(data.user);

        // // Fetch user's orders (assuming backend route exists)
        // const ordersRes = await fetch(`http://localhost:1208/api/orders/${id}`, {
        //   headers: { Authorization: `Bearer ${token}` },
        // });
        // const ordersData = await ordersRes.json();
        // if (!ordersRes.ok) throw new Error(ordersData.message || "Failed to fetch orders");
        // setOrders(ordersData.orders || []);
      } catch (error) {
        console.error(error.message);
        alert(error.message);
      }
    };

    fetchProfile();
  }, [id, navigate]);

  if (!user) return <p className="text-center mt-20 text-lg">Loading profile...</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center gap-8">
      {/* User Info Card */}
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <img
            src={` `}
            alt="User Avatar"
            className="w-32 h-32 rounded-full border-4 border-gray-300"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-500 mt-2">{user.email}</p>
          <p className="text-gray-400 mt-1 text-sm">User ID: {user._id}</p>
          <p className="text-gray-500 mt-1">Phone: {user.PhoneNo || "N/A"}</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Home
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
              }}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Orders Section */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Orders</h2>
        {orders.length === 0 ? (
          <p className="text-gray-500">You have no orders yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">Order ID</th>
                  <th className="px-4 py-2 text-left text-gray-600">Date</th>
                  <th className="px-4 py-2 text-left text-gray-600">Total</th>
                  <th className="px-4 py-2 text-left text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* {orders.map((order) => (
                  <tr key={order._id} className="border-t border-gray-200">
                    <td className="px-4 py-2">{order._id}</td>
                    <td className="px-4 py-2">{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-2">${order.total.toFixed(2)}</td>
                    <td className="px-4 py-2">{order.status}</td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Shipping/Address Section */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Shipping Address</h2>
        <p className="text-gray-600">{user.address || "No address saved yet."}</p>
      </div>
    </div>
  );
};

export default Profile;