import { getErrorMessage } from "utils/error"
import Layout from "components/layout"
import { Banner, Content, Header, Sidebar, Page } from "components/layout"
import { ErrorBoundary, Wrong } from "components/feedback"

/* routes */
import { useNav } from "./routes"

/* banner */
import NetworkName from "./sections/NetworkName"

/* sidebar */
import Nav from "./sections/Nav"
import Aside from "./sections/Aside"

/* header */
import Refresh from "./sections/Refresh"
import Preferences from "./sections/Preferences"
import SelectNetwork from "./sections/SelectNetwork"
import SelectTheme from "./sections/SelectTheme"
import ConnectWallet from "./sections/ConnectWallet"

/* extra */
import LatestTx from "./sections/LatestTx"
import ValidatorButton from "./sections/ValidatorButton"
import DevTools from "./sections/DevTools"

/* init */
import InitBankBalance from "./InitBankBalance"
import { useNodeInfo } from "data/queries/tendermint"
import Overlay from "./components/Overlay"
import NetworkError from "./NetworkError"

const App = () => {
  const { element: routes } = useNav()
  const { isError } = useNodeInfo()

  if (isError) {
    return (
      <Overlay>
        <NetworkError />
      </Overlay>
    )
  }

  return (
    <Layout>
      <Banner>
        <NetworkName />
      </Banner>

      <Sidebar>
        <Nav />
        <Aside />
      </Sidebar>

      <Header>
        <DevTools />
        <section>
          <Refresh />
          <Preferences />
          <SelectNetwork />
          <SelectTheme />
        </section>
        <ValidatorButton />
        <ConnectWallet />
        <LatestTx />
      </Header>

      <Content>
        <ErrorBoundary fallback={fallback}>
          <InitBankBalance>{routes}</InitBankBalance>
        </ErrorBoundary>
      </Content>
    </Layout>
  )
}

export default App

/* error */
export const fallback = (error: Error) => (
  <Page>
    <Wrong>{getErrorMessage(error)}</Wrong>
  </Page>
)
