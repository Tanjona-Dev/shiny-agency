import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (url) {
      async function fetchData() {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setData(data);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setError(true);
        }
      }
      setIsLoading(true);
      fetchData();
    }
  }, [url]);
  return { isLoading, data, error };
}
export default useFetch;
