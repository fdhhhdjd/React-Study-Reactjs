import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchJson = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [post, setPost] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPost(response.data);
      setLoading(false);
    };
    loadData();
  }, []);
  if (loading) return <h2>Loading...</h2>;
  return (
    <>
      <input
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {post
        .filter((value) => {
          if (search === "") {
            return value;
          } else if (value.title.toLowerCase().includes(search.toLowerCase())) {
            return value;
          }
        })
        .map((item) => (
          <h5 key={item.id}>{item.title}</h5>
        ))}
    </>
  );
};

export default SearchJson;
