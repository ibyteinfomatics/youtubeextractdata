import { NotificationManager } from "react-notifications";
import { downloadExcelByChennelId, getVideoDetail, getVideoFromChennelId } from "../services/Api";
import { useState } from "react";

function GetVideoFromId() {
  const [chanleId, setChanelId] = useState(null);
  const [videoId, setVideoId] = useState(null);
  
  const downloadFile = (url) => {
    if (!url) return;
    const link = document.createElement("a");
    link.href = url;
    link.download = "Client-details";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    NotificationManager.success("File downloaded successfully");
  };

  const chanelIdHandler = async (e) =>{
    e.preventDefault();
    if(!chanleId || chanleId.trim().length ===0){
      return;
    }
    const res = await getVideoFromChennelId(chanleId);
    if(res?.success){
     downloadFile(res?.fileLink);

    } 
  }

  const videoIdHandler = async (e) =>{
    e.preventDefault();
    if(!videoId || videoId.trim().length ===0){
      return;
    }
    const res = await getVideoDetail(videoId);
    if(res?.success){
     downloadFile(res?.fileLink);

    } 
  }

  

 
  return (
    <div className="container h-100 mt-5 pt-5 arya"  >
      <h1 className="text-center">Get Videos from Youtube Api</h1>
      <div className="accordion text-center" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button text-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Get all videos of channel from Channel-Id</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <form className="row g-3 needs-validation" onSubmit={chanelIdHandler} novalidate>
              <div className=" ">
                <div className="input-group has-validation p-3 row">
                  <span
                    className="input-group-text col-sm-1"
                    id="inputGroupPrepend"
                  >
                    Channel-Id
                  </span>
                  <input
                    type="text"
                    className="form-control col-sm-4"
                    id="validationCustomUsername"
                    onChange={(e)=>setChanelId(e.target.value)}
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div className="invalid-feedback">Channel-Id</div>
                  <div className="col-sm-4"></div>
                  <button className="btn btn-primary col-sm-2" type="submit">
                    Generate Excel
                  </button>
                </div>
              </div>
              <div className="col-12"></div>
            </form>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed justify-content-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Get single video details from Video-Id</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <form className="row g-3 needs-validation" onSubmit={videoIdHandler}novalidate>
              <div className=" ">
                <div className="input-group has-validation p-3 row">
                  <span
                    className="input-group-text col-sm-1"
                    id="inputGroupPrepend"
                  >
                    Video-Id
                  </span>
                  <input
                    type="text"
                    className="form-control col-sm-4"
                    id="validationCustomUsername"
                    onChange={(e)=>setVideoId(e.target.value)}
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div className="invalid-feedback">Video-Id</div>
                  <div className="col-sm-4"></div>
                  <button className="btn btn-primary col-sm-2" type="submit">
                    Generate Excel
                  </button>
                </div>
              </div>
              <div className="col-12"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetVideoFromId;
