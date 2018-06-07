import { connect } from 'react-redux';
import { changePaletteVisibility } from '../actions';
import ColorPalette from '../components/ColorPalette.jsx';


const mapStateToProps = state => ({
  visibility: state.paletteVisibility,
});

const mapDispatchToProps = dispatch => ({
  onHideClick: () => {
    dispatch(changePaletteVisibility());
  },
});

const PaletteControl =
connect(mapStateToProps, mapDispatchToProps)(ColorPalette);

export default PaletteControl;
