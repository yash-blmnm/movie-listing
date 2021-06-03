import axios from "axios";

const LIST_MOVIES = "LIST_MOVIES";
const SEARCH_MOVIES = "SEARCH_MOVIES";
const MOCK_DATA_URL = 'https://afternoon-castle-41801.herokuapp.com'
const initialState = {
  content: {
    id: 1,
    page: {} 
  }
}



export const content = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_MOVIES: {
      return {
        ...state, ...payload,
      };
    }
    case SEARCH_MOVIES: {
      return {
        ...state, ...payload,
      };
    }
    default:
      return state;
  }
};


export const listMovies = (pageNum) => {
  // return (dispatch) => {
  //   dispatch({
  //       type: LIST_MOVIES,
  //       payload: list
  //   })
  // }
  return (dispatch) => {
    return axios.get(`${MOCK_DATA_URL}/content/${pageNum}`).then((response)=> {
        dispatch({
            type: LIST_MOVIES,
            payload: { 
              currentList: response.data.page["content-items"], 
              totalItems: response.data.page["total-content-items"] 
            }
        })
    });
  }
}

function filterSearchList(data, text){
  let filteredData = []
  for(var item of data){
    const pageFilterdata = (item.page['content-items'].content).filter(value => {
      const pattern = new RegExp(text, 'i');
      return pattern.test(value.name);
    });
    filteredData= [...filteredData, ...pageFilterdata];
  }
  return {currentList: {content: filteredData}, totalItems: filteredData.length};
}

export const searchMovies = (text) => {
  return (dispatch) => {
    return axios.get(`${MOCK_DATA_URL}/content`).then((response)=> {
      dispatch({
          type: SEARCH_MOVIES,
          payload: filterSearchList(response.data, text)
      })
    });
  }
}