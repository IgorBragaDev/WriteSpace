import Logo from "../../components/logo";
import dropMenu from "../../images/png/Frame.png";
import userIcon from "../../images/png/Bitmap.png";
import "./dashboard.css";
const DashBoard = () => {
  return (
    <>
      <header className="containerDashboard">
        <div className="headerDivDashBoard">
          <button className="dropdownButton">
            <img src={dropMenu} alt="" />
          </button>
          <Logo />
          <img src={userIcon} alt="" />
        </div>
      </header>
      <h1 className="text_circular_color_blue_bold">Playbooks</h1>
    </>
  );
};

export default DashBoard; 
