/* Generates an action creator.
 * @param type [String] The action type as a constant, e.g. ADD_TODO
 * @param [...propNames] [String] The string name of each action property as arguments
 * @return [Object] The action creator.
 * @example
 */

export default function generateActionCreator(type, ...propNames) {
  return function actionCreator(...args) {
    const actionProps = {}
    propNames.forEach((prop, idx) => {
      actionProps[prop] = args[idx]
    })
    return { type, ...actionProps }
  }
}
