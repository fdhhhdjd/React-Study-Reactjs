import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input, Card } from "antd";
const SearchPart2 = () => {
  const [loading, setLoading] = useState(false);
  const [dataCountry, setDataCountry] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    setLoading(true);
    const fetchDta = async () => {
      const response = await axios.get("https://restcountries.eu/rest/v2/all");
      setDataCountry(response.data);
      setLoading(false);
    };
    fetchDta();
  }, []);
  const setCountry = (text) => {
    let a = dataCountry.filter((country) => {
      const regex = new RegExp(`${text}`, "gi"); //!la se tra lai toan bo gia tri value ve
      return country.name.match(regex) || country.capital.match(regex);
    });
    setSearch(a);
  };
  if (loading) return <h2>Loading...</h2>;
  return (
    <>
      <Input
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search"
        onChange={(e) => setCountry(e.target.value)}
      />
      {search &&
        search.map((item, index) => (
          <div key={index} style={{ marginLeft: "35%", marginTop: "5px" }}>
            <Card style={{ width: "50%" }} title={`Country: ${item.name}`}>
              Capital:{item.capital}
            </Card>
          </div>
        ))}
    </>
  );
};

export default SearchPart2;
