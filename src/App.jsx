import { AuthProvider } from "./context/AuthContext";
import NavigationScroll from "./Helpers/NavigationScroll";
import TheRoutes from "./routes";

function App() {
  return (
    <AuthProvider>
      <NavigationScroll>
        <TheRoutes />
      </NavigationScroll>
    </AuthProvider>
  );
}

export default App;
