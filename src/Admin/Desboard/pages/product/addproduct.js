import axios from "axios";
import { useState } from "react";
import CustomBtn from "../../../Components/button/index";
import "./index.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function AddProducts() {
  const [data, setdata] = useState();
  const [Image, setImage] = useState();
  let Navigate = useNavigate()

  let submit = (data) => {
    // console.log(data);
    let Form = new FormData();
    Image && Form.append("Image", Image);
    for (var key in data) {
      Form.append(key, data[key]);
    }
    const token = Cookies.get("Token");
   if(data && data.Title && data.Description && Image){ axios
      .post("https://bacr-backend.vercel.app/api/inventory", Form, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        Navigate("./")
        alert("Data Submited")
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });}else{
        alert("Please Fill All Feild")
      }
  };
  return (
    <>
      <div className="container w-100">
        <div className="row g-3 d-flex justify-content-center py-4 px-2 ">
          <div className="col-lg-7 col-sm-12">
            <input
              type="title"
              className="form-control"
              onChange={(e) => {
                let Title = e.target.value;
                setdata({ ...data, Title });
              }}
              placeholder="Title"
            />
          </div>
          <div className="col-lg-7 col-sm-12">
            <textarea
              className="form-control"
              onChange={(e) => {
                let Description = e.target.value;
                setdata({ ...data, Description });
              }}
              placeholder="Description"
            />
          </div>
          <div className="col-lg-7 col-sm-12">
            <input
              type="file"
              className="form-control"
              onChange={(e) => {
                {
                  e.target.files?.length && e.target.files?.length > 0
                    ? setImage(e.target.files[0])
                    : null;
                }
              }}
              placeholder="Title"
            />
          </div>
          <div className="col-lg-7 col-sm-12">
            {/* <img src={image} alt="" /> */}
          </div>
          <div className="col-lg-7">
            <CustomBtn
              title="Submit"
              onClick={() => {
                // setdata({ ...data });
                submit(data);
              }}
              className="w-100"
            />
          </div>
        </div>
      </div>
    </>
  );
}
