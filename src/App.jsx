import Header from "./components/Header";
import Menu from "./components/Menu";
import Terms from "./components/Terms";
import Programs from "./components/Programs";
import { ProgramsProvider } from "./providers/ProgramsContext";
import ProgramList from "./components/ProgramList";
import Footer from "./components/Footer";
import QnA from './components/QnA';
import { QnAContext } from './providers/QnAContext';

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
      <section id="faq" className="faq">
        <div className="container">
            <h2 className="terms-title title">
                Вопросы и ответы
            </h2>
            {QnAContext.map(({ id, question, answer }) => (
              <QnA key={id} question={question} answer={answer} />
            ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
