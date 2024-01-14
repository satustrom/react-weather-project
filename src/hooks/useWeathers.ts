import { useEffect, useState } from "react";
import axios from "axios";

export type Weather = {
  id: number;
  address: string;
  temp: number;
  feelslike: number;
};

export const useWeathers = () => {
  const [data, setData] = useState<Weather[] | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(import.meta.env.VITE_WEATHER_API_URL);
      setData(response.data);
      setIsError(false);
    } catch {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isError, isLoading };
};
