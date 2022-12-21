import { Box, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import SideMenu from '../common/SideMenu'
import Navbar from '../Header/Navbar'

const initialState = {
    loading : true,
    error : '',
    post : {}
}

const reducer = (state, action) => {
    switch(action.type){
        case "FETCH_SUCCESS" :
            return {
                loading : false,
                post : action.payload,
                error : ''
            }
        
        case "FETCH_ERROR" :
            return {
                loading : false,
                post : {},
                error : 'Something went wrong'
            }

        default : 
            return state;
    }
}

const DataFetchingTwo = () => {

    const [ state, dispatch ] = useReducer(reducer, initialState);
    
    const getPostData = async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            dispatch({ type : 'FETCH_SUCCESS', payload : res.data });    
        } catch (error) {
            dispatch({ type : 'FETCH_ERROR'})   
        }
    };

    useEffect(() => {
        getPostData();
    }, []);

  return (
    <>
     <Navbar />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <Box sx={{ width: "75%" }}>
        <Typography variant='h5' sx={{ marginTop: "2%", marginLeft: "5%" }}>{state.loading ? 'Loading' : state.post.title}</Typography>
        {state.error ? state.error : null}
        </Box>
      </Box>
    </>
  )
}

export default DataFetchingTwo