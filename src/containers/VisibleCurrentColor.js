import { connect } from 'react-redux';
import { changeColor } from '../actions/index';
import CurrentColorView, { anotherColorHandler }
  from '../components/CurrentColorView.jsx';

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

const VisibleCurrentColorView =
connect(mapStateToProps, mapDispatchToProps, mergeProps)(CurrentColorView);

export default VisibleCurrentColorView;
