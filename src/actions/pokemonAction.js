import {
    IMAGE_FETCH_REQUEST,
    IMAGE_FETCH_SUCCESS,
    IMAGE_FETCH_FAIL,
    IMAGE_FETCH_COMPLETE
  } from './actionTypes';
  
  export const doImageFetchRequest = payload => ({
    type: IMAGE_FETCH_REQUEST,
    payload,
  });
    
  export const doImageFetchSuccess = payload => ({
    type: IMAGE_FETCH_SUCCESS,
    payload
  });
  
  export const doImageFetchFail = payload => ({
    type: IMAGE_FETCH_FAIL,
    payload
  });

  