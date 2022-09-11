import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "./theme";
import DashboardPage from "./pages/DashboardPage";
import SearchPage from "./pages/SearchPage";
import CreateRecipePage from "./pages/CreateRecipePage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL3LUkPKCa2dQsx8tsE8Xf4TK1uv2tbHc",
  authDomain: "food-app-ce93d.firebaseapp.com",
  projectId: "food-app-ce93d",
  storageBucket: "food-app-ce93d.appspot.com",
  messagingSenderId: "307509829914",
  appId: "1:307509829914:web:5524e5df6f4efd08754ca3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/create-post" element={<CreateRecipePage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
