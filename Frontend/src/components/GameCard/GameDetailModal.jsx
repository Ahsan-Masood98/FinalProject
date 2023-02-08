import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row,
} from "reactstrap";
import { useSelector } from "react-redux";
import {
  selectGameDetail,
  selectGameScreenshots,
} from "../../redux/slices/detailSlice";
//Images
import playstation from "../../img/playstation.svg";
import steam from "../../img/steam.svg";
import xbox from "../../img/xbox.svg";
import nintendo from "../../img/nintendo.svg";
import apple from "../../img/apple.svg";
import gamepad from "../../img/gamepad.svg";
//Star Images
import starEmpty from "../../img/star-empty.png";
import starFull from "../../img/star-full.png";
//utils
import { smallImage } from "../../util";
//CSS
import "./gameDetailModal.css";
const GameDetailModal = () => {
  const gameDetail = useSelector(selectGameDetail);
  const gameScreenshot = useSelector(selectGameScreenshots);
  const isLoading = (state) => state.detail.isLoading;
  const [modal, setModal] = useState(false);
  //   console.log(gameDetail);
  //   console.log(gameScreenshot);
  const toggle = () => setModal(!modal);
  //Get Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(gameDetail.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };
  //Get Platform Images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox one":
        return xbox;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        View Detail
      </Button>
      {isLoading && (
        <Modal isOpen={modal} toggle={toggle} fullscreen>
          <ModalHeader toggle={toggle}>{gameDetail.name}</ModalHeader>
          <ModalBody>
            <div className="cardShadow">
              <div className="detail" layoutId={gameDetail.id}>
                <div className="stats">
                  <div className="rating">
                    <h3 layoutId={`title ${gameDetail.id}`}>
                      {gameDetail.name}
                    </h3>
                    <p>Rating: {gameDetail.rating}</p>
                    {getStars()}
                  </div>
                  <div className="info">
                    <h3>Platforms</h3>
                    <div className="platforms">
                      {gameDetail?.platforms?.map((data) => (
                        <img
                          layoutId={`title ${gameDetail.id}`}
                          alt={data.platform.name}
                          key={data.platform.id}
                          src={getPlatform(data.platform.name)}
                        ></img>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="media">
                  <img
                    layoutId={`image${gameDetail.id}`}
                    src={smallImage(gameDetail.background_image, 1280)}
                    alt={gameDetail.background_image}
                  />
                </div>
                <div className="description">
                  <p>{gameDetail.description_raw}</p>
                </div>
                <Row className="gallery">
                  {gameScreenshot.map((screen) => (
                    <Col sm="6" md="4">
                      <img
                        src={smallImage(screen.image, 1280)}
                        key={screen.id}
                        alt={screen.image}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </div>
  );
};

export default GameDetailModal;
