import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/sass/main.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
