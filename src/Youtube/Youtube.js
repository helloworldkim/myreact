import React, { Component } from 'react';
import YoutubeApi from './YoutubeApi';
import YoutubeApiService from './YoutubeApiService'; //Spring Boot Backend용 2020-11-16

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import SaveList from './SaveList';



class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],  //검색된 결과 받아올 배열
      selectedVideo: null, //선택한 비디오 영상
      favoriteVideos: [] //즐겨찾기 리스트
    }
  }
  componentDidMount() {
    console.log("Youtube componentDidMount");
    this.onloadFavoriteMovies();
  }
  onloadFavoriteMovies = async () => {
    await YoutubeApiService.fetchMovies()
      .then(res => {
        let temps = res.data;
        var i = 0;
        var fvl = [];
        //구조를 youtube에서 받아온 정보의 구조와 동일하게 만듬
        while (i < temps.length) {
          fvl.push({
            idx: temps[i].id,
            id: { kind: 'youtube#video', videoId: temps[i].video_id_videoid },
            snippet: { title: temps[i].video_snippet_title, description: temps[i].video_snippet_description }
          })
          i += 1;
        }
        // console.log(fvl);
        this.setState({ favoriteVideos: fvl });
      })
      .catch(err => {
        console.log("YoutubeApiService.fetchMovies() error:", err);
        alert('즐겨찾기 가져오기에 실패했습니다');
      })


  }
  handleVideoSave = (video) => {
    // console.log("저장될 video객체!",video);
    const temp = {
      video_id_videoid: video.id.videoId,
      video_snippet_title: video.snippet.title,
      video_snippet_description: video.snippet.description
    }
    // console.log("바꾼 video객체",temp);
    YoutubeApiService.addMovice(temp)
      .then(res => {
        alert('저장성공!', res.status); //200이면 성공!
        this.onloadFavoriteMovies();
      })
      .catch(err => {
        console.log("YoutubeApiService.addMovie()에러");
        alert('즐겨찾기 저장오류!');
      })
  }
  handleFavoriteDelete = async (idx) => {
    alert('삭제되었습니다!');
    await YoutubeApiService.removeMovie(idx)
      .then(res => {
        this.onloadFavoriteMovies();
      })
      .catch(error => {
        console.log("YoutubeApiService.removeMovie()에러");
        alert('즐겨찾기 삭제오류!');
      })
  }
  //videoItem에서 전달된 video객체 selectedVideo로 할당함
  //selectedVideo는 VideoDetail로 전달
  handleVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    })

    console.log("selectedVideo", this.state.selectedVideo);

  }
  handleFavoriteSelect = (video) => {
    // console.log("받아온video!",video);
    this.setState({ selectedVideo: video });

  }
  handleSubmit = async (term) => {
    const res = await YoutubeApi.get('/search', { //  search를 baseURL에 넣어서 해도가능
      params: { q: term } //검색단어를 q값으로 줌
    });
    this.setState({
      videos: res.data.items
    })
    console.log("검색된 videos결과!", this.state.videos);
  }
  render() {
    console.info('app render');


    return (
      <>
        <div className="App container">
          <div className='row'>
            <div className='col'>
              {/* 검색창 */}
              <SearchBar handleFormSubmit={this.handleSubmit}></SearchBar>
              <div className='row pt-3'>
                <div className="col-8">
                  {/* 유튜브 플레이어 */}
                  <VideoDetail video={this.state.selectedVideo} />
                  {/* 저장리스트 */}
                  <SaveList
                    handleFavoriteSelect={this.handleFavoriteSelect}
                    videos={this.state.favoriteVideos}
                    handleFavoriteDelete={this.handleFavoriteDelete}
                  />
                </div>
                <div className="col-4" >
                  {/* 검색결과 */}
                  <VideoList handleVideoSelect={this.handleVideoSelect} handleVideoSave={this.handleVideoSave} videos={this.state.videos} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }
}

export default Youtube;