import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { db, storage } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Loading from "../components/Loading";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import "../components/Styles/AllPost.css";
import { FaHeart } from "react-icons/fa";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faHome, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import Testimonials from "./File/Testimonials";

import { Data } from "./File/Data";

library.add(fas);

function AllPost() {
  const [user, setUser] = useState([]);
  const [image, setImage] = useState("");

  const [data, setData] = useState({});

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [estate, setEstate] = useState("");

  const [file, setFile] = useState();
  const userCollectionRef = collection(db, "posts");

  const handleButton = async () => {
    await addDoc(userCollectionRef, {
      name: name,
      description: description,
      estate: estate,
      image: image,
    });
  };

  useEffect(() => {
    const uploadFiles = () => {
      const fileName = new Date().getTime() + file.name;
      // console.log(fileName);
      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log("File available at", downloadURL);
            setImage(downloadURL);
          });
        }
      );
    };
    file && uploadFiles();
  }, [file]);

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
      <div className="whole">
        <div className="container">
          <div className="text-container">
            <div className="header-container">
              <h1>
                Post your <span>Property</span> with
              </h1>
              <h1>with BTW- 2</h1>
              <ul>
                <li>
                  <b style={{ color: "rgb(157, 127, 127)" }}>01.</b>Advertise
                  for free
                </li>
                <li>
                  <b style={{ color: "rgb(157, 127, 127)" }}>02.</b>get
                  unlimited enqueries
                </li>
                <li>
                  <b style={{ color: "rgb(157, 127, 127)" }}>03.</b>get
                  shorlisted buyer
                </li>
                <li>
                  <b style={{ color: "rgb(157, 127, 127)" }}>04.</b>Assistance
                  in coordinating
                </li>
              </ul>
            </div>
          </div>

          <div className="form-container">
            <form onSubmit={handleButton} className="form">
              <h2>Start Posting your real estate</h2>
              <p>start adding basic details</p> <br />
              <input
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
              <br /> <br />
              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="estate"
              />
              <br /> <br />
              <input
                type="text"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="description"
              />
              <br /> <br />
              <input
                type="text"
                onChange={(e) => {
                  setEstate(e.target.value);
                }}
                placeholder="name"
              />
              <br /> <br />
              <button type="submit">Post</button>
            </form>
          </div>
        </div>
        <div>
          <div className="center-container">
            <h2 className="light-text">HOW TO POST</h2>
            <h1> POST YOUR PROPERTY IN </h1>
            <h1>3 SIMPLE STEPS</h1>
          </div>
          <div className="three-container">
            <div className="details">
              <FontAwesomeIcon icon={faFileAlt} className="icons" />
              <div className="container1">
                <h3 className="cotainer1-css">
                  <b>01.</b>Add details of your property
                </h3>
                <p>
                  Begin by telling us the few basic details about your property
                  like your property type, location, No. of rooms etc
                </p>
              </div>
            </div>
            <div className="upload">
              <FontAwesomeIcon icon={faImages} className="icons" />
              <div className="container1">
                <h3 className="cotainer1-css">
                  <b>02.</b>Add details of your property
                </h3>
                <p>
                  Begin by telling us the few basic details about your property
                  like your property type, location, No. of rooms etc
                </p>
              </div>
            </div>
            <div className="pricing">
              <FontAwesomeIcon icon={faHome} className="icons" />
              <div className="container1">
                <h3 className="cotainer1-css">
                  <b>03.</b>Add details of your property
                </h3>
                <p>
                  Begin by telling us the few basic details about your property
                  like your property type, location, No. of rooms etc
                </p>
              </div>
            </div>
          </div>
          <div className="additional-benifit">
            <h3 className="cotainer1-css">
              <b style={{ fontWeight: 100 }}>Additional Benifits</b>
              <h1> Everything on Realestate does to post </h1>
              <h1>your rent out property</h1>
            </h3>

            <Testimonials />
          </div>
        </div>
      </div>
    </>
  );
}

// export default withAuthenticationRequired(AllPost, {
//   onRedirecting: () => <Loading />,
// });
export default AllPost;
