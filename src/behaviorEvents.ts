/**
 * @description behaviorEvents - here we write functions that will perform some action
 * at the event. Called in the eventsContract module,
 * initialEventsContract functions in contract event subscription callback
 * @param {string} event
 * @param {ObjectEventType} info object from the event for manipulations with returned data
 * @returns {void} void
 *
 * @howToWork You have to describe everything yourself - perhaps it will be notifications for the user or something else
 */
export const behaviorEvents = (event: string, info: ObjectEventType) => {
  switch (event) {
    case 'Approval':
      return () => {
        return info;
      };
    case 'Transfer':
      return () => {
        return info;
      };
    case 'CoinsWithdrawn':
      return () => {
        return info;
      };
    case 'PriceChanged':
      return () => {
        return info;
      };
    case 'TokensPurchased':
      return () => {
        return info;
      };
    case 'TokensWithdrawn':
      return () => {
        return info;
      };
    case 'Staked':
      return () => {
        return info;
      };
    case 'UnStaked':
      return () => {
        return info;
      };
    case 'Bought':
      return () => {
        return info;
      };
    case 'Invested':
      return () => {
        return info;
      };
    case 'Withdrawn':
      return () => {
        return info;
      };
    case 'Frozen':
      return () => {
        return info;
      };
    case 'UnFrozen':
      return () => {
        return info;
      };
    default:
      break;
  }
};
