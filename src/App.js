import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import Employee from "./components/Employee";
import PropsTest from "./other-components/PropsTest";
function App() {
  return (
    <>
    <Navbar />
    <UserForm />
    <Employee />
    <PropsTest company="GrowthMints" title="A React Development Company"/>
    </>
  );
}

export default App;
