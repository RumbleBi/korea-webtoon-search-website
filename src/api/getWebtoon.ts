import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API;

export const getWebtoons = async () => {
  try {
    const res: AxiosResponse<AxiosRequestConfig> = await axios({
      method: "get",
      url: baseUrl,
    });
    return res.data;
  } catch (e) {
    return e;
  }
};
