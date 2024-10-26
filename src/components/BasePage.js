import {useState} from "react";
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import {Book, Home, Person} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {useNavigate} from "react-router-dom";

const BasePage = ({children, title}) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    function hendleNavigate(path) {
        navigate(path);
    }

    const drawerList = (
        <Box sx={{width: 250}} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {[{page: 'Home', icon: <Home/>, path: '/'},
                    {page: 'Courses', icon: <Book/>, path: '/courses'},
                    {page: 'Students', icon: <Person/>, path: '/students'}].map((x) => (
                    <ListItem key={x.page} disablePadding onClick={() => hendleNavigate(x.path)}>
                        <ListItemButton>
                            <ListItemIcon>
                                {x.icon}
                            </ListItemIcon>
                            <ListItemText primary={x.page}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    function handleClick() {
        setOpen(true);
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                        <MenuIcon onClick={handleClick}/>
                    </IconButton>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {drawerList}
                    </Drawer>
                    <Typography variant="h6" color="inherit" component="div">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            {children}
        </Box>
    )
}

export default BasePage;