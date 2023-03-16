import { getMethodsContract } from '../contract';

/**
 * @description The ContractsAPI object implements the ContractsMethods interface and contains contract instances for dapp
 * 
 * @example
  const ContractsAPI: ContractsMethods = {
    Token: getMethodsContract<TokenMethods>('token'),
    Sale: getMethodsContract<SaleMethods>('sale'),
    Staking: getMethodsContract<BaseStakingMethods>('staking'),
    Freeze: getMethodsContract<FreezeStakingMethods>('freeze'),
  }
  
  // How used
  ContractsAPI.Token.decimals();

 */
const ContractsAPI: ContractsMethods = {
  Example: getMethodsContract<ExampleContractMethods>('example'),
};

// Экспортируем
export { ContractsAPI };
