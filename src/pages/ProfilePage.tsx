import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

// Dummy data for orders
const orders = [
  { id: 1, date: "2024-01-01", total: "$100.00", status: "Delivered" },
  { id: 2, date: "2024-02-15", total: "$150.00", status: "Shipped" },
  { id: 3, date: "2024-03-05", total: "$200.00", status: "Processing" },
];

const ProfilePage = () => {
  const { user } = useAuth();
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    if (user) {
      setProfileImage(`https://i.pravatar.cc/150?img=${user.id}`);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
        <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-4xl font-bold text-red-500 mb-4">
            User not found
          </h1>
          <p>Please log in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Profile Page</title>
        <meta
          name="description"
          content="View your profile information and order history."
        />
      </Helmet>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 text-gray-800 p-4">
        <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={profileImage}
              alt={`${user.name}'s profile`}
              className="w-24 h-24 rounded-full"
            />
            <div>
              <h1 className="text-4xl font-bold text-primary mb-1">
                {user.name}
              </h1>
              <p className="text-lg text-gray-700">{user.email}</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Order History
          </h2>
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <div>
                  <p className="text-lg font-semibold">Order #{order.id}</p>
                  <p className="text-sm text-gray-600">Date: {order.date}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">{order.total}</p>
                  <p
                    className={`text-sm font-semibold ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// Function to get status color
const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return "text-green-600";
    case "Shipped":
      return "text-blue-600";
    case "Processing":
      return "text-yellow-600";
    default:
      return "text-gray-600";
  }
};

export default ProfilePage;
