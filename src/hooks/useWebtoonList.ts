import { axiosInstance } from "@/api";
import { useQuery } from "react-query";
import { queryKeys } from "../react-query/constants";

interface IWebtoonList {
  additional?: {
    new?: boolean;
    adult?: boolean;
  };
  fanCount?: number;
  img?: string;
  searchKeyword?: string;
  service?: string;
  title?: string;
  updateDays?: string[];
  url?: string;
  webtoonId?: number;
  _id?: string;
}

async function getWebtoonList(): Promise<IWebtoonList[]> {
  const { data } = await axiosInstance.get("/?perPage=60&page=0");
  return data.webtoons;
}

export function useWebtoonList(): IWebtoonList[] | undefined {
  const { data } = useQuery(queryKeys.webtoonList, getWebtoonList);
  return data;
}
