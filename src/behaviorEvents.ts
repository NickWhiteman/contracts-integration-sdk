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
    case '':
      return () => {
        return info;
      };
    default:
      break;
  }
};
