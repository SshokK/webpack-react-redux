import React from 'react';
import NavigationPanel from '../../components/NavigationPanel/NavigationPanel'
import ViewOptionsPanel from '../../components/ViewOptionsPanel/ViewOptionsPanel'
import styles from '../TodoList/TodoList.scss'

class TodoList extends React.Component {

  countPages(todos, currentViewOption){
    return Math.ceil(todos.length / currentViewOption.key);
  }

  onPageChange(page, option, handler){
    handler(page, option);
  }

  onViewOptionChange(page, option, handler){
    handler(page, option);
  }

  render(){
    const {
      todos,
      currentViewOption,
      currentPage,
      fetchData
    } = this.props  

    const finishPos = currentViewOption.key * currentPage;
    const startPos = finishPos - currentViewOption.key;
  
    return (
      <div className={styles.todo_container}>
        <div className={styles.todo_header}>Todo List</div>
        <ViewOptionsPanel
          currentViewOption={currentViewOption}
          page={currentPage}
          onViewOptionChange={(page, option) => this.onViewOptionChange(page, option, fetchData)}/>
        {todos ? todos.map((todo, todoNum) => {
          if (todoNum >= startPos && todoNum < finishPos) {
            return (
              <div key={todo.id} className={todo.completed ? styles.todo_item_completed : styles.todo_item_incompleted}>
                <div className={todo.completed ? styles.todo_id_column_completed : styles.todo_id_column_incompleted}>
                  {todo.id}
                </div>    
                <div className={styles.todo_title_column}>
                  {todo.title}
                </div>
              </div>   
            )    
          }
        }) : 'No todos to show'}
        <div className={styles.todo_nav_container}>
          <NavigationPanel 
            numPages={this.countPages(todos, currentViewOption)} 
            page={currentPage} 
            currentViewOption={currentViewOption}
            onPageChange={page => this.onPageChange(page, currentViewOption, fetchData)}/>
        </div>
      </div>
    )
  }
}

export default TodoList