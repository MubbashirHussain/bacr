import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function Resume() {
  useEffect(() => {
    const token = Cookies.get("Token");
    // console.log(token);
    axios
      .get("https://bacr-backend.vercel.app/api/cv", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(function (response) {
        // handle success
        setdata(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  let dlt = (id) => {
    const token = Cookies.get("Token");
    // console.log(token);
    axios
      .delete(`https://bacr-backend.vercel.app/api/cv/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(`${response}`);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(id);
  };
  const [data, setdata] = useState();
  // console.log(data?.length);
  return (
    <>
      <h1>Resume</h1>
      <div className="container">
        <div className="col-12">
          <div className="d-flex gap-2 justify-content-center flex-wrap">
            {data?.length > 0
              ? data.map((text, index) => {
                return (
                  <div
                    className="card position-relative"
                    key={index}
                    style={{ width: "18rem" }}
                  >
                    <div className="position-relative" >
                    <button
                      onClick={() => dlt(text._id)}
                      className="btn btn-danger position-absolute" 
                      style={{ right: "25px", top: "10px" ,zIndex :"10" }}
                    >
                      <DeleteForeverIcon />
                    </button>
                      <div className="rounded-md position-absolute  h-100 w-100" onClick={() => { window.open(text.CV_Url, '_blank'); }} />
                      <iframe src={text.CV_Url} style={{ height: "100%", overflow: "hidden" }} scrolling="no" className="card-img-top scrol w-100 h-100" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Name : {text.FullName}</h5>
                      <p className="card-text">
                        Apply For : {text.ApplyingFor}
                      </p>
                      <p className="card-text">Team : {text.Team}</p>
                    </div>
                  </div>
                );
              })
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
