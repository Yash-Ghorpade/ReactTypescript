import "./App.css";
import { Home } from "./pages/Home/Home";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <Home />
    </ThemeProvider>
  );
}

export default App;
