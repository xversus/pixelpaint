import { connect } from 'react-redux';
import { changeColor } from '../actions';
import PaletteElement from '../components/PaletteElement.jsx';

const mapDispatchToProps = dispatch => ({
  onElemClick: (color) => {
    dispatch(changeColor(color));
  },
});

const PaletteElementControl = connect(null, mapDispatchToProps)(PaletteElement);

export default PaletteElementControl;
