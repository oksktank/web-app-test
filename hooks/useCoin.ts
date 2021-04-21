import axios from "axios";
import { useQuery } from "react-query";

interface Coin {
  market: string;
  korean_name: string;
  english_name: string;
}

const useCoin = () => {
  const { data, isFetching } = useQuery("coinList", async () => {
    const data = await axios.get(
      "https://api.upbit.com/v1/market/all?isDetails=false"
    );
    await new Promise((r) => setTimeout(r, 1500));
    return data;
  });
  return {
    data: data
      ? (data.data
          .filter((row) => row.market.startsWith("KRW"))
          .slice(0, 20) as Coin[])
      : [],
    isFetching,
  };
};

export default useCoin;
