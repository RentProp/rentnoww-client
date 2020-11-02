/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/YourListings/YourListing.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/Orders/TableList.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import { Message } from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/account"
  },
  {
    path: "/listings",
    name: "Your Listings",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/account"
  },
  
  {
    path: "/table",
    name: "Past Rentings",
    icon: "content_paste",
    component: TableList,
    layout: "/account"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/account"
  },
  {
    path: "/messages",
    name: "Messages",
    icon: Message,
    component: NotificationsPage,
    layout: "/account"
  },
];

export default dashboardRoutes;
