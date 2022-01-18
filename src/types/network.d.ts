type NetworkName = string
type TerraNetworks = Record<NetworkName, TerraNetwork>

interface TerraNetwork {
  name: NetworkName
  chainID: string
  lcd: string
}

interface CustomNetwork extends TerraNetwork {
  preconfigure: boolean
}
