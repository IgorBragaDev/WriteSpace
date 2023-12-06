import { Link } from "react-router-dom";

const HeaderWebVersion = ({
  whiteVector,
  userIcon,
  vector2,
  functionFromHeader,
  headerFromWebVersionTittle,
  headerFromWebVersionDisplay,
  headerFromWebVersionJustifyContent,
  headerFromWebVersionWidth,
  headerFromWebVersionMargim,
  headerFromWebVersionMarginLeft,
  headerFromWebVersionMarginBotton,
  headerFromWebVersionMarginTop,
  headerFromWebVersionPaddingTop,
  headerFromWebVersionPadding,
  headerFromWebVersionPaddingBotton,
  headerFromWebVersionDivBorder,
  headerFromWebVersionDivWidth,
  headerFromWebVersionDivDisplay,
  headerFromWebVersionDivAlignItens,
  headerFromWebVersionDivJustifyContents,
  headerFromWebVersionDivPadding,
  headerFromWebVersionDivBorderRadius,
  headerFromWebVersionDivBackGroundColor,
  containerNavigationDisplay,
  containerNavigationAlignItens,
  containerNavigationGap,
  navigationCircleBackground,
  navigationCirclePadding,
  navigationCircleBorderRadius,
  setDisplayNoneForH1Display,
}) => {
  const headerFromWebVersion = {
    display: headerFromWebVersionDisplay,
    justifyContent: headerFromWebVersionJustifyContent,
    width: headerFromWebVersionWidth,
    margin: headerFromWebVersionMargim,
    marginBottom: headerFromWebVersionMarginBotton,
    marginTop: headerFromWebVersionMarginTop,
    paddingTop: headerFromWebVersionPaddingTop,
    paddingBottom: headerFromWebVersionPaddingBotton,
    padding : headerFromWebVersionPadding,
    marginLeft: headerFromWebVersionMarginLeft
  };

  const headerFromWebVersionDiv = {
    border: headerFromWebVersionDivBorder,
    width: headerFromWebVersionDivWidth,
    display: headerFromWebVersionDivDisplay,
    alignItems: headerFromWebVersionDivAlignItens,
    justifyContent: headerFromWebVersionDivJustifyContents,
    padding: headerFromWebVersionDivPadding,
    borderRadius: headerFromWebVersionDivBorderRadius,
    backgroundColor: headerFromWebVersionDivBackGroundColor,
  };

  const containerNavigation = {
    display: containerNavigationDisplay,
    alignItems: containerNavigationAlignItens,
    gap: containerNavigationGap,
  };
  const navigationCircle = {
    background: navigationCircleBackground,
    padding: navigationCirclePadding,
    borderRadius: navigationCircleBorderRadius,
  };
  const setDisplayNoneForH1 = {
    display: setDisplayNoneForH1Display,
  };
  return (
    <>
      <div style={headerFromWebVersion}>
        <h1
          className="text_circular_color_blue_title"
          style={setDisplayNoneForH1}
        >
          {headerFromWebVersionTittle}
        </h1>
        <div style={containerNavigation}>
          <Link to="/dashboard">
            <img style={navigationCircle} src={whiteVector} alt="" />
          </Link>

          <h1 className="text_circular_color_blue_title">
            {functionFromHeader}
          </h1>
        </div>
        <div style={headerFromWebVersionDiv}>
          <img src={userIcon} alt="" />
          <p className="text_circular_color_black_card_content">Igor Braga</p>
          <img src={vector2} alt="" />
        </div>
      </div>
    </>
  );
};

export default HeaderWebVersion;
