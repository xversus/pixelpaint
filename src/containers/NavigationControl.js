import { connect } from 'react-redux';
import { clearCanvas, loadPicture } from '../actions';
import Navigation from '../components/Navigation.jsx';

const mapStateToProps = state => ({
  cells: state.cells,
});

const mapDispatchToProps = dispatch => ({
  onClearClick: () => {
    dispatch(clearCanvas());
  },
  onLoadClick: () => {
    dispatch(loadPicture());
  },
});

const mergeProps = (propsFromState, propsFromDispatch) => ({
  ...propsFromDispatch,
  onSaveClick: () => {
    localStorage
      .setItem('canvas', JSON.stringify(propsFromState.cells));
  },
});

const NavigationControl =
connect(mapStateToProps, mapDispatchToProps, mergeProps)(Navigation);

export default NavigationControl;
