import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", active: false, to: "/dashboard" },
    { name: "Analytics", active: true, to: "/analytics" },
    { name: "Connect", active: false, to: "/connect" },
    { name: "Dealroom", active: false, to: "/dealroom" },
    { name: "Profile", active: false, to: "/profile" },
    { name: "Settings", active: false, to: "/settings" },
  ];

  return (
    <div className="bg-black h-[100%] w-46 sm:w-48 md:w-50 lg:w-64 px-6 py-6 text-gray-500 font-medium transition-all duration-300">
      <ul className="space-y-6">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.to}
              className={`block ${
                item.active
                  ? "text-white font-semibold"
                  : "hover:text-gray-300"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
