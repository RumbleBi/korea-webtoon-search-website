import { axiosInstance } from "@/api";
import { useQuery } from "react-query";
import { queryKeys } from "../react-query/constants";

interface WebtoonList {
  additional: {
    new: boolean;
    adult: boolean;
  };
  fanCount: number;
  img: string;
  searchKeyword: string;
  service: string;
  title: string;
  updateDays: string[];
  url: string;
  webtoonId: number;
  _id: string;
}

async function getWebtoonList() {
  const { data } = await axiosInstance.get("/?perPage=60&page=0");
  return data.webtoons;
}

export function useWebtoonList(): WebtoonList[] {
  const fallback: [] = [];
  const { data = fallback } = useQuery(queryKeys.webtoonList, getWebtoonList, {
    onError: (error) => {
      const title = error instanceof Error ? error.message : "서버 연결에 문제가 있습니다.";
      alert(title);
    },
  });
  return data;
}