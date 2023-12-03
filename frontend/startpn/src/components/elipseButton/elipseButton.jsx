import { Link } from "react-router-dom";
import elipse from "../../images/svg/elipse.svg";
import plusSignal from "../../images/svg/mais.svg";

const ElipseButon = () => {

    return(
        <>
        <div>
            <Link>
              <div className="ellipseButton">
                <img  src={elipse} />
                <img className="ellipseCircle" src={plusSignal}></img>
              </div>
            </Link>
          </div>
        </>
    )
}


export default ElipseButon