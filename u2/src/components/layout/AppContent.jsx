import { Layout, Typography } from "antd";
import { useCrypto } from "../../context/crypto-context";
import PortfolioChart from "../PortfolioChart";
import AssetsTable from "../AssetsTable";

const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 60px)",
  color: "#fff",
  backgroundColor: "#001529",
  padding: '1rem',
};

export default function AppContent() {
  const{assets, crypto} = useCrypto()

  const cryptoPriceMap = crypto.reduce((acc, coin) => {
    acc[coin.id] = coin.price
    return acc
  }, {})

  return (
    <Layout.Content style={contentStyle}>
      <Typography.Title livel={3}style ={{textAlign: 'left', color: '#fff'}}>
        Portfolio: {''}
        {assets
        .map((assets) => assets.amount * cryptoPriceMap[assets.id] )
        .reduce((acc, v) => (acc += v), 0).toFixed(2)}$
        </Typography.Title>
        <PortfolioChart />
        <AssetsTable />
    </Layout.Content>
  )
}