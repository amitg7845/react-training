import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await fetch(url);
      const response = await data.json();

      // console.log(response, "data");
      const items = Array.isArray(response.comments) ? response.comments : [];

      if (items.length === 0) {
        // empty case
        console.log("No items");
        // next task for "no items"
      } else {
        // non‑empty case
        // console.log("Items:", items);
        // next task for when items exist
        setData(response);
        setLoading(false);
        toast.success("Successfull loaded data from API");
      }
    }
    fetchData();
  }, [url]);

  return [data, loading];
}
