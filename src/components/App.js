import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
// import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("cats"); // returns the array
  console.log(videos);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]); // any time we run new search
  //setSelectedVideo(response.data.items[0]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              //line below is exactly the same! onVideoSelect={(video) => setSelectedVideo(video)}
              onVideoSelect={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

// old way
// class App extends React.Component {
//   state = { videos: [], selectedVideo: null };

//   componentDidMount() {
//     this.onTermSubmit('cats');
//   }

//   onTermSubmit = async (term) => {
//     console.log(term);
//     const response = await youtube.get("/search", {
//       params: {
//         q: term,
//       },
//     });
//     //console.log(response.data.items);
//     this.setState({
//       videos: response.data.items,
//       selectedVideo: response.data.items[0],
//     });
//   };

//   onVideoSelect = (video) => {
//     //console.log("from the app!", video);
//     this.setState({ selectedVideo: video });
//   };

//   render() {
//     return (
//       <div className="ui container">
//         <SearchBar onFormSubmit={this.onTermSubmit} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList
//                 videos={this.state.videos}
//                 onVideoSelect={this.onVideoSelect}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
