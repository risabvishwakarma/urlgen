import UrlGen from "./compoents/urlgen/urlgen";
import "./App.css";
import { SnackbarProvider } from "notistack";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ending from "./compoents/ending/Ending";

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UrlGen />} />
          <Route path="/ending" element={<Ending />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
