import Header from "./components/Header";
import Menu from "./components/Menu";
import Terms from "./components/Terms";
import Programs from "./components/Programs";
import { ProgramsProvider } from "./providers/ProgramsContext";
import ProgramList from "./components/ProgramList";
import { QnAProvider } from "./providers/QnAContext";
import QnAStart from "./components/QnAStart";
import Footer from "./components/Footer";

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
      <QnAProvider>
        <QnAStart />
      </QnAProvider>
      <Footer />
    </div>
  );
}

export default App;
