import { expect } from "chai";
import { ethers } from "hardhat";

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });

describe("Learning", function () {
  it("abc", async function () {
    const DemoContract = await ethers.getContractFactory("MyToken");
    const demo = await DemoContract.deploy();
    await demo.deployed();

    // const res = await demo.add();
    // console.log(res);
    // console.log(demo._address);
    // await demo.sleep();
    // const res = await demo.getBalance();
    // console.log(res);
  });
});
