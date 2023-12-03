import { useContext, useState } from "react";
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
import { CategoriesContext } from "../../context/categoriesContext";
import AddCategoriesModal from "../../components/addCategoriesModal";
const DashBoard = () => {
  const { categories } = useContext(CategoriesContext);
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
          <div>
            <div className="categoriesBox">
              <h1 className="text_circular_label categoriesBoxTitle ">
                Categorias
              </h1>
              <ul>
                {categories.map((categories) => (
                  <li key={categories.id}>
                    <p className="text_circular_small_blue_categories">
                      {categories.title}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="text_circular_small_blue_categories_bold">
                + Adicionar outra categoria
              </p>
            </div>
            <div>Cards</div>
          </div>
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
          <div className="cornerContainer">
            <div className="ellipseButton">
              <div className="ellipseContainer">
                <img src={elipse} alt="Ellipse" />
                <div className="plusSignalContainer">
                  <img
                    className="ellipseCircle"
                    src={plusSignal}
                    alt="Plus Signal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <AddCategoriesModal/>
      </div>
    </>
  );
};

export default DashBoard;
