import { connect } from 'react-redux';
import { changeColor } from '../actions/index';
import PaletteElement from '../components/PaletteElement.jsx';

const mapDispatchToProps = dispatch => ({
  onElemClick: (color) => {
    dispatch(changeColor(color));
  },
});

const VisiblePaletteElement = connect(null, mapDispatchToProps)(PaletteElement);

export default VisiblePaletteElement;
