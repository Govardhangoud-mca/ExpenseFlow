import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {
  Box
} from "@mui/material";

import Dashboard from "./pages/Dashboard";
import ExpensesPage from "./pages/ExpensesPage";
import CreateExpensePage from "./pages/CreateExpensePage";

import Navbar from "./components/Navbar";

function App() {

  return (

    <BrowserRouter>

      <Box
        sx={{

          minHeight: "100vh",

          background:
            "linear-gradient(135deg, #020617, #0f172a, #1e1b4b)",

          color: "white"
        }}
      >

        <Navbar />

        <Box
          sx={{
            padding: 3
          }}
        >

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/expenses"
              element={<ExpensesPage />}
            />

            <Route
              path="/create-expense"
              element={<CreateExpensePage />}
            />

          </Routes>

        </Box>

      </Box>

    </BrowserRouter>
  );
}

export default App;