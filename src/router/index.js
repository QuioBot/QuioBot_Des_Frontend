import { createWebHistory, createRouter } from "vue-router";

import Home01 from "../pages/Home01";
import Page404 from "../pages/404";
import HomeNFT01 from "../pages/HomeNFT01";
import HomeNFT02 from "../pages/HomeNFT02";
import HomeMusic from "../pages/HomeMusic";
import HomeDefi1 from "../pages/HomeDefi01";
import HomeDefi2 from "../pages/HomeDefi02";
import HomeDefi3 from "../pages/HomeDefi03";
import HomeDefi4 from "../pages/HomeDefi04";
import DashboardTokensales from "../pages/DashboardTokensales";
import DashboardFeature from "../pages/DashboardFeature";
import DashboardRoadmap from "../pages/DashboardRoadMap";
import DashboardCreation from "../pages/DashboardCreation";
import DashboardTeam from "../pages/DashboardTeam";
import DashboardFaq from "../pages/DashboardFaq";
import Blogv1 from "../pages/Blog1";
import Blogv2 from "../pages/Blog2";
import Blogv3 from "../pages/Blog3";
import ConnectWallet from "../pages/ConnectWallet";
import Aboutus from "../pages/AboutUs";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ComingSoon from "../pages/ComingSoon";
import Feature from "../pages/Feature";
import Roadmap from "../pages/RoadMap";
import Document from "../pages/Document";
import Team from "../pages/Team";
import Partner from "../pages/Partner";
import Token from "../pages/Token";
import Button from "../pages/Button";
import Footer from "../pages/Footer";
import Faq from "../pages/Faq";
import Icon from "../pages/Icon";


const routes = [
  { path: '/', component: Home01},
  { path: '/HomeNFT01', component: HomeNFT01},
  { path: '/HomeNFT02', component: HomeNFT02},
  { path: '/home-music', component: HomeMusic},
  { path: '/home-defi-01', component: HomeDefi1},
  { path: '/home-defi-02', component: HomeDefi2},
  { path: '/home-defi-03', component: HomeDefi3},
  { path: '/home-defi-04', component: HomeDefi4},
  { path: '/dashboard-tokensales', component: DashboardTokensales},
  { path: '/dashboard-features', component: DashboardFeature},
  { path: '/dashboard-roadmap', component: DashboardRoadmap},
  { path: '/dashboard-creations', component: DashboardCreation},
  { path: '/dashboard-team', component: DashboardTeam},
  { path: '/dashboard-faq', component: DashboardFaq},
  { path: '/blog-v1', component: Blogv1},
  { path: '/blog-v2', component: Blogv2},
  { path: '/blog-v3', component: Blogv3},
  { path: '/connect-wallet', component: ConnectWallet},
  { path: '/about', component: Aboutus},
  { path: '/sign-in', component: SignIn},
  { path: '/sign-up', component: SignUp},
  { path: '/404', component: Page404},
  { path: '/Comingsoon', component: ComingSoon},
  { path: '/features', component: Feature},
  { path: '/roadmap', component: Roadmap},
  { path: '/document', component: Document},
  { path: '/team', component: Team},
  { path: '/partner', component: Partner},
  { path: '/token', component: Token},
  { path: '/button', component: Button},
  { path: '/footer', component: Footer},
  { path: '/Faq', component: Faq},
  { path: '/Icon', component: Icon},

];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
