/**
 * @file menu_config.js
 */

import Components from "../importComponents";
import ContextTypes from "../context_types";
import Icons from "../icons";

/**
 * Configuration for the application's menu items.
 * @type {Object} MenuItem
 * @property {string} label - The display name of the menu item.
 * @property {object} icon - The icon associated with the menu item.
 * @property {string|null} dataType - The data type associated with the menu item.
 * @property {string} route - The URL route associated with the menu item.
 * @property {JSX.Element} component - The React component to render when this menu item is selected.
 */

/**
 * Array of menu items for the application.
 * @type {MenuItem[]} menuConfig
 */
const menuConfig = [
  {
    label: "Dashboard",
    icon: Icons.AlignLeftIcon,
    dataType: ContextTypes.Dashboard,
    route: '/',
    component: <Components.Dashboard />,
  },
  {
    label: "Hardware",
    icon: "icon2",
    dataType: ContextTypes.Hardware,
    route: '/hadrware',
    component: <Components.Hardware />,
  },
  {
    label: "Software",
    icon: "icon3",
    dataType: ContextTypes.Software,
    route: '/software',
    component: <Components.Software />,
  },
  {
    label: "Network",
    icon: "icon4",
    dataType: ContextTypes.Network,
    route: '/network',
    component: <Components.Network />,
  },
  {
    label: "User",
    icon: "icon5",
    dataType: ContextTypes.User,
    route: '/user',
    component: <Components.User/>,
  },
  {
    label: "Log In",
    icon: "icon6",
    dataType: null,
    route: '/login',
    component: <Components.Authentication />,
  },
  {
    label: "About",
    icon: "icon7",
    dataType: null,
    route: '/about',
    component: <Components.About /> ,
  },

  // Add more menu items as needed
];

export default menuConfig;
