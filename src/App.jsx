import UrlGen from "./urlgen/urlgen";
import "./App.css";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <UrlGen />
    </SnackbarProvider>
  );
}

export default App;
