import PropTypes from 'prop-types';
import { ButtonEl } from 'components/Button/button.style';

const Button = ({ children, onClick }) => (

  <ButtonEl type="button" onClick={onClick}>
    {children}
  </ButtonEl>
    );

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
