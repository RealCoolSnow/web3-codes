import { ethers } from 'ethers'

const web3Provider = new ethers.providers.Web3Provider(window.ethereum)
const daiAddress = 'dai.tokens.ethers.eth'
const daiAbi = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',

  'function balanceOf(address) view returns (uint)',

  'function transfer(address to, uint amount)',

  'event Transfer(address indexed from, address indexed to, uint amount)',
]
const daiContract = new ethers.Contract(daiAddress, daiAbi, web3Provider)

export { web3Provider, daiContract }
