import React from "react";
import emailjs from "emailjs-com";
//import img from "../../images/img-1.jpg"
//"/images/img-2.jpg"
const Email = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xd8ahlm",
        "template_k5dld5o",
        e.target,
        "nkiA3xqNsKhj6mCGU"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div
      className="container border"
      style={{
        marginTop: "4rem",
        width: "90%",
        backgroundColor: "rgba(1,1,1,0.5)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 style={{ marginTop: "1rem", color: "whitesmoke" }}>Email Us</h1>
      <form
        className="row"
        style={{ margin: "1rem 1rem 2rem 1rem" }}
        onSubmit={sendEmail}
      >
        <label style={{color:"whitesmoke"}}>Name</label>
        <input type="text" name="name" className="form-control" />

        <label style={{color:"whitesmoke"}}>Email</label>
        <input type="email" name="user_email" className="form-control" />

        <label style={{color:"whitesmoke"}}>Message</label>
        <textarea name="message" rows="4" className="form-control" />
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        />
      </form>
    </div>
  );
};

export default Email;
