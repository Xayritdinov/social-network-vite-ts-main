import { Route, Routes } from "react-router";
import { LoginPage, MainPage, ProfilePage, RegistrationPage } from "./pages";
import { Header } from "./components";

export function App() {
  return (
      <div className="App">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" index element={<LoginPage />} />
              <Route path="/auth/main" element={<MainPage />} />
              <Route path="/auth/registration" element={<RegistrationPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>            
            {/* <Routes>
              <Route path="/" index element={<MainPage />} />
              <Route path="/auth/login" element={<LoginPage />} />
              <Route path="/auth/registration" element={<RegistrationPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>             */}
          </div>
        </div>
  );
}
