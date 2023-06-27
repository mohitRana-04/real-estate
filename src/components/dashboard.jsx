import React, { useEffect, useState } from "react";
import { db, storage } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Loading from "../components/Loading";
import { withAuthenticationRequired } from "@auth0/auth0-react";

function Dashboard() {
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
    <div>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="estate"
      />
      <input
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="description"
      />
      <input
        type="text"
        onChange={(e) => {
          setEstate(e.target.value);
        }}
        placeholder="name"
      />
      <button onClick={handleButton}>Click me</button>

      <div className="square center-div">
        {user.map((item) => {
          return (
            <div>
              <div className="circle-pfp">{item.description}</div>
              <h3>{item.estate}</h3>
              <h1>{item.name}</h1>
              <img src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withAuthenticationRequired(Dashboard, {
  onRedirecting: () => <Loading />,
});
