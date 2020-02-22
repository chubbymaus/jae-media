import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LogoImage from "../../images/JaeMediaWhite.png"
import Photo from "../../images/JaeMedia.jpg"

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Text = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin-top: -75px;
`
const Image = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Jumbotron = () => (
  <section className="hero is-black is-fullheight is-bold">
    <div className="hero-body">
      <Container className="columns">
        <Text className="column has-text-centered">
          <img src={LogoImage} id="logo-image" />
          <h1 className="title has-text-white">Hi! My Name Is James!</h1>
          <div>
            <a
              className="button is-outlined is-light modal-button"
              id="first-button"
            >
              Biz Inquiries
            </a>
            <a
              className="button is-outlined is-white"
              href="https://jaemedia.pixieset.com/"
              target="_blank"
            >
              Gallery
            </a>
          </div>
          <div id="icons">
            <FontAwesomeIcon icon={["fab", "instagram"]} className="icon-fa" />
            <FontAwesomeIcon icon={["fab", "youtube"]} className="icon-fa" />
            <FontAwesomeIcon icon={["fab", "vimeo-v"]} className="icon-fa" />
          </div>
        </Text>
        <Image className="column">
          <img src={Photo} id="photo-column" />
        </Image>
        <div className="modal">
          <div className="modal-background"></div>
          <div className="modal-content"></div>
          <button className="modal-close is-large" aria-label="close"></button>
        </div>
      </Container>
    </div>
  </section>
)

export default Jumbotron
