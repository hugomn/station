import { useTranslation } from "react-i18next"
import Logo from "styles/images/LocalTerra.png"
import { Button, ExternalLink } from "components/general"
import { useNetworkState } from "data/wallet"

const NetworkError = () => {
  const { t } = useTranslation()
  const [network, setNetwork] = useNetworkState()

  return (
    <article>
      <img src={Logo} alt="LocalTerra" width={60} height={60} />

      <h1>{t("LocalTerra doesn't seem to be running")}</h1>

      <p>
        {t(
          "LocalTerra is a one-click local Terra testnet & ecosystem for easy development of smart contracts and Terra tools."
        )}

        <ExternalLink href="https://github.com/terra-money/localterra" icon />
      </p>

      <Button onClick={() => setNetwork("mainnet")}>
        {t("Back to mainnet")}
      </Button>
    </article>
  )
}

export default NetworkError
