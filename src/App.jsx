import { AuthProvider } from "./context/AuthContext";
import NavigationScroll from "./Helpers/NavigationScroll";
import TheRoutes from "./routes";
import { IconContext } from "react-icons";

function App() {
  return (
    <AuthProvider>
      <NavigationScroll>
        <IconContext.Provider
          value={{
            color: "#868686",
            size: 36,
          }}
        >
          <TheRoutes />
        </IconContext.Provider>
      </NavigationScroll>
    </AuthProvider>
  );
}

export default App;
