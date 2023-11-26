import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGenreParams = searchParams.getAll("genre");
  const initialSortParams = searchParams.get("sortBy");
  const [category, setCategory] = useState(initialGenreParams || []);
  const [sortBy, setSortBy] = useState(initialSortParams || "");

  const handleGenreChange = (e) => {
    const option = e.target.value;
    let newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };
  useEffect(() => {
    if (category || sortBy) {
      const params = {};
      category && (params.genre = category);
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
    }
  }, [category, setSearchParams, sortBy]);

  return (
    <div>
      <h3>Filter</h3>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Fiction")}
          value="Fiction"
          onChange={handleGenreChange}
        />
        <label>Fiction</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Classics")}
          value="Classics"
          onChange={handleGenreChange}
        />
        <label>Classics</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Dystopian")}
          value="Dystopian"
          onChange={handleGenreChange}
        />
        <label>Dystopian</label>
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Romance")}
          onChange={handleGenreChange}
          value="Romance"
        />
        <label>Romance</label>
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Fantasy")}
          onChange={handleGenreChange}
          value="Fantasy"
        />
        <label>Fantasy</label>
      </div>

      <h3>Sort</h3>
      <div onChange={handleSortBy}>
        <div>
          <input
            type="radio"
            value="asc"
            name="sortBy"
            defaultChecked={sortBy === "asc"}
          />
          <label>Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            name="sortBy"
            value="desc"
            defaultChecked={sortBy === "desc"}
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;
