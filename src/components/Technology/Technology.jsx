import { Tooltip } from "react-tooltip";
import PropTypes from "prop-types";
import "./Technology.css";

export const Technology = ({ image, name }) => {
  return (
    <li className="technology" data-tip data-tooltip-id={name}>
      <img src={image} alt={name} />
      <Tooltip id={name} place="bottom">
        {name}
      </Tooltip>
    </li>
  );
};

Technology.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
