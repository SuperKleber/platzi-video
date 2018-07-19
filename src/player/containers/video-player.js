import React, {Component} from "react"
import VideoPlayerLayout from "../componentes/video-player-layout.js"
import Video from "../componentes/video"
import Title from "../componentes/title.js"
import PlayPause from "../componentes/play-pause"
import Timer from "../componentes/timer"
import Controls from "../componentes/video-player-controls"
import ProgressBar from "../componentes/progress-bar"
import Spinner from "../componentes/spinner"
import Volumen from "../componentes/volumen"
import FullScreen from "../componentes/full-screen"
class VideoPlayer extends Component
{
  state=
  {
    pause:true,
    duration: 0,
    currentTime:0,
    loading:false,
    volumen:1,
    mute:false,
  }
  togglePlay= event =>
  {
    this.setState(
      {
        pause: !this.state.pause
      }
    )
  }
  componentDidMount()
  {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  leftPad (number)
  {
    const pad= "00";
    return pad.substring(0,pad.length- number.length) + number
  }
  formattedTime (secs)
  {
    // return minutos: segundos
    let minutos = parseInt(secs/60, 10 )
    let segundos = parseInt(secs%60, 10)
    return `${minutos}:${this.leftPad(segundos.toString())}`
  }
  handleLoadedMetaData= event =>
  {
    this.video = event.target;
    this.setState({
      duration: this.video.duration,
    })
  }
  handleTimeUpdate=event=>
  {
    // console.log(this.video.currentTime)
    this.setState(
      {
        currentTime: this.video.currentTime,
      }
    )
  }
  handleProgressChange=event=>
  {
    // console.log(event.target.value)
    this.video.currentTime = event.target.value
  }
  handleSeeking =event =>
  {
    this.setState(
      {
        loading:true,
      }
    )
  }
  handleSeeked=event=>
  {
    this.setState(
      {
        loading:false,
      }
    )
  }
  handleVolumenChange = event =>
  {
      this.video.volume = event.target.value;
      this.setState(
        {
          volumen: event.target.value,
        }
      )
  }
  handleClickVolume = event =>
  {
    // console.log("oped")

        if(this.state.mute)
        {
          this.video.volume=1;
          this.setState(
            {
              mute: false,
            }
          )
        }
        else
        {

          this.video.volume=0;
          this.setState(
            {
              mute: true,
            }
          )
        }


  }
  clickVolumenBar(v)
  {
   if(this.state.mute)
   {
     return 0
   }
   else
   {
      return v
   }


  }
  handleFullScreenClick =event =>
  {
    if (!document.webkitIsFullScreen)
    {
      this.player.webkitRequestFullscreen()
    }
    else
    {
      document.webkitExitFullscreen()
    }

  }
  setRef = element =>
  {
    this.player = element
  }
  render ()
  {
    return(

      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title
          title={this.props.title}
       />
     <Controls>
       <PlayPause
         pause={this.state.pause}
         handleClick={this.togglePlay}
         />
       <Timer
         duration={this.formattedTime(this.state.duration)}
         currentTime={this.formattedTime(this.state.currentTime)}
        />
      <ProgressBar
        duration={this.state.duration}
        value={this.state.currentTime}
        handleProgressChange={this.handleProgressChange}
      />
     <Volumen
       handleVolumenChange={this.handleVolumenChange}
       volumen={this.clickVolumenBar(this.state.volumen)}
       handleClickVolume={this.handleClickVolume}
       ></Volumen>
     <FullScreen
       handleFullScreenClick={this.handleFullScreenClick}
       ></FullScreen>
     </Controls>
     <Spinner
       active={this.state.loading}
     />
     <Video
       autoPlay={this.state.autoplay}
       pause={this.state.pause}
       handleLoadedMetaData={this.handleLoadedMetaData}
       handleTimeUpdate={this.handleTimeUpdate}
       handleSeeking={this.handleSeeking}
       handleSeeked={this.handleSeeked}
       src= {this.props.src}
       />
   </VideoPlayerLayout>
    )
  }

}
export default VideoPlayer
