import { Provider } from "react-redux";
import store from "./app/store.ts";
import Router from "./router/router.tsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/index.ts";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
