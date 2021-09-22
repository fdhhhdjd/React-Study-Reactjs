import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
const PaginatorPage = () => {
  const [post, setPost] = useState([]);
  const [total, setTotal] = useState("");
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/comments"
      );
      setPost(response.data);
      setTotal(response.data.length);
    };
    fetchData();
  }, []);
  const indexOfLastPage = page + postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPage = post.slice(indexOfFirstPage, indexOfLastPage);

  const onShowSizeChange = (current, pageSize) => {
    setPostPerPage(pageSize);
  };
  const itemRender = (current, type, original) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return original;
  };
  return (
    <div>
      {currentPage.map((item) => (
        <>
          <h3 key={item.id}>{item.body}</h3>
        </>
      ))}
      <Pagination
        pageSize={postPerPage}
        total={total}
        current={page}
        onChange={(e) => setPage(e)}
        showSizeChanger
        showQuickJumper
        onShowSizeChange={onShowSizeChange}
        itemRender={itemRender}
      />
    </div>
  );
};

export default PaginatorPage;
