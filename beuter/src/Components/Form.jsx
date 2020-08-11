import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import styled from "styled-components";

const DivStyled = styled.div``;

const InputStyled = styled.input`
  font-family: system-ui;
  font-size: 12px;
`;

const FormStyled = styled.form``;

const ButtonCreate = styled.button``;

const LabelStyled = styled.label``;

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
      .post("https://thebeuter.herokuapp.com/api/products", product)
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
    <DivStyled className="container" style={{ marginLeft: "400px" }}>
      <FormStyled onSubmit={addProduct}>
        <DivStyled className="form-group row">
          <LabelStyled htmlFor="title" className="col-sm-2 col-form-label">
            Title
          </LabelStyled>
          <DivStyled className="col-sm-10">
            <InputStyled
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </DivStyled>
        </DivStyled>
        <DivStyled className="form-group row">
          <LabelStyled htmlFor="title" className="col-sm-2 col-form-label">
            Title URL
          </LabelStyled>
          <DivStyled className="col-sm-10">
            <InputStyled
              type="text"
              onChange={(e) => setTitleUrl(e.target.value)}
              value={title_url}
            />
          </DivStyled>
        </DivStyled>

        <DivStyled className="form-group row">
          <LabelStyled htmlFor="title" className="col-sm-2 col-form-label">
            Price
          </LabelStyled>
          <DivStyled className="col-sm-10">
            <InputStyled
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              placeholder="$"
            />
          </DivStyled>
        </DivStyled>

        <DivStyled className="form-group row">
          <LabelStyled htmlFor="title" className="col-sm-2 col-form-label">
            Description 1
          </LabelStyled>
          <DivStyled className="col-sm-10">
            <InputStyled
              type="text"
              onChange={(e) => setDescription1(e.target.value)}
              value={description1}
            />
          </DivStyled>
        </DivStyled>
        <DivStyled className="form-group row">
          <LabelStyled htmlFor="title" className="col-sm-2 col-form-label">
            Description 2
          </LabelStyled>
          <DivStyled className="col-sm-10">
            <InputStyled
              type="text"
              onChange={(e) => setDescription2(e.target.value)}
              value={description2}
            />
          </DivStyled>
        </DivStyled>
        <DivStyled className="form-group row">
          <LabelStyled htmlFor="title" className="col-sm-2 col-form-label">
            Description 3
          </LabelStyled>
          <DivStyled className="col-sm-10">
            <InputStyled
              type="text"
              onChange={(e) => setDescription3(e.target.value)}
              value={description3}
            />
          </DivStyled>
        </DivStyled>
        <DivStyled className="form-group row">
          <LabelStyled htmlFor="title" className="col-sm-2 col-form-label">
            Description 4
          </LabelStyled>
          <DivStyled className="col-sm-10">
            <InputStyled
              type="text"
              onChange={(e) => setDescription4(e.target.value)}
              value={description4}
            />
          </DivStyled>
        </DivStyled>
        <DivStyled className="form-group row">
          <LabelStyled htmlFor="title" className="col-sm-2 col-form-label">
            Description 5
          </LabelStyled>
          <DivStyled className="col-sm-10">
            <InputStyled
              type="text"
              onChange={(e) => setDescription5(e.target.value)}
              value={description5}
            />
          </DivStyled>
        </DivStyled>
        <DivStyled className="form-group row">
          <LabelStyled htmlFor="title" className="col-sm-2 col-form-label">
            Img Url 1
          </LabelStyled>
          <DivStyled className="col-sm-10">
            <InputStyled
              type="text"
              onChange={(e) => setImgUrl1(e.target.value)}
              value={img_url1}
            />
          </DivStyled>
        </DivStyled>
        <DivStyled className="form-group row">
          <LabelStyled htmlFor="title" className="col-sm-2 col-form-label">
            Img Url 2
          </LabelStyled>
          <DivStyled className="col-sm-10">
            <InputStyled
              type="text"
              onChange={(e) => setImgUrl2(e.target.value)}
              value={img_url2}
            />
          </DivStyled>
        </DivStyled>
        <DivStyled className="form-group row">
          <LabelStyled htmlFor="title" className="col-sm-2 col-form-label">
            Img Url 3
          </LabelStyled>
          <DivStyled className="col-sm-10">
            <InputStyled
              type="text"
              onChange={(e) => setImgUrl3(e.target.value)}
              value={img_url3}
            />
          </DivStyled>
        </DivStyled>
        <DivStyled className="form-group row">
          <LabelStyled htmlFor="title" className="col-sm-2 col-form-label">
            Img Url 4
          </LabelStyled>
          <DivStyled className="col-sm-10">
            <InputStyled
              type="text"
              onChange={(e) => setImgUrl4(e.target.value)}
              value={img_url4}
            />
          </DivStyled>
        </DivStyled>
        <DivStyled className="form-group row">
          <LabelStyled htmlFor="title" className="col-sm-2 col-form-label">
            Size
          </LabelStyled>
          <DivStyled className="col-sm-10">
            <InputStyled
              type="text"
              onChange={(e) => setSize(e.target.value)}
              value={size}
            />
          </DivStyled>
        </DivStyled>
        <DivStyled className="form-group row">
          <LabelStyled htmlFor="title" className="col-sm-2 col-form-label">
            Size 2
          </LabelStyled>
          <DivStyled className="col-sm-10">
            <InputStyled
              type="text"
              onChange={(e) => setSize2(e.target.value)}
              value={size2}
            />
          </DivStyled>
        </DivStyled>
        <DivStyled className="form-group row">
          <LabelStyled htmlFor="title" className="col-sm-2 col-form-label">
            Fit
          </LabelStyled>
          <DivStyled className="col-sm-10">
            <InputStyled
              type="text"
              onChange={(e) => setFit(e.target.value)}
              value={fit}
            />
          </DivStyled>
        </DivStyled>
        <DivStyled className="form-group row">
          <LabelStyled htmlFor="title" className="col-sm-2 col-form-label">
            Fit 2
          </LabelStyled>
          <DivStyled className="col-sm-10">
            <InputStyled
              type="text"
              onChange={(e) => setFit2(e.target.value)}
              value={fit2}
            />
          </DivStyled>
        </DivStyled>
        <DivStyled className="form-group row">
          <LabelStyled htmlFor="title" className="col-sm-2 col-form-label">
            Category
          </LabelStyled>
          <DivStyled className="col-sm-10">
            <InputStyled
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
          </DivStyled>
        </DivStyled>

        <DivStyled className="form-group row">
          <DivStyled className="col-sm-10 offset-sm-2">
            <ButtonCreate type="submit" className="btn btn-primary">
              Create
            </ButtonCreate>
          </DivStyled>
        </DivStyled>
      </FormStyled>
    </DivStyled>
  );
};
export default Form;
