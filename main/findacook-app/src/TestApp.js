import CookList from "./components/cooks/CookList";
import Navbar from './components/Navbar/Navbar';
import EditProfile from "./components/cooks/EditProfile";

function TestApp() {

    return (
        <div>
            <Navbar />
            {/* Other components */}
            <CookList />
            {/* <EditProfile /> */}
        </div>
      );
}

export default TestApp;