import { connect } from "react-redux";
import CurrentColorView from "../components/CurrentColorView";

const mapStateToProps = state => {
    return {
        color: state.currentColor
    }
};

const VisibleCurrentColorView = connect(mapStateToProps)(CurrentColorView);

export default VisibleCurrentColorView;