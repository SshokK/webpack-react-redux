import React from 'react';
import styles from '../NavigationPanel/NavigationPanel.scss'

class NavigationPanel extends React.Component {
  
  handlePageChange(pageName, handler) {
    handler(pageName)
  }

  render(){

    const { numPages, onPageChange, page } = this.props;
    const pagesArray = [...Array(numPages)]

    return (
      <div className={styles.nav_panel_container}>
      {numPages && pagesArray.map((x, i) => {
        const currentPageName = i + 1
        const fullLength = pagesArray.length

        if (fullLength > 9) {
          if ((page > 5 && currentPageName === 3) || (page < fullLength - 4 && currentPageName === fullLength - 2)) {
            return <div key={i} className={styles.paginationContainer_item}>{'...'}</div>
          }
          if ((page < 5 && (currentPageName > 6 && currentPageName < fullLength - 2)) ||
              (page > 4 && (currentPageName > page + 1 && currentPageName < fullLength - 2)) ||
              (page < fullLength - 3 && (currentPageName > 3 && currentPageName < page - 1)) ||
              (page > fullLength - 4 && (currentPageName > 3 && currentPageName < fullLength - 5))) {
          return null
          }
        }
        const className = `${styles.page_button_active} + ${(page === currentPageName) ? styles.page_button_disabled : '' }`;
        return <div key={i} onClick={this.handlePageChange.bind(this, currentPageName, onPageChange)} className={className}>{currentPageName}</div>
        })}
      </div>
    )
  }
}

export default NavigationPanel