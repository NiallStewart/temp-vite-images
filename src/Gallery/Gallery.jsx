import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "../Image";
import { useGlobalContext } from "../context";
import { useEffect } from "react";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchValue } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchValue],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchValue}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section>
        <h4>There was an error...</h4>
      </section>
    );
  }
  const results = response.data.results;
  if (results.length === 0) {
    return (
      <section>
        <h4>No results</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((result) => {
        const id = result?.id;
        const url = result?.urls.full;
        const alt = result.alt_description;
        return <Image key={id} url={url} description={alt} />;
      })}
    </section>
  );
};
export default Gallery;
