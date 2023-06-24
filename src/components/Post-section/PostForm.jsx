import React, { useState } from "react";

const PostForm = () => {
  const [form, setForm] = useState([]);
  const [name, setName] = useState("");
  const [property, setProperty] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(e.target.files[0]);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleProperty = (e) => {
    setProperty(e.target.value);
  };
  const handleAddress = (e) => {
    setDescription(e.target.value);
  };

  const handleClick = () => {
    const modal = {
      name: name,
      property: property,
      description: description,
      image: image,
    };
    setForm([...form, modal]);
  };

  return (
    <div>
      {/* name */}
      <input type="text" onChange={handleName} />
      {/* property name */}

      <input type="text" onChange={handleProperty} />
      {/* property address */}
      <input type="text" onChange={handleAddress} />
      {/* photo */}
      <input type="file" onChange={handleImage} />

      <button onClick={handleClick}>Post</button>

      {/* {image ? (
        <img src={URL.createObjectURL(image)} alt="" />
      ) : (
        <img src="" alt="" />
      )} */}

      {form.map((item) => {
        return (
          <div>
            <h3>{item.name}</h3>
            <h1>{item.property}</h1>
            {item.image ? (
              <img src={URL.createObjectURL(item.image)} alt="" />
            ) : (
              <img src="" alt="" />
            )}
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostForm;
