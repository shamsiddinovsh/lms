import { createContext, useContext } from "react";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

const ColorModeContext = createContext({ toggleColorMode: () => {} });
export default function MyApp() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <div>
        {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        </div>
    );
  }