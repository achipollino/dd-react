import Header from "./components/Header";
import Menu from "./components/Menu";
import Terms from "./components/Terms";
import Programs from "./components/Programs";
import Program from "./components/Program";
import { ProgramsProvider } from "./providers/ProgramsContext";
import ProgramList from "./components/ProgramList";

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
      {/* <Program 
        programNumber="1"
        programName="Интеллектуальные технологии на&nbsp;железнодорожном транспорте"
        programAction1="Aкадемических часов: 252"
        programAction2="Продолжительность обучения: 9 месяцев"
        programAction3="системный аналитик"
        programDescription="Цель программы&nbsp;&mdash; обучение проектированию систем
                искусственного интеллекта и&nbsp;их&nbsp;использовании
                на&nbsp;железнодорожном транспорте. Знание основ программирования
                и&nbsp;методов реализации систем искусственного интеллекта позволит
                слушателям программы квалифицированно проектировать требования
                к&nbsp;интеллектуальным системам, а&nbsp;также работать
                в&nbsp;проектных командах по&nbsp;их&nbsp;созданию."
        programModule1="Введение в искусственный интеллект"
        programModule2="Основы программирования"
        programModule3="Управление данными"
        programModule4="Машинное обучение"
        programModule5="Системы технического зрения"
        programModule6="Экспертные системы"
        programModule7="Производственная практика"
      />
      <Program 
        programNumber="2"
        programName="Технологии интернета вещей"
        programAction1="Aкадемических часов: 252"
        programAction2="Продолжительность обучения: 9 месяцев"
        programAction3="специалист по информационным системам"
        programDescription="Вы&nbsp;получите навыки практической работы с&nbsp;микропроцесорной
            техникой, телекоммуникационными устройствами, датчиками
            и&nbsp;исполнительными механизмами. В&nbsp;рамках дисциплины
            предполагается изучение документации, специфических инструментов
            и&nbsp;программных средств, позволяющих использовать технологии
            Интернета вещей в&nbsp;проектной деятельности. Задачи дисциплины
            включают в&nbsp;себя знакомство обучающихся с&nbsp;аппаратной
            и&nbsp;программной частью технологии интернета вещей, технологиях
            обработки и&nbsp;передачи данных, приобретение умений и&nbsp;навыков
            по&nbsp;моделированию и&nbsp;программированию разрабатываемой
            системы."
        programModule1="Основы интернета-вещей"
        programModule2="Разработка и проектирование устройств"
        programModule3="Особенности применения интернета-вещей"
        programModule4="Производственная практика, в том числе в форме стажировки"
      /> */}
    </div>
  );
}

export default App;
