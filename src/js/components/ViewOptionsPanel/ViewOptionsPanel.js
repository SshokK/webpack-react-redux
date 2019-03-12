import React from 'react';
import styles from '../ViewOptionsPanel/ViewOptionsPanel.scss'

const DEFAULT_VIEW_OPTIONS = [
  { key: 10, name: "10" },
  { key: 20, name: "20" },
  { key: 50, name: "50" },
  { key: 100, name: "100" }
];

const DEFAULT_PAGE = 1;

class ViewOptionsPanel extends React.Component {

  handleViewOptionChange(page, option, handler) {
    handler(page, option);
  }

  render(){

    const { 
      onViewOptionChange,
      currentViewOption
    } = this.props

    return (
      <div className={styles.view_options_container}>
          {DEFAULT_VIEW_OPTIONS.map(option => {
            return (
              <div 
                key={option.key} 
                onClick={this.handleViewOptionChange.bind(this, DEFAULT_PAGE, option, onViewOptionChange)} 
                className={option.key === currentViewOption.key ? styles.view_current_option : styles.view_option}>
                {option.name}
              </div>
            )
          })}
      </div>
    )
  }
}

export default ViewOptionsPanel