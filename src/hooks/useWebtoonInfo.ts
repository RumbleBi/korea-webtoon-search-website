import { axiosInstance } from "@/api";
import { useQuery } from "react-query";
import { queryKeys } from "../react-query/constants";

interface IWebtoonInfo {
  createdWebtoonCount?: number;
  kakaoPageWebtoonCount?: number;
  kakaoWebtoonCount?: number;
  lastUpdate?: string;
  naverWebtoonCount?: number;
  totalWebtoonCount?: number;
  updatedWebtoonCount?: number;
  webtoons?: Object[];
}

async function getWebtoonInfo(): Promise<IWebtoonInfo> {
  const { data } = await axiosInstance.get("");
  return data;
}

export function useWebtoonInfo(): IWebtoonInfo | undefined {
  const { data } = useQuery(queryKeys.webtoonInfo, getWebtoonInfo);
  return data;
}
