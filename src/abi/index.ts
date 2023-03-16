import { ExampleABI } from './example-abi';

/**
 * @description This is an ABI type
 * @howUsed it is necessary to enumerate all ABI objects through the operator |
 * @example
  type ABIType =
  | typeof TokenABI
  | typeof SaleABI
  | typeof StakingABI
  | typeof FreezingStakingABI;
 */
type ABIType = typeof ExampleABI;

export type { ABIType };

export { ExampleABI };
