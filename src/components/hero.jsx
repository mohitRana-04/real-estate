import "./hero.css";
import price from "./Assets/negotiation.png"
import homeap from "./Assets/ab.png"
import paper from "./Assets/paperwork.png"
import tag from "./tag"

export function HeroText() {
  return (
    <>
      <div className="main">
        <div className="Landing"></div>
        <div>
          
          <div className="aboutHead">
            <h1>About Us</h1>

            <h4>Who are we?</h4>
          </div>

          <div className="aboutGrid">
            <div className="aboutGridText">
              <h2>We at WX Homes Provides.....</h2>
              Lorem ipsum  sit amet consectetur adipisicing elit. Porro
              laudantium laboriosam quas non debitis. Rerum distinctio optio
              facilis nisi. Nam eligendi vitae voluptatem expedita minus
              repellat illo dolorem cum ipsa, totam, tempora debitis sit,
              ratione aliquam nostrum magni! In, dolorum.
            </div>
            <div className="aboutGridImg"></div>
          </div>
        </div>

        {/* //something */}

        <div className="containerFindDreams">
          <div className="item itemHead">
            <h1>Find Your Dream House</h1>
          </div>

          <div className="item">
            <h1>Buyer's Guide</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            quaerat ad illo, voluptatum quam, molestiae beatae facere
            reprehenderit, deserunt saepe eum temporibus error incidunt.
            Eligendi.
          </div>

          <div className="item">
            <h1>Buyer's Guide</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            quaerat ad illo, voluptatum quam, molestiae beatae facere
            reprehenderit, deserunt saepe eum temporibus error incidunt.
            Eligendi.
          </div>

          <div className="item">
            <h1>Buyer's Guide</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            quaerat ad illo, voluptatum quam, molestiae beatae facere
            reprehenderit, deserunt saepe eum temporibus error incidunt.
            Eligendi.
          </div>

          <div className="item itemImg"></div>
        </div>


        <div className="Awesome3">

          <div class="containerAwesome">

            <div className="ContA">
              <div class="box">
                <img src="https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?cs=srgb&dl=pexels-dmitry-zvolskiy-2062426.jpg&fm=jpg" />
              </div>
              <div className="ServiceContDiv">
                <div className="ServiceHead">Beautiful kitchen</div>
                <div className="ServiceTxt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
                <button id="button">View home</button>
              </div>
            </div>

            <div className="ContA">
              <div class="box">
                <img src="https://media.istockphoto.com/id/1136936441/photo/a-cozy-modern-kitchen-white-room-interior-3drender.jpg?s=612x612&w=0&k=20&c=jckG_WIKrb3oaMA6cdv35etCETZIBjoEcV3N2fHwA8s=" />
              </div>
              <div className="ServiceContDiv">
                <div className="ServiceHead">Beautiful kitchen</div>
                <div className="ServiceTxt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
                <button id="button">View home</button>
              </div>
            </div>

            <div className="ContA">
              <div class="box">
                <img src="https://thumbs.dreamstime.com/b/beautiful-modern-kitchen-luxury-home-interior-island-large-stainless-steel-appliances-125640342.jpg" />
              </div>
              <div className="ServiceContDiv">
                <div className="ServiceHead">Beautiful kitchen</div>
                <div className="ServiceTxt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
                <button id="button">View home</button>
              </div>
            </div>

          </div>
        </div>

        <div id='abc'>
          <div className="WeHand">
            <div className="heading1">
              <h1>We Handle Everything</h1>

            </div>
            <div className="WeHandtxt">
              <div className="interior">
                <img src={homeap} alt="logo" />
                <h3>Home Appraisal</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat tempora voluptatem neque laborum mollitia inventore harum magni sint aliquam error, excepturi et quibusdam!</p>
              </div>
              <div className="interior">
                <img src={price} alt="logo" />
                <h3>Price Negotation</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat tempora voluptatem neque laborum mollitia inventore harum magni sint aliquam error, excepturi et quibusdam!</p>
              </div>
              <div className="interior">
                <img src={paper} alt="logo" />
                <h3>Paperwork Handling </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat tempora voluptatem neque laborum mollitia inventore harum magni sint aliquam error, excepturi et quibusdam!</p>
              </div>
            </div>
          </div>
          <div className="get-started">
            <h1>Get Started</h1>
          </div>
          <div className="get-started1">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Necessitatibus porro, nulla, nihil modi praesentium tenetur delectus laboriosam </p>
          </div>
          <div className="buttons">
            <button id="button1">Explore Properties</button>
            <button id="button2">Get Advice</button>



          </div>

        </div>


        <div className="review" id="Review">
          <h1>Customer's<span>review</span></h1>
          <div className="ReviewCont">
            <div className="review_card">

              <div className="card_top">
                <div className="profile_image">
                  <img src="image/girl_dp1.jpg" />
                </div>
                <div className="profileNameArea">
                  <div className="name">
                    <strong>ABCDE</strong>
                  </div>
                  <div className="like">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                </div>
              </div>
              <div className="reviewComment">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, laudantium non? Suscipit maiores aut officia molestias et unde veritatis minus?
              </div>
            </div>

            <div className="review_card">

              <div className="card_top">
                <div className="profile_image">
                  <img src="image/girl_dp1.jpg" />
                </div>
                <div className="profileNameArea">
                  <div className="name">
                    <strong>ABCDE</strong>
                  </div>
                  <div className="like">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                </div>
              </div>
              <div className="reviewComment">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, laudantium non? Suscipit maiores aut officia molestias et unde veritatis minus?
              </div>
            </div>

            <div className="review_card">

              <div className="card_top">
                <div className="profile_image">
                  <img src="image/girl_dp1.jpg" />
                </div>
                <div className="profileNameArea">
                  <div className="name">
                    <strong>ABCDE</strong>
                  </div>
                  <div className="like">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                </div>
              </div>
              <div className="reviewComment">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, laudantium non? Suscipit maiores aut officia molestias et unde veritatis minus?
              </div>
            </div>

            <div className="review_card">

              <div className="card_top">
                <div className="profile_image">
                  <img src="image/girl_dp1.jpg" />
                </div>
                <div className="profileNameArea">
                  <div className="name">
                    <strong>ABCDE</strong>
                  </div>
                  <div className="like">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                </div>
              </div>
              <div className="reviewComment">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, laudantium non? Suscipit maiores aut officia molestias et unde veritatis minus?
              </div>
            </div>

            <div className="review_card">

              <div className="card_top">
                <div className="profile_image">
                  <img src="image/girl_dp1.jpg" />
                </div>
                <div className="profileNameArea">
                  <div className="name">
                    <strong>ABCDE</strong>
                  </div>
                  <div className="like">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                </div>
              </div>
              <div className="reviewComment">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, laudantium non? Suscipit maiores aut officia molestias et unde veritatis minus?
              </div>
            </div>

            <div className="review_card">

              <div className="card_top">
                <div className="profile_image">
                  <img src="image/girl_dp1.jpg" />
                </div>
                <div className="profileNameArea">
                  <div className="name">
                    <strong>ABCDE</strong>
                  </div>
                  <div className="like">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                </div>
              </div>
              <div className="reviewComment">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, laudantium non? Suscipit maiores aut officia molestias et unde veritatis minus?
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
