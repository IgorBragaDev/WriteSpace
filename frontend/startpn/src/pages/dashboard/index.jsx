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
import vector2 from "../../images/svg/vector2.svg";
import plusSignal from "../../images/svg/mais.svg";
import pen from "../../images/svg/pen.svg";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../context/categoriesContext";
import AddCategoriesModal from "../../components/AddCategoriesModal";
import { SessionsContext } from "../../context/sessionsContext";
import "./dashboard.css";
import EditCategoriesModal from "../../components/EditCategoriesModal";
const DashBoard = () => {
  const {
    categories,
    isModalOpen,
    openModal,
    cards,
    handleCategoryClick,
    activeCategoryId,
    isEditModalOpen,
    setEditModalOpen,
    openEditModal,
    closeEditModal,
  } = useContext(CategoriesContext);

  const { sessionsLogout } = useContext(SessionsContext);

  const [openSideMenu, setOpenSideMenu] = useState(false);

  const toggleMenu = () => {
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
        <div className="responsiveContainerDashboard">
          <div className="DashContainer">
            <h1 className="text_circular_color_blue_bold playbookTitle">
              Playbooks
            </h1>
            <div className="headerFromWebVersion">
              <h1 className="text_circular_color_blue_title">Playbooks</h1>
              <div className="headerFromWebVersionDiv">
                <img src={userIcon} alt="" />
                <p className="text_circular_color_black_card_content">
                  Igor Braga
                </p>
                <img src={vector2} alt="" />
              </div>
            </div>
            <div className="responsiveContainerCategoriesCards">
              <div className="categoriesBox">
                <h1 className="text_circular_label categoriesBoxTitle ">
                  Categorias
                </h1>
                <ul>
                  {categories.map((categories) => (
                    <li
                      key={categories.id}
                      className={
                        categories.id === activeCategoryId
                          ? "activeCategory"
                          : ""
                      }
                    >
                      <p
                        className="text_circular_small_blue_categories"
                        onClick={() => handleCategoryClick(categories.id)}
                      >
                        {categories.title}
                      </p>
                      <img onClick={() => openEditModal()} src={pen} alt="" />
                    </li>
                  ))}
                  {isEditModalOpen ? (
                    <EditCategoriesModal closeModal={closeEditModal} />
                  ) : null}
                </ul>
                <p
                  onClick={openModal}
                  className="text_circular_small_blue_categories_bold"
                >
                  + Adicionar outra categoria
                </p>
              </div>

              <ul className="cardsUL">
                {cards.map((card) => (
                  <li key={card.id} className="cardContainer">
                    <div className="cardBoxTitle">
                      <h1 className="text_circular_color_black_big_card">
                        {card.name}
                      </h1>
                      <button>
                        <Link
                          className="text_circular_color_white_title_card"
                          to={`/editcard/${card.id}`}
                        >
                          Editar
                        </Link>
                      </button>
                    </div>
                    <div
                      className="cardContent"
                      dangerouslySetInnerHTML={{ __html: card.text }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`sideMenuBar ${openSideMenu ? "open" : ""}`}>
            <div className="sideMenuBarCloseButtonDiv ">
              <Logo width={"153px"} heigth={"39px"} />
              <button
                className="text_circular_small_blue_categories_bold"
                onClick={() => setOpenSideMenu(!openSideMenu)}
              >
                x
              </button>
            </div>
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
            <h3
              className="sideMenuItens text_circular_side_menu_color_grey"
              onClick={() => sessionsLogout()}
            >
              <img src={exitIcon} alt="" />
              Sair
            </h3>
          </div>
          <div className="cornerContainer">
            <div className="ellipseButton">
              <div className="ellipseContainer">
                <Link to="/createcard">
                  <img src={elipse} alt="Ellipse" />
                  <div className="plusSignalContainer">
                    <img
                      className="ellipseCircle"
                      src={plusSignal}
                      alt="Plus Signal"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen ? <AddCategoriesModal /> : null}
      </div>
    </>
  );
};

export default DashBoard;
