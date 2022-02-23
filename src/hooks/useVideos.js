import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  // renamed 'onTermSubmit' to just 'search'
  useEffect(() => {
    // setting a default value
    search(defaultSearchTerm); // this is the INPUT
  }, [defaultSearchTerm]); // run me once; similar to componentDidMount

  const search = async (term) => {
    console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    //console.log(response.data.items);
    setVideos(response.data.items);
  };

  // same convention as useState hook
  return [videos, search];
  // SAME AS
  // return an object with the same properties
  //return {videos, search};
};

export default useVideos;
