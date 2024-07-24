import Header from "./components/Header";
import Menu from "./components/Menu";
import Terms from "./components/Terms";
import Programs from "./components/Programs";
import { ProgramsProvider } from "./providers/ProgramsContext";
import ProgramList from "./components/ProgramList";
import QnA from "./components/QnA";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Terms />
      <Programs />
      <ProgramsProvider>
        <ProgramList />
      </ProgramsProvider>
      <QnA />
    </div>
  );
}

export default App;
