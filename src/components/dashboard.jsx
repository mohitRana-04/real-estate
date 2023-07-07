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
      <div className="main">
        {user.map((item) => {
          return (
            <>
              <div className="card">
                <div className="title">{item.name}</div>
                <center>
                  <div className="image">
                    <img src={item.image} alt="" />
                  </div>
                </center>

                <div className="des">{item.description}</div>
                <div className="center-button">
                  <button className="view-more">View More</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <></>
    </>
  );
}

export default withAuthenticationRequired(Dashboard, {
  onRedirecting: () => <Loading />,
});
