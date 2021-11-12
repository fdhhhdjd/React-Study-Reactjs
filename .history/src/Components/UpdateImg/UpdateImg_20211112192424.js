import React, { useEffect, useState } from "react";
import "./Img.css";
const UpdateImg = () => {
  const [error, setError] = useState(false);
  return (
    <>
      <div className="app">
        <div className="container">
          <div className="imgPreview">
            <>
              <>
                <p>Add an image</p>
                <label htmlFor="fileUpload" className="customFileUpload">
                  Choose file
                </label>
                <input type="file" id="fileUpload" />
                <span>(jpg, jpeg or png)</span>
              </>
            </>
          </div>

          <button>Remove image</button>
        </div>
      </div>
    </>
  );
};

export default UpdateImg;
