import { useTranslation } from "react-i18next"
import Logo from "styles/images/LocalTerra.png"
import { useNetworkState } from "data/wallet"
import { Button, ExternalLink } from "components/general"
import { FlexColumn } from "components/layout"
import styles from "./NetworkError.module.scss"

const NetworkError = () => {
  const { t } = useTranslation()
  const [network, setNetwork] = useNetworkState()

  const isLocalTerra = network === "localterra"

  return (
    <FlexColumn gap={20}>
      <img src={Logo} alt={t("Logo")} width={60} height={60} />

      <article>
        <h1 className={styles.title}>
          {isLocalTerra
            ? t("LocalTerra doesn't seem to be running")
            : t(`${network} doesn't seem to be running`)}
        </h1>

        {isLocalTerra && (
          <p>
            <ExternalLink href="https://github.com/terra-money/localterra">
              LocalTerra
            </ExternalLink>{" "}
            is a one-click local Terra testnet & ecosystem for easy development
            of smart contracts and Terra tools
          </p>
        )}
      </article>

      <Button onClick={() => setNetwork("mainnet")} size="small" outline>
        {t("Back to mainnet")}
      </Button>
    </FlexColumn>
  )
}

export default NetworkError
