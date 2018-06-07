import { connect } from 'react-redux';
import { changeColor } from '../actions';
import CurrentColor, { anotherColorHandler }
  from '../components/CurrentColor.jsx';

const mapStateToProps = state => ({
  color: state.currentColor,
});

const mapDispatchToProps = dispatch => ({
  onColorChange: () => {
    dispatch(changeColor(anotherColorHandler.value));
  },
});

const mergeProps = (propsFromState, propsFromDispatch) => ({
  color: propsFromState.color,
  onColorChange: propsFromDispatch.onColorChange,
  onAnotherColorClick: () => {
    anotherColorHandler.click();
  },
});

const CurrentColorControl =
connect(mapStateToProps, mapDispatchToProps, mergeProps)(CurrentColor);

export default CurrentColorControl;
