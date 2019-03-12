import axios from 'axios'

export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN'
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'

const TODOS_PATH = 'https://jsonplaceholder.typicode.com/todos'

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN
})

export const fetchDataSuccess = (data, page, currentViewOption) => ({
  type: FETCH_DATA_SUCCESS,
  data,
  page,
  currentViewOption
})

export const fetchDataError = error => ({
  type: FETCH_DATA_ERROR,
  error
})

export const fetchData = (page, currentViewOption) => dispatch => {
  dispatch(fetchDataBegin())

  return axios.get(TODOS_PATH)
  .then(response => {
    dispatch(fetchDataSuccess(response.data, page, currentViewOption));
  })
  .catch(error => {
    dispatch(fetchDataError(error))
  });
}
