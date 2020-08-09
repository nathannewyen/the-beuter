import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [title_url, setTitleUrl] = useState("");
  const [price, setPrice] = useState(1);
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  const [description4, setDescription4] = useState("");
  const [description5, setDescription5] = useState("");
  const [img_url1, setImgUrl1] = useState("");
  const [img_url2, setImgUrl2] = useState("");
  const [img_url3, setImgUrl3] = useState("");
  const [img_url4, setImgUrl4] = useState("");
  const [size, setSize] = useState("");
  const [size2, setSize2] = useState("");
  const [fit, setFit] = useState("");
  const [fit2, setFit2] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({});

  const addProduct = (e) => {
    e.preventDefault();
    const product = {
      title,
      title_url,
      price,
      description1,
      description2,
      description3,
      description4,
      description5,
      img_url1,
      img_url2,
      img_url3,
      img_url4,
      size,
      size2,
      fit,
      fit2,
      category,
    };
    axios
      .post("http://localhost:8000/api/products", product)
      .then((res) => {
        if (res.data.errors) {
          setErrors(res.data.errors);
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container" style={{ marginLeft: "400px" }}>
      <h1>Form</h1>
      <form onSubmit={addProduct}>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Title URL
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={(e) => setTitleUrl(e.target.value)}
              value={title_url}
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Price
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              placeholder="$"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Description 1
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={(e) => setDescription1(e.target.value)}
              value={description1}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Description 2
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={(e) => setDescription2(e.target.value)}
              value={description2}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Description 3
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={(e) => setDescription3(e.target.value)}
              value={description3}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Description 4
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={(e) => setDescription4(e.target.value)}
              value={description4}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Description 5
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={(e) => setDescription5(e.target.value)}
              value={description5}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Img Url 1
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={(e) => setImgUrl1(e.target.value)}
              value={img_url1}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Img Url 2
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={(e) => setImgUrl2(e.target.value)}
              value={img_url2}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Img Url 3
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={(e) => setImgUrl3(e.target.value)}
              value={img_url3}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Img Url 4
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={(e) => setImgUrl4(e.target.value)}
              value={img_url4}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Size
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={(e) => setSize(e.target.value)}
              value={size}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Size 2
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={(e) => setSize2(e.target.value)}
              value={size2}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Fit
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={(e) => setFit(e.target.value)}
              value={fit}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Fit 2
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={(e) => setFit2(e.target.value)}
              value={fit2}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Category
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
