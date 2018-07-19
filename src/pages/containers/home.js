import React, {Component} from "react";
import HomeLayout from "../componentes/home-layout"
import Categories from "../../categories/componentes/categories"
import Related from "../componentes/related"
import ModalContainer from "../../widgets/containers/modal.js"
import Modal from "../../widgets/componentes/modal"
import HandleError from "../../error/containers/handle-error.js"
import VideoPlayer from "../../player/containers/video-player.js"
class Home extends Component
{
  state=
  {
    modalVisible: false,
  };
  handleOpenModal = (media) =>
  {
    this.setState(
      {
        modalVisible:true,
        media
      }
    )
  }
  handleCloseModal= (event) =>
  {
    this.setState({
      modalVisible: false,
    })
  }

  render()
  {

    return(
      <HandleError>
        <HomeLayout>
        <Related />

        <Categories
          categories={this.props.data.categories}
          handleOpenModal={this.handleOpenModal}
          />
        {
          this.state.modalVisible &&
          <ModalContainer>
            <Modal
              handleClick={this.handleCloseModal}
              >
              <VideoPlayer
                autoplay={true}
                title={this.state.media.title}
                src={this.state.media.src}
               />
            </Modal>
          </ModalContainer>
        }
      </HomeLayout>

      </HandleError>
    )
  }
}
 export default Home
