// react-router-redux devs love breaking changes
// so we need helper to get location
// (or something like location)

export function getRoutingLocation(routing) {
  return routing && routing.locationBeforeTransitions
}
