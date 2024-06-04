import { Provider } from "react-redux";
import store from "./app/store.ts";
import Router from "./router/router.tsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/index.ts";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
