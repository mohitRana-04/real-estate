import React, { useEffect, useState } from "react";
import { db, storage } from "../../Firebase-Config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import "../../../src/App.css";

const ShowPost = () => {
  const [user, setUser] = useState([]);

  const [data, setData] = useState({});

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [estate, setEstate] = useState("");

  const [file, setFile] = useState([]);
  const userCollectionRef = collection(db, "posts");

  const handleButton = async () => {
    await addDoc(userCollectionRef, {
      name: name,
      description: description,
      estate: estate,
    });
  };

  useEffect(() => {
    const uploadFiles = () => {
      const fileName = new Date().getTime() + file.name;
      console.log(fileName);
      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, fileName);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
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
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowPost;
