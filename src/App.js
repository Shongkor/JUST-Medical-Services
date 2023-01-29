import AppRouter from "./AppRouter";
import NavBar from "./Component/Common/NavBar";

function App() {
  return (
    <div>
      <AppRouter>
        <NavBar />
      </AppRouter>
    </div>
  );
}

export default App;
