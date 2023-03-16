// In this file, it is necessary to describe all interfaces of contracts in accordance with the ABI of smart contracts.
// Later, this process will be automated and the types will be generated independently, but at this stage it will have
// to be done by hand. And you need to describe all types of return values ​​by analogy with the provided documentation.

/**
 * @description window interface scaling
 */
interface Window {
  ethereum: any;
}

/**
 * @description Event object type - used as an accepted parameter in initialEventsContract and behaviorEvents.
 * You need to specify all the fields that can be in the contract event object.
 */
type ObjectEventType = {
  user?: string;
  period?: bigint;
  amount?: bigint;
  coinsAmount?: bigint;
  tokensAmount?: bigint;
  owner?: string;
  spender?: string;
  value?: bigint;
  from?: string;
  to?: string;
  level?: bigint;
};

/**
 * @description This type is necessary for the helper functions to work with which ABI and address to map the object with contract methods.
 * 
 * @example
  type TypeContract = 'token' | 'sale' | 'staking';
 */
type TypeContract = string;

/**
 * @description An example of a contract interface to be encapsulated by the ContractsMethods interface
 * 
 * @example 
 * // On the example of the IERC20 interface
    interface TokenMethods {
      name: () => Promise<string>;
      symbol: () => Promise<string>;
      decimals: () => Promise<number>;
      totalSupply: () => Promise<bigint>;
      balanceOf: (address: string) => Promise<bigint>;
      transfer: (to: string, amount: BigNumber, opt?: EmptyType) => Promise<boolean>;
      allowance: (owner: string, spender: string) => Promise<bigint>;
      approve: (spender: string, amount: BigNumber, opt?: EmptyType) => Promise<boolean>;
      transferFrom: (from: string, to: string, amount: bigint, opt?: EmptyType) => Promise<boolean>;
      decreaseAllowance: (spender: string, subtractedValue: bigint, opt?: EmptyType) => Promise<boolean>;
      increaseAllowance: (spender: string, addedValue: bigint, opt?: EmptyType) => Promise<boolean>;
    }
 */
interface ExampleContractMethods {
  [key: string]: Promise<unknown>;
  exampleMethod: () => Promise<void>;
}

/**
 * @description The ContractsMethods interface regulates the ContractAPI object for working at the middleware level
 * and business logic design. contains smart contracts, which are parts of dapp entities
 *
 * @example
 *  const ContractsAPI: ContractsMethods = {
        Token: getMethodsContract<TokenMethods>('token'),
        Sale: getMethodsContract<SaleMethods>('sale'),
        Staking: getMethodsContract<BaseStakingMethods>('staking'),
        Freeze: getMethodsContract<FreezeStakingMethods>('freeze'),
    };
 *
 * @whenApplied This interface is used in ./api-contract/ApiContracts.ts
 */
interface ContractsMethods {
  [key: string]: unknown;
  /**
   *  For example - must be removed when completing this interface
   * */
  Example: ExampleContractMethods;
}
