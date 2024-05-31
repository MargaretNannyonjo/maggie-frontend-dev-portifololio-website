import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const confirmSubmit = window.confirm("Form submitted, Thank you");

    if (confirmSubmit) {
      navigate("/");
    }
  };

  return (
    <div className="contact">
      <h1>Contact me</h1>

      <div className="form-div">
        <form
          action="https://formspree.io/f/mpzvpreg"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="inputs">
            <div className="form-group">
              <h6 style={{ textAlign: "left", marginLeft: "10px" }}>Name</h6>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <h6
                style={{
                  textAlign: "left",
                  marginLeft: "10px",
                  marginTop: "12px",
                }}
              >
                Email
              </h6>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <h6
                style={{
                  textAlign: "left",
                  marginLeft: "10px",
                  marginTop: "12px",
                }}
              >
                Message
              </h6>
              <textarea
                type="text"
                className="form-control"
                placeholder="message"
                columns="50"
              ></textarea>
            </div>
          </div>

          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
