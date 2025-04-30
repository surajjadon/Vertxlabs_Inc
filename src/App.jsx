import { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Layout from './Layout';
function App() {
  const [users, setUsers] = useState([
    {
      id: 2,
      image: 'https://i.pravatar.cc/150?img=2',
    },
  ]);

  const addUser = () => {
    const newUser = {
      id: users.length + 2,
      image: `https://i.pravatar.cc/150?img=${users.length + 1}`,
    };
    setUsers([...users, newUser]);
  };

  return (
    <Router>
      <Layout users={users} addUser={addUser} />
    </Router>
  );
}

export default App;
