import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import Employee from "./components/Employee";
import PropsTest from "./other-components/PropsTest";
import Actors from "./components/Actors";
function App() {
  return (
    <>
    <Navbar />
    <UserForm />
    <Employee />
    <PropsTest company="GrowthMints" title="A React Development Company"/>
    <Actors />
    </>
  );
}

export default App;
