import { useWebtoonList } from "@/hooks/useWebtoonList";
import WebtoonListUI from "./WebtoonList.presenter";

export default function WebtoonList(): JSX.Element {
  const webtoonList = useWebtoonList();

  return <WebtoonListUI webtoonList={webtoonList} />;
}
