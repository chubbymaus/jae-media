import React, { Component } from "react"
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

class Jumbotron extends Component {
  state = {
    modalOpen: false,
  }

  menuToggleClickHandler = () => {
    this.setState(prevState => {
      return { modalOpen: !prevState.modalOpen }
    })
  }
  render() {
    return (
      <section className="hero is-black is-fullheight is-bold">
        <div className="hero-body">
          <Container className="columns">
            <Text className="column has-text-centered">
              <img src={LogoImage} id="logo-image" />
              <h1 className="title has-text-white">Hi! My Name Is James!</h1>
              <div>
                <button
                  className="button is-outlined is-light modal-button"
                  id="first-button"
                  onClick={this.menuToggleClickHandler}
                >
                  Biz Inquiries
                </button>
                <a
                  className="button is-outlined is-white"
                  href="https://jaemedia.pixieset.com/"
                  target="_blank"
                >
                  Gallery
                </a>
              </div>
              <div id="icons">
                <a href="https://www.instagram.com/jaemedia/" target="_blank">
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    className="icon-fa has-text-white"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC385ABA9eFoP82z4nWysqHg"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={["fab", "youtube"]}
                    className="icon-fa has-text-white"
                  />
                </a>
                <a href="https://vimeo.com/jamesyu1" target="_blank">
                  <FontAwesomeIcon
                    icon={["fab", "vimeo-v"]}
                    className="icon-fa has-text-white"
                  />
                </a>
              </div>
            </Text>
            <Image className="column">
              <img src={Photo} id="photo-column" />
            </Image>
          </Container>
          <div className={this.state.modalOpen ? `modal is-active` : `modal`}>
            <div className="modal-background"></div>
            <div className="modal-content">
              <div className="card">
                <div className="card-content">
                  <h1 className="title has-text-black">Say Hello...</h1>
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />
                    <div className="field is-grouped">
                      <div className="control is-expanded">
                        <input
                          className="input"
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="control is-expanded">
                        <input
                          className="input"
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control is-expanded">
                        <input
                          className="input"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="field is-grouped">
                      <div className="control is-expanded">
                        <input
                          className="input"
                          type="tel"
                          name="phoneNumber"
                          placeholder="Phone"
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <textarea
                          className="textarea"
                          name="message"
                          placeholder="Message"
                        />
                      </div>
                    </div>

                    <div className="field">
                      <p className="control">
                        <button
                          className="button is-black is-medium is-fullwidth shadowed"
                          type="submit"
                        >
                          Submit
                        </button>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={this.menuToggleClickHandler}
            ></button>
          </div>
        </div>
      </section>
    )
  }
}

export default Jumbotron
