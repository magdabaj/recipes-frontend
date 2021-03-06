/**
 *
 * Navigation
 *
 */
//
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import '../../containers/NavigationContainer/index.css'
import fetchStates from "../../utils/fetchStates";
import {toast} from "react-toastify";
// import styled from 'styled-components';

const Navigation = ({ user, signOut, logoutStatus }) =>
    <div className={'navigation-container'}>
        <div className={'navigation'}>
            <div className={'navigation-title'}>
                <NavLink to={'/'} exact className={'navigation-title--item'}>
                    Przepisy
                </NavLink>
            </div>

            <div className={'navigation-links'}>
                <NavLink to={'/'} exact activeClassName={"navigation-links--active"} className={'navigation-links--item'}>
                    Strona główna
                </NavLink>
                {user.loggedIn ?
                    <NavLink to={'/user-recipes'} role={'your-profile'} activeClassName={"navigation-links--active"} className={'navigation-links--item'}>
                        Twój profil
                    </NavLink> : null}
            </div>

            <div className={'navigation-login'}>
                {user.loggedIn ? (
                    <div className={'navigation-login--item'}>
                        <div onClick={signOut} className={'logout'} data-testid={'logout'}>Wyloguj</div>
                    </div>
                ) : (
                    <NavLink to={'/login'} className={'navigation-login--item'} activeClassName={"navigation-links--active"}>
                        Zaloguj
                    </NavLink>
                )}
            </div>
        </div>
        {logoutStatus === fetchStates.success && toast.success("Wylogowałeś się pomyślnie")}
    </div>

Navigation.propTypes = {
    user: PropTypes.object.isRequired,
    signOut: PropTypes.func.isRequired,
    logoutStatus: PropTypes.string,

};

export default memo(Navigation);

// import React, {memo, useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import colorStyles from "../../utils/colorStyles";
// import clsx from "clsx";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import CakeIcon from "@material-ui/icons/Cake";
// import ListItemText from "@material-ui/core/ListItemText";
// import Divider from "@material-ui/core/Divider";
// import Drawer from "@material-ui/core/Drawer";
// import {AccountCircle} from "@material-ui/icons";
// import Link from "@material-ui/core/Link";
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         background: colorStyles.mediumPink,
//         width: '100%',
//         color: "white"
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//     },
//     list: {
//         width: 250,
//     },
//     fullList: {
//         width: 'auto',
//     },
// }));
//
// const Navigation = ({user, signOut}) => {
//     const [state, setState] = useState({
//         left: false,
//     });
//     const classes = useStyles();
//
//     const toggleDrawer = (anchor, open) => (event) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//             return;
//         }
//
//         setState({ ...state, [anchor]: open });
//     };
//
//     const list = (anchor) => (
//         <div
//             className={clsx(classes.list, {
//                 [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//             })}
//             role="presentation"
//             onClick={toggleDrawer(anchor, false)}
//             onKeyDown={toggleDrawer(anchor, false)}
//         >
//             <List>
//                 <ListItem button >
//                     <ListItemIcon><CakeIcon/></ListItemIcon>
//                     <Link href={'/'}>
//                         <ListItemText primary={"Main page"}/>
//                     </Link>
//                 </ListItem>
//             </List>
//             <Divider />
//             <List>
//                 <ListItem button >
//                     <ListItemIcon><AccountCircle/></ListItemIcon>
//                     <Link href={'/user-recipes'}>
//                         <ListItemText primary={"Your profile"}/>
//                     </Link>
//                 </ListItem>
//             </List>
//         </div>
//     );
//
//
//     return (
//         <div className={classes.root}>
//             <AppBar position="static" className={classes.root}>
//                 <Toolbar>
//                     <IconButton edge="start" className={classes.menuButton} color="white" aria-label="menu"  >
//                         <React.Fragment key={'left'}>
//                             <Button onClick={toggleDrawer('left', true)} color={"white"}>
//                                 <MenuIcon />
//                             </Button>
//                             <Drawer anchor={'left'} open={state['left']}>
//                                 {list('left')}
//                             </Drawer>
//                         </React.Fragment>
//                     </IconButton>
//                     <Typography variant="h6" className={classes.title}>
//                         <Link href={'/'}>
//                             Recipes
//                         </Link>
//                     </Typography>
//                     <Button color="inherit">
//                         {user.loggedIn ? (
//                             <div onClick={signOut}>Logout</div>
//                     ) : (
//                         <Link href={'/login'}>
//                             Login
//                         </Link>
//                     )}
//                     </Button>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     );
// }
//
// export default memo(Navigation)
//
