import { Contract } from 'ethers';
import { behaviorEvents } from './behaviorEvents';
import { getContract } from './contract';
import { eventName } from './utils/contractEventKeys';

/**
 * @description The array must contain keys, similar to TypeContract
 * @file See ./types.d.ts
 */
const contractType = ['token', 'sale', 'staking', 'freeze', 'level', 'repo', 'option'];

/**
 * @description This function must be called the first time the application is rendered on the client to handle events.
 */
export const initialEventsContract = () => {
  const structureContract: Contract[] = contractType.map((contract) => getContract(contract as TypeContract));

  // Events subscription
  for (const chapter of eventName) {
    for (const name of chapter) {
      structureContract[chapter.indexOf(name)].on(name, (args: ObjectEventType) => {
        const info: ObjectEventType = {
          ...args,
        };

        behaviorEvents(name, info);
      });
    }
  }
};
