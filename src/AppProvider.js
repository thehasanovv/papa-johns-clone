import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./style/global";
import { theme } from "./style/themes";
import { darkTheme } from "./style/darkTheme";
import { lightTheme } from "./style/lightTheme";

const AppProvider = ({ children }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </Provider>
    </Router>
  );
};

export default AppProvider;
