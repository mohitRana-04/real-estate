import React, { useEffect, useState } from "react";
import { db, storage } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Loading from "../components/Loading";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import "../components/Styles/Dashboard.css";

function Dashboard() {
  const [user, setUser] = useState([]);
  const userCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log(data);
    };
    getUsers();
  }, []);
  return (
    <>
      {/* <div classNameName="square center-div">
        {user.map((item) => {
          return (
            <div>
              <div classNameName="circle-pfp">{item.description}</div>
              <h3>{item.estate}</h3>
              <h1>{item.name}</h1>
              <img src={item.image} alt="" />
            </div>
          );
        })}
      </div> */}

      {/* <div className="main">
              <div className="card">
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <div className="title">{item.name}</div>
                <div className="des">{item.description}</div>
              </div>
            </div> */}
      <div className="container">
        <div className="navigation">
          <ul>
            <li>
              <a href="#">
                <span className="icon">
                  <ion-icon name="logo-apple"></ion-icon>
                </span>
                <span className="title">Brand Name</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className="title">Dashboard</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <span className="title">Customers</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <ion-icon name="chatbubble-outline"></ion-icon>
                </span>
                <span className="title">Messages</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <ion-icon name="help-outline"></ion-icon>
                </span>
                <span className="title">Help</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <ion-icon name="settings-outline"></ion-icon>
                </span>
                <span className="title">Settings</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <ion-icon name="lock-closed-outline"></ion-icon>
                </span>
                <span className="title">Password</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span className="title">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="main">
          <div className="topbar">
            <div className="toggle">
              <ion-icon name="menu-outline"></ion-icon>
            </div>

            <div className="search">
              <label>
                <input type="text" placeholder="Search here" />
                <ion-icon name="search-outline"></ion-icon>
              </label>
            </div>

            <div className="user">
              <img src="assets/imgs/customer01.jpg" alt="" />
            </div>
          </div>

          <div className="cardBox">
            <div className="card">
              <div>
                <div className="numbers">1,504</div>
                <div className="cardName">Daily Views</div>
              </div>

              <div className="iconBx">
                <ion-icon name="eye-outline"></ion-icon>
              </div>
            </div>

            <div className="card">
              <div>
                <div className="numbers">80</div>
                <div className="cardName">Sales</div>
              </div>

              <div className="iconBx">
                <ion-icon name="cart-outline"></ion-icon>
              </div>
            </div>

            <div className="card">
              <div>
                <div className="numbers">284</div>
                <div className="cardName">Comments</div>
              </div>

              <div className="iconBx">
                <ion-icon name="chatbubbles-outline"></ion-icon>
              </div>
            </div>

            <div className="card">
              <div>
                <div className="numbers">$7,842</div>
                <div className="cardName">Earning</div>
              </div>

              <div className="iconBx">
                <ion-icon name="cash-outline"></ion-icon>
              </div>
            </div>
          </div>

          {user.map((item) => {
            return (
              <>
                <div className="details">
                  <div className="recentOrders">
                    <div className="cardHeader">
                      <h2>{item.estate}</h2>
                      <a href="#" className="btn">
                        {item.name}
                      </a>
                    </div>
                    <img src={item.image} alt="" />
                  </div>
                </div>
              </>
            );
          })}

          <div className="recentCustomers">
            <div className="cardHeader">
              <h2>Recent Customers</h2>
            </div>

            <table>
              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="assets/imgs/customer02.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>
                    David <br />
                    <span>Italy</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="assets/imgs/customer01.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>
                    Amit <br />
                    <span>India</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="assets/imgs/customer02.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>
                    David <br />
                    <span>Italy</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="assets/imgs/customer01.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>
                    Amit <br />
                    <span>India</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="assets/imgs/customer02.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>
                    David <br />
                    <span>Italy</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="assets/imgs/customer01.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>
                    Amit <br />
                    <span>India</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="assets/imgs/customer01.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>
                    David <br />
                    <span>Italy</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="assets/imgs/customer02.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>
                    Amit <br />
                    <span>India</span>
                  </h4>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuthenticationRequired(Dashboard, {
  onRedirecting: () => <Loading />,
});
