/*import { ChangeLayoutButton } from "../ChangeLayoutButton";
import classnames from 'classnames';
import styles from "./styles.module.scss";

interface  ChangeLayoutButtonProps{
    layoutType: boolean;
    changeLayput: () => void;
}

export function Header({layoutType, changeLayput} : ChangeLayoutButtonProps) {
    return (
        <header className={classnames(styles.hederContainer, !layoutType ? styles.lightMode : "")}>
            <div className={styles.hederContent}>
                <img src={layoutType ? '/images/logo-junior-init.png' : '/images/logo-junior-init-dark.png'} alt="Junior init" />
                <nav>
                    <a className={classnames(styles.active, !layoutType ? styles.TextLightMode : "")}>Home</a>
                    <a className={classnames(!layoutType ? styles.TextLightMode : "")}>Sobre nós</a>

                </nav>
                <ChangeLayoutButton layoutType={layoutType} handleChangeLayputMode={changeLayput}/>
            </div>
        </header>
    )
}*/













import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ChangeLayoutButton } from '../ChangeLayoutButton';

const pages = ['Home', 'Sobre Nós'];

interface  ChangeLayoutButtonProps{
    layoutType: boolean;
    changeLayput: () => void;
}

export function Header({layoutType, changeLayput} : ChangeLayoutButtonProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
             <img src={layoutType ? '/images/logo-junior-init.png' : '/images/logo-junior-init-dark.png'} alt="Junior init" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Mudar Tema">
                <ChangeLayoutButton layoutType={layoutType} handleChangeLayputMode={changeLayput}/>
            </Tooltip>
        </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};