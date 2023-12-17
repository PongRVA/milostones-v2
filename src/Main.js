import React from "react";
// import { v4 as uuidv4 } from "https://jspm.dev/uuid";

export default function Main(props) {
  const [formData, setFormData] = React.useState({
    name: "",
    comment: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const { name, comment } = formData;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ID: props.stone.id,
        name: name,
        comment: comment,
        // uuid: uuidv4(),
      }),
    };
    const res = await fetch(
      "https://milostones-ca093-default-rtdb.firebaseio.com/UserComment.json",
      options
    );
    console.log(res);
    if (res.ok) {
      alert("Message Sent");
    } else {
      alert("Error");
    }

    const stoneCommentID = document.getElementById("stoneComment");
    console.log(formData.name, formData.comment);
    stoneCommentID.reset(); // won't work for state values???
    setFormData({
      name: "",
      comment: "",
    });

    //saveCommentsDB(formData.name, formData.comment);
  }

  // const saveCommentsDB = (name, comment) => {
  //     const newComment = stoneCommentDB.push()
  //     newComment.set({
  //         name: name,
  //         comment: comment
  //     })
  // }

  const mainAddDark = ["main", props.darkMode ? "darkMode" : ""].join(" ");

  return (
    <div className={mainAddDark}>
      <h3>{props.stone.title}</h3>
      <p className="main-stats">
        {props.stone.date}{" "}
        {props.stone.length && props.stone.weight && (
          <span>
            ({props.stone.length}, {props.stone.weight})
          </span>
        )}
      </p>
      <p className="main-description">{props.stone.description}</p>
      <img className="main-img-stone" src={props.stone.imageUrl} alt="" />
      <div className="like-comment">
        <div className="like">
          <p>
            <i className="fa-regular fa-thumbs-up"></i> Likes:{" "}
            {props.stone.likes}{" "}
          </p>
        </div>
        <div className="comment">
          <form id="stoneComment" onSubmit={handleSubmit}>
            <input
              id="idName"
              className={props.darkMode ? "darkMode" : ""}
              type="text"
              placeholder="Name"
              onChange={handleChange}
              name="name"
              value={formData.name}
              autoComplete="off"
              required
            />
            <textarea
              id="idComment"
              className={props.darkMode ? "darkMode" : ""}
              value={formData.comment}
              placeholder="Comment"
              onChange={handleChange}
              name="comment"
              autoComplete="off"
              required
            />
            <button className={props.darkMode ? "darkMode" : ""}>Submit</button>
          </form>
          {formData.comment && <p>{`${formData.name}: ${formData.comment}`}</p>}
        </div>
      </div>
    </div>
  );
}
