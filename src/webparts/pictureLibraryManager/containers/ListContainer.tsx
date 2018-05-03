import { connect } from 'react-redux';
import { IState } from '../Reducers';
import ListComponent from '../components/ListComponent';

const mapStateToProps = (state : IState) => ({
    results : state.files,
    enabled : state.configuration.sourceId && state.configuration.libraryName
});

const mapDispatchToProps = (dispatch)  => ({
});

export default connect(mapStateToProps, mapDispatchToProps) (ListComponent)
