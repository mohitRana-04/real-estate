import "./hero.css";
import price from "./Assets/negotiation.png";
import homeap from "./Assets/ab.png";
import paper from "./Assets/paperwork.png";
import tag from "./tag";
import girldp1 from "./Assets/girl_dp1.jpg";
import girldp2 from "./Assets/gir_dp2.jpg";
import girldp3 from "./Assets/gir_dp3.jpg";
import mandp1 from "./Assets/man_dp1.jpg";
import mandp2 from "./Assets/man_dp2.jpg";
import mandp3 from "./Assets/man_dp3.jpg";

export function HeroText() {
  return (
    <>
      <div className="main">
        <div className="Landing"></div>
        <div>
          <div className="aboutHead">
            <h1>About Us</h1>
          </div>

          <div className="aboutGrid">
            <div className="aboutGridText">
              <h2>We at WX Homes Provides.....</h2>
              Your one-stop destination for real estate needs. Browse our
              extensive property listings, refine searches, and take virtual
              tours. Connect directly with buyers, sellers, and expert agents
              using our secure messaging system. Benefit from our knowledgeable
              agents, neighborhood insights, and financial tools.
              Mobile-responsive for on-the-go access. Privacy and security are
              paramount. Begin your real estate journey with WXHomes today!
            </div>
            <div className="aboutGridImg"></div>
          </div>
        </div>

        {/* //something */}

        <div className="containerFindDreams">
          <div className="item itemHead">
            <h1 id="findhead">Find Your Dream House</h1>
          </div>

          <div className="item">
            <h1>Buyer's Guide</h1>
            Get Expert Advice on Purchasing Property Like a Pro!
          </div>

          <div className="item">
            <h1>Seller's Guide</h1>
            Maximize your Property's potential with our Valuable Tips!
          </div>

          <div className="item">
            <h1>Property Tours</h1>
            Explore Breathtaking Homes in Stunning Settings!
          </div>

          <div className="item itemImg"></div>
        </div>
        <div className="Awesome3">
          <div className="heading">
            <p>Discover Your Dream Home with a Click!</p>
          </div>
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
                <button id="button">View</button>
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
                <button id="button">View</button>
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
                <button id="button">View</button>
              </div>
            </div>
          </div>
        </div>

        <div id="abc">
          <div className="WeHand">
            <div className="heading1">
              <h1>We Handle Everything</h1>
            </div>
            <div className="WeHandtxt">
              <div className="interior">
                <img src={homeap} alt="logo" />
                <h3>Home Appraisal</h3>
                <p>
                  we understand the significance of accurate home valuations.
                  Our team of experienced and certified appraisers meticulously
                  assesses various factors that influence the value of your
                  property. From the location and size of your home to its
                  condition and recent market trends, we leave no stone
                  unturned.
                </p>
              </div>
              <div className="interior">
                <img src={price} alt="logo" />
                <h3>Price Negotation</h3>
                <p>
                  {" "}
                  we believe in advocating for our clients and ensuring they get
                  the most out of their real estate investments. Our skilled
                  negotiators have extensive experience in the industry, and we
                  are committed to securing the most favorable terms for you. We
                  leverage our in-depth market knowledge and strategic approach
                  to engage in price negotiations that align with your goals.{" "}
                </p>
              </div>
              <div className="interior">
                <img src={paper} alt="logo" />
                <h3>Paperwork Handling </h3>
                <p>
                  {" "}
                  we understand the importance of handling paperwork accurately
                  and efficiently. Our experienced team takes care of drafting,
                  reviewing, and submitting all necessary documents, ensuring
                  compliance with regulations and minimizing risks. Trust us to
                  handle your real estate paperwork seamlessly, guiding you
                  through the process for a smooth and successful transaction.
                </p>
              </div>
            </div>
          </div>
          <div className="get-started">
            <h1>Get Started</h1>
          </div>
          <div className="get-started1">
            <p>
              Don't wait to invest in your Dream Property! <br /> Explore Our
              Website or Contact our experts agent for your real estate needs.{" "}
            </p>
          </div>
          <div className="buttons">
            <button id="button1">Explore Properties</button>
          </div>
        </div>

        <div className="review" id="Review">
          <h1>
            Customer's <span>Review</span>
          </h1>
          <div className="ReviewCont">
            <div className="review_card">
              <div className="card_top">
                <div className="profile_image">
                  <img src={mandp3} />
                </div>
                <div className="profileNameArea">
                  <div className="name">
                    <strong>Sparsh</strong>
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
                ""WXHomes is an incredible real estate website. It offers an
                intuitive user interface, making property searches and
                navigation a breeze. The detailed property information and
                high-quality images provide a clear understanding of each
                listing. It's a reliable and efficient platform for finding your
                dream home."
              </div>
            </div>

            <div className="review_card">
              <div className="card_top">
                <div className="profile_image">
                  <img src={girldp1} />
                </div>
                <div className="profileNameArea">
                  <div className="name">
                    <strong>Kanika</strong>
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
                "I highly recommend WXHomes for anyone looking to buy or sell
                real estate. The website offers a wide range of listings, and
                the search filters help narrow down options based on specific
                preferences. The responsive customer support team is always
                ready to assist and provide valuable guidance throughout the
                process."{" "}
              </div>
            </div>

            <div className="review_card">
              <div className="card_top">
                <div className="profile_image">
                  <img src={mandp1} />
                </div>
                <div className="profileNameArea">
                  <div className="name">
                    <strong>Mohit</strong>
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
              WXHomes is my go-to website for finding rental properties. The
              platform is user-friendly, and the rental listings are regularly
              updated. The ability to schedule virtual tours and the
              comprehensive property descriptions save time and make the rental
              search hassle-free. If you're looking for a rental, give WXHomes a
              try{" "}
            </div>
          

            <div className="review_card">
              <div className="card_top">
                <div className="profile_image">
                  <img src={girldp3} />
                </div>
                <div className="profileNameArea">
                  <div className="name">
                    <strong>Neha</strong>
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
                I highly recommend WXHomes for real estate needs. Its wide range
                of listings and search filters help narrow down options based on
                preferences. The responsive customer support team offers valuable
                guidance throughout the process."{" "}
            </div>

            <div className="review_card">
              <div className="card_top">
                <div className="profile_image">
                  <img src={mandp2} />
                </div>
                <div className="profileNameArea">
                  <div className="name">
                    <strong>Piyush</strong>
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
              
                "WXHomes is my go-to website for rental properties. regularly
                updated listings make the rental search hassle-free. Virtual tours
                and comprehensive property descriptions save time. Give WXHomes a
                try for an easy rental search."
              
              </div>

              <div className="review_card">
                <div className="card_top">
                  <div className="profile_image">
                    <img src={girldp2} />
                  </div>
                  <div className="profileNameArea">
                    <div className="name">
                      <strong>Sakshi</strong>
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
                
                  WXHomes made selling my property a great experience. The seamless
                  listing process and marketing tools helped attract potential
                  buyers quickly. Thanks to WXHomes, I sold my property efficiently
                  and with peace of mind."
                </div>
          </div>
        </div>
      </div>
    </>
  );
}
