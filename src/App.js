import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className="px-6 flex justify-center h-screen bg-lightTheme-bg-dark dark:bg-darkTheme-bg-dark transition-colors duration-150">
      <div className="max-w-[730px] w-full flex flex-col items-center justify-center">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
