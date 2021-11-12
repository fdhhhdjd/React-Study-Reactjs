import React, { useEffect, useState } from "react";
import "./Img.css";
const UpdateImg = () => {
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);
  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader(); //!đọc các nguồn dữ liệu trên máy tính của người dùng
      //! onloadend :được kích hoạt khi quá trình đọc kết thúc, thành công hoặc không thành công
      reader.onloadend = () => {
        //!result:Nội dung của nguồn dữ liệu sau khi đọc thành công
        setImgPreview(reader.result);
      };
    }
  };
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
                <input
                  type="file"
                  id="fileUpload"
                  onChange={handleImageChange}
                />
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
