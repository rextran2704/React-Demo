
import { useTheme} from "./ThemeNewContext";

const FunctionContextComponent = () => {
  const theme = useTheme();
  const darkTheme = theme.darkTheme;
  const toggleTheme = theme.toggleTheme;
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
};

export default FunctionContextComponent;
