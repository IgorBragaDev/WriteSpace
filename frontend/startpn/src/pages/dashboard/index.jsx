import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import dropMenu from "../../images/png/Frame.png";
import userIcon from "../../images/png/Bitmap.png";
import messageIcon from "../../images/svg/message.svg";
import settingIcon from "../../images/svg/setting.svg";
import taskIcon from "../../images/png/task-square.png";
import chessIcon from "../../images/svg/Vector.svg";
import userIconMenu from "../../images/svg/user-icon.svg";
import exitIcon from "../../images/svg/logout.svg";
import elipse from "../../images/svg/ellipse.svg";
import plusSignal from "../../images/svg/mais.svg";
import "./dashboard.css";
const DashBoard = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const toggleMenu = () => {
    console.log("click");
    console.log(openSideMenu);
    setOpenSideMenu(!openSideMenu);
  };

  return (
    <>
      <div className="dashboardPageContainer">
        <header className="containerDashboard">
          <div className="headerDivDashBoard">
            <button onClick={() => toggleMenu()} className="dropdownButton">
              <img src={dropMenu} alt="" />
            </button>
            <Logo />
            <img src={userIcon} alt="" />
          </div>
        </header>
        <div className="DashContainer">
          <h1 className="text_circular_color_blue_bold">Playbooks</h1>
          <div className={`sideMenuBar ${openSideMenu ? "open" : ""}`}>
            <Logo width={"153px"} heigth={"39px"} />
            <ul className="text_circular_side_menu_color_grey sideMenuItensContainer ">
              <li className="sideMenuItens">
                <img src={chessIcon} alt="" />
                Playbooks
              </li>
              <li className="sideMenuItens">
                <img src={taskIcon} alt="" />
                Exemplo
              </li>
              <li className="sideMenuItens">
                <img src={messageIcon} />
                Exemplo
              </li>
              <li className="sideMenuItens">
                <img src={settingIcon} alt="" />
                Exemplo
              </li>
              <li className="sideMenuItens">
                <img src={userIconMenu} alt="" />
                Minha conta
              </li>
            </ul>
            <h3 className="sideMenuItens text_circular_side_menu_color_grey">
              <img src={exitIcon} alt="" />
              Sair
            </h3>
          </div>
          <div>
            <Link>
              <div className="ellipseButton">
                <img  src={elipse} />
                <img className="ellipseCircle" src={plusSignal}></img>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
