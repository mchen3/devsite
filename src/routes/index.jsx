import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import MaterialPage from "views/MaterialPage/MaterialPage.jsx";


import FrontPage from "views/FrontPage/FrontPage.jsx";


import AppPage from "App.jsx";


var indexRoutes = [

   { path: "/app", name: "App Page", component: AppPage },
   { path: "/material", name: "MaterialPage", component: MaterialPage },
   { path: "/landing-page", name: "LandingPage", component: LandingPage },
  // { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  // { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/components", name: "Components", component: Components },
  { path: "/", name: "Front Page", component: FrontPage },

];

export default indexRoutes;
