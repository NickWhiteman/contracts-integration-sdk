import { Contract, ethers } from 'ethers';
import { parseEther } from 'ethers/lib/utils';
import { abiQualifier, contractMapping, contractQualifier } from './utils/contractHelpers';

/**
 * @returns {ethers.providers.Web3Provider} returns an object ethers.providers.Web3Provider.
 * @link https://docs.ethers.org/
 */
export const getProvider = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  return provider;
};

/**
 * @returns {JsonRpcSigner} returns a JsonRpcSigner object.
 * @code Get to know how it works under the path: node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts
 * @link https://docs.ethers.org/v5/api/providers/jsonrpc-provider/#JsonRpcProvider
 */
export const getSigner = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  return signer;
};

/**
 * @returns {Contract} returns an object of type Contract.
 * @code Get to know how it works under the path: node_modules/@ethersproject/contracts/src.ts/index.ts
 * @link https://docs.ethers.org/v5/api/contract/contract/#Contract-connect
 */
export const getContract = (type: TypeContract): Contract => {
  const signer = getSigner();
  const contract = new ethers.Contract(contractQualifier(type), abiQualifier(type), signer);

  return contract;
};

/**
  * @description sendTransaction - отправить транзакцию адресату.
  * @param {string} to - wallet address.
  * @param {string} value - how much to send in string format as example '0.1'.
  *
  * @example
    sendTransaction(CONTRACT_ADDRESS_SALE, '0.1');
  */
export const sendTransaction = (to: string, value: string) => {
  const signer = getSigner();
  signer.sendTransaction({
    to,
    gasLimit: parseEther('0.0000000000021'),
    value: parseEther(value),
  });
};

/**
 * @description This function returns an object with all methods isolated from the general functionality of ethers.js.
 * performing dapp business logic functions.
 * @generic <TokenMethods> - Generic accepts one type of some contract parameters when calling the mapping function
 * the contract of the object with the methods corresponds to the signature of the surface.
 * @example
  // It is recommended to scale generic inheritance to improve code support and logic understanding
  export const getMethodsContract = <
    T extends 
      | TokenMethods 
      | SaleMethods 
      | BaseStakingMethods 
      | FreezeStakingMethods
      | LevelMethods 
      | RepoMethods 
      | OptionMethods
  >
 * @returns returns an object of type nested in generic <T>
 * @file this method is used ./api-contract/ApiContrasts.ts
 */
export const getMethodsContract = <T extends ExampleContractMethods>(type: TypeContract): T => {
  const contract = getContract(type);

  const methodsContract = Object.fromEntries(
    Object.entries(contract).filter(([key, value]) => contractMapping(key, type)),
  ) as T;

  return methodsContract;
};
