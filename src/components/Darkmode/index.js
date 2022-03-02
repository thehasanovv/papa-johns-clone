import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../store/themeSlice";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const DarkMode = () => {
  const data = useSelector((state) => state.theme.isDarkMode);

  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(toggle());
    localStorage.setItem("isDarkmode", data);
  };
  
  return (
    <span onClick={toggleTheme} style={{ cursor: "pointer" }}>
      {data ? <Brightness7Icon /> : <Brightness4Icon />}
    </span>
  );
};
