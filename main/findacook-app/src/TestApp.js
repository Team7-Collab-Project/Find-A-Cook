import CookList from "./components/cooks/CookList";
import Navbar from './components/Navbar/Navbar';
import EditProfile from "./components/cooks/EditProfile";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function TestApp() {

    return (
        <div>
            <Topbar />
            <Sidebar />

            <EditProfile />
        </div>
      );
}

export default TestApp;