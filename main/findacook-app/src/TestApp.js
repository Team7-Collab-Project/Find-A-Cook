import CookList from "./components/cooks/CookList";
import Navbar from './components/Navbar/Navbar';

function TestApp() {

    return (
        <div>
            <Navbar />
            {/* Other components */}
            <CookList />
        </div>
      );
}

export default TestApp;