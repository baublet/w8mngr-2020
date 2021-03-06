import { hot } from "react-hot-loader";
import { Link, Router } from "react-router-dom";
import * as React from "react";
import ContentContainer from "client/components/Containers/ContentContainer";
import HeartIcon from "client/components/Icons/Heart";
import IsLoggedIn from "client/components/Auth/IsLoggedIn";
import IsLoggedOut from "client/components/Auth/IsLoggedOut";
import Routes from "./Routes";
import history from "client/history";
import FoodCircleIcon from "./components/Icons/FoodCircle";
import HealthCircleIcon from "./components/Icons/HealthCircle";
import LogoutCircleIcon from "./components/Icons/LogoutCircleIcon";

interface NavigationIconProps {
  to: string;
  icon: React.ReactComponentElement<any>;
  text: string;
}

function NavigationIcon(props: NavigationIconProps) {
  const { to, icon, text } = props,
    active = history.location.pathname == to;
  return (
    <Link to={to} className={`block ${active ? "" : "opacity-75"}`}>
      <div className="text-xl block text-center">{icon}</div>
      <span>{text}</span>
    </Link>
  );
}

function Application(): React.ReactComponentElement<any> {
  return (
    <Router history={history}>
      <div className="flex flex-col min-h-full">
        <div className="min-h-screen">
          <header className="my-5">
            <h1 className="text-center text-secondary text-5xl">
              <Link to="/" title="w8mngr">
                <HeartIcon />
              </Link>
            </h1>
            <div className="flex justify-around text-xs">
              <IsLoggedIn>
                <NavigationIcon
                  to="/foodlog"
                  icon={<FoodCircleIcon />}
                  text="Nutrition"
                />
                <NavigationIcon
                  to="/activities"
                  icon={<HealthCircleIcon />}
                  text="Activity"
                />
                <NavigationIcon
                  to="/logout"
                  icon={<LogoutCircleIcon />}
                  text="Logout"
                />
              </IsLoggedIn>
              <IsLoggedOut>
                <Link to="/register">Register</Link>
                <Link to="/login">Log In</Link>
              </IsLoggedOut>
            </div>
          </header>
          <main className="flex-grow flex-1 flex-col">
            <Routes />
          </main>
        </div>
        <footer className="bg-primary text-primaryText mt-13 py-8 min-h-screen flex items-center">
          <ContentContainer>Footer</ContentContainer>
        </footer>
      </div>
    </Router>
  );
}

export default hot(module)(Application);
