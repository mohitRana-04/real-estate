import "./hero.css";
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

          <div id='abc'>
            <div className="WeHand">
              <div className="heading1">
                <h1>We Handle Everything</h1>

              </div>
              <div className="WeHandtxt">
                <div className="interior">
                  <img src='./Assets/ab.jpg' alt="Logo" />
                  <h3>Home Appraisal</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat tempora voluptatem neque laborum mollitia inventore harum magni sint aliquam error, excepturi et quibusdam!</p>
                </div>
                <div className="interior">
                  <img src='./Assets/negotation.png' alt="Logo" />
                  <h3>Price Negotation</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat tempora voluptatem neque laborum mollitia inventore harum magni sint aliquam error, excepturi et quibusdam!</p>
                </div>
                <div className="interior">
                  <img src='./Assets/paperwork.png' alt="Logo" />
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

            <div className="reviewsCont">
              <div class="containerAwesome2">
                <div class="section">
                  <text>
                    I sold my house in just two weeks! Can't thank you enough
                  </text>
                  <p>Linda Harvey</p>
                </div>
                <div class="section">
                  <text>Found my dream home in the city .Hassel-free!</text>
                  <p>Tim Wilson</p>
                </div>
                <div class="section">
                  <text>
                    The buying process was smooth and easy. Highly recommended
                  </text>
                  <p>Gina Nguyen</p>
                </div>
              </div>

              <div class="d-box">
                <a href="css_div_image_hover.zip" class="btn">
                  Properties
                </a>
              </div>
            </div>





          </div>
        </div>
      </div>
    </>
  );
}
