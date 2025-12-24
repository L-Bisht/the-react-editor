import "./App.css";
import SideBar from "@app/components/SideBar";
import Layout from "@app/components/Layout";
import Workbench from "@app/components/Workbench";

function App() {
  return (
    <Layout>
      <SideBar />
      <Workbench />
    </Layout>
  );
}

export default App;
