import { connect } from 'react-redux';
import TodoList from '../../components/TodoList/TodoList'
import React from 'react';
import { fetchData } from '../../actions';

class TodoContainer extends React.Component {

  componentDidMount(){
    this.props.fetchData(this.props.page, this.props.currentViewOption);
  }

  render(){
    return (
      <TodoList 
        todos={this.props.todos} 
        numPages={this.props.numPages} 
        currentViewOption={this.props.currentViewOption}
        currentPage={this.props.page}
        fetchData={this.props.fetchData}/>
    )
  }
}

const mapStateToProps = state => {
  const { todoData } = state
  return todoData
}

const mapDispatchToProps = dispatch => ({
  fetchData: (page, currentViewOption) => dispatch(fetchData(page, currentViewOption))
})

const mergeProps = (
  stateProps,
  { fetchData, ...dispatchProps }
) => ({
  ...stateProps,
  ...dispatchProps,
  fetchData: (page, currentViewOption) => {
    fetchData(page, currentViewOption);
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TodoContainer)
