import { useGlobalContext } from "./context";
import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";
const App = () => {
  const { isDarkTheme } = useGlobalContext();
  return (
    <main className="dark">
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
