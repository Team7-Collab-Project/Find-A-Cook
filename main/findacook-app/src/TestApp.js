import CookList from "./components/cooks/CookList";
import Navbar from './components/Navbar/Navbar';
import EditProfile from "./components/cooks/EditProfile";
import AddMenuItem from "./components/cooks/AddCookItem";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";

function TestApp() {

    return (
        <div>
            < Topbar />
            < Sidebar />
            {/* Other components */}
            {/* <CookList /> */}
            {/* <EditProfile /> */}
            <AddMenuItem />
        </div>
      );
}

export default TestApp;