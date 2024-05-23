import { useState } from "react";
import { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";

const Sortbox = () => {
  const [sortType, setSortType] = useState("default");
  const {setSort} = useContext(ApiContext);

  const handleSortChange = (event) => {
    setSortType(event.target.value);
    setSort(event.target.value);
  };

  return (
    <div className="">
      <h2>Sort Box</h2>
      <select value={sortType} onChange={handleSortChange}>
        <option value="new">Recently Added</option>
        <option value="price">Price</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
};

export default Sortbox;
