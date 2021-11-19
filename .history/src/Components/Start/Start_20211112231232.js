import React from "react";
import { FaStar } from "react-icons/fa";
const Start = () => {
  const [start, setStart] = useState(["", "", "", "", ""]);
  const [rating, setRating] = useState("");
  return (
    <>
      {start.map((item, i) => {
        const countValue = i + 1;
        return (
          <>
            <label htmlFor="">
              <input
                type="radio"
                name="rating"
                value={rating}
                onClick={() => setRating(countValue)}
              />
              <FaStar
                size={100}
                className="star"
                color={countValue <= rating ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setRating(countValue)}
                onMouseLeave={() => setRating(rating)}
              />
            </label>
          </>
        );
      })}
      <h1>Ban da danh gia la :{rating}* </h1>
    </>
  );
};

export default Start;
