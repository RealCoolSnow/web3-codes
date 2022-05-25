import React, { useEffect } from 'react'
import './index.css'
import { ethers } from 'ethers'
import { showAlert } from '@/utils/util'
import { daiContract, web3Provider } from '@/utils/ethers-util'

const Index = () => {
  useEffect(() => {
    console.log('app created')
  }, [])
  const requestAccount = async () => {
    const account = await web3Provider.send('eth_requestAccounts', [])
    const signer = web3Provider.getSigner()
    console.log(account, signer)
    showAlert(`wallet address: ${account}`)
  }
  const getBlockNumber = async () => {
    const blockNumber = await web3Provider.getBlockNumber()
    showAlert(`blockNumber: ${blockNumber}`)
  }
  const getBalance = async () => {
    const balance = await web3Provider.getBalance('ethers.eth')
    const balanceETH = ethers.utils.formatEther(balance)
    showAlert(`balance: ${balanceETH}`)
  }
  const functionList = [
    { f: requestAccount, data: '' },
    { f: getBlockNumber, data: '' },
    { f: getBalance, data: '' },
    {
      f: function daiContract_name() {
        daiContract.name().then((res: any) => {
          alert(res)
        })
      },
      data: '',
    },
    {
      f: function daiContract_balanceOf() {
        daiContract.balanceOf('ricmoo.firefly.eth').then((balance: any) => {
          alert(ethers.utils.formatUnits(balance, 18))
        })
      },
      data: '',
    },
  ]

  const functionView = functionList.map((item) => {
    return (
      <li
        onClick={item.f}
        key={item.f.name}
        className="border-b border-gray-300 p-2 active:text-blue-300"
      >
        {item.f.name}
      </li>
    )
  })

  return <ul className="p-2">{functionView}</ul>
}

export default Index
