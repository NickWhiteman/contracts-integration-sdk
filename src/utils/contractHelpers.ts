import { ABIType } from '../abi';
import { ExampleABI } from '../abi/example-abi';
import { EXAMPLE_CONTRACT_ADDRESS } from './contractAddress';
import { contractExample } from './contractKeys';

/**
 * @description contractQualifier - the function returns the address of the contract according to the type passed
 * @param {TypeContract} type - the string pointing to the address of the contract depending on its role in the dapp
 * @returns {string} address contract
 * 
 * @example
  export const contractQualifier = (type: TypeContract): string => {
    return type === 'token'
      ? CONTRACT_ADDRESS_TOKEN
      : type === 'sale'
      ? CONTRACT_ADDRESS_SALE
      : type === 'staking'
      ? CONTRACT_ADDRESS_STAKING
      : CONTRACT_ADDRESS_FREEZING_STAKING;
  };
 */
export const contractQualifier = (type: TypeContract): string => {
  return type === 'example'
    ? EXAMPLE_CONTRACT_ADDRESS
    : type === 'two-example'
    ? EXAMPLE_CONTRACT_ADDRESS
    : EXAMPLE_CONTRACT_ADDRESS;
};

/**
 * @description abiQualifier - the function returns a specific ABI corresponding to the contract.
 * @param type - the string pointing to a specific ABI of the contract.
 * @returns {ABIType} ABIType - the ABI type described in ./../../abi/index.ts and imported.
 */
export const abiQualifier = (type: TypeContract): ABIType => {
  return type === 'example' ? ExampleABI : type === 'two-example' ? ExampleABI : ExampleABI;
};

/**
 * @description contractMapping - contract mapping function for getMethodsContract.
 * @param key - method key.
 * @param type - the  string pointing to a specific variable with contract keys for object mapping
 * with isolated methods.
 * @returns {boolean} boolean - true/false segregation of contract methods to be put into entity object.
 */
export const contractMapping = (key: string, type: TypeContract): boolean => {
  return type === 'example'
    ? contractExample.includes(key)
    : type === 'two-example'
    ? contractExample.includes(key)
    : contractExample.includes(key);
};
