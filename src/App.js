import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/login-component/login-component';
import UserList from './components/userList-component/UserList';
import EditUser from './components/editUser-component/EditUser';
// import Footer from './components/footer';
// import Login from './components/login-component';


const App = () => {
  return (
    
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/edit-user" element={<EditUser />} />
        
      </Routes>
    
  );
}

export default App;





// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Login from './components/login-component';

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/users" element={<UserList />} />
//     </Routes>
//   );
// };

// export default App;
