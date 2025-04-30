import { NavLink } from 'react-router-dom';

const User = ({ users }) => {
  return (
    <div className="flex flex-col items-center">
      {users.map((user) => (
        <div key={user.id} className="flex flex-col items-center mb-4 py-3">

          <NavLink
            to={`/user/${user.id}`} 
            className="flex flex-col items-center"
            activeclassname="text-blue-500" 
          >
            <img
              src={user.image}
              alt={`User ${user.id}`}
              className="w-10 h-10 rounded-full"
            />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default User;
