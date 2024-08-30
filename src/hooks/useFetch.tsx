import { useEffect, useState } from "react";
import { ICharacter, IError } from "../types/types";
import { useIntersectionObserver } from "usehooks-ts";
import { useAppStore } from "../store/store";

interface UseFetchData {
  data: ICharacter[] | ICharacter | null;
  error: IError | null;
  loading: boolean;
  // totalPages: number | null;
  ref: (node?: Element | null) => void;
}

const useFetch = (id?: string): UseFetchData => {
  const [data, setData] = useState<ICharacter[] | ICharacter>([]);
  const [error, setError] = useState<IError | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const { searchName } = useAppStore();

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const baseURL = `https://rickandmortyapi.com/api/character/`;
        let endpoint = !id ? `?page=${page}` : id;
        if (searchName) endpoint += `&name=${searchName}`;

        const response = await fetch(`${baseURL}${endpoint}`);
        if (!response.ok) throw new Error(response.status.toString());

        const res = await response.json();

        setData((prev) =>
          id
            ? res
            : page === 1
            ? res.results
            : [...(prev as ICharacter[]), ...res.results]
        );
      } catch (err) {
        if (err instanceof Error) {
          const status = parseInt(err.message, 10);
          setError({ code: status });
        } else {
          setError(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, id, searchName]);

  useEffect(() => {
    if (isIntersecting) setPage(page + 1);
  }, [isIntersecting]);

  return { data, error, loading, ref };
};

export default useFetch;
