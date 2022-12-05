import '../App.css';
import NavBar from './Navbar/NavBar';
import Announcements  from './Annoucement/ViewAnnouncemnts';
import Profile from './Profile/profileDisplay';
import {   Routes, Route} from 'react-router-dom'
import UpdateProfile from './Profile/updateProfile';

function App() {
  return (
    <div >
      <>
      <NavBar/>
      <Routes>
        <Route path='announcements' element ={<Announcements/>} />
        <Route path='profile' element ={<Profile/>} />
        <Route path='edit' element ={<UpdateProfile/>} />
        <Route path='*' element={<h1>Error</h1>} />
      </Routes >
     </>
    </div>
  );
}

export default App;
