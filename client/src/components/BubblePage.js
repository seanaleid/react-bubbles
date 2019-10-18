// general imports
import React, { useState, useEffect } from "react"
import axiosWithAuth from '../utils/axiosWithAuth'

// components
import Bubbles from "./Bubbles"
import ColorList from "./ColorList"


// BubblePage
function BubblePage(props) {
  const [colorList, setColorList] = useState([]);
  
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    console.log(`useEffect Triggered`)
    axiosWithAuth()
      .get(`/api/colors`)
      .then(res => {
        console.log(res.data)
        let colorsFromGet = res.data
        setColorList(colorsFromGet)
      })
      .catch(err => {
        console.log(`There was an error fetching your colors. Please go back to BubblePage.js and fix it.`, err.response
        )})
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

// export 
export default BubblePage;
