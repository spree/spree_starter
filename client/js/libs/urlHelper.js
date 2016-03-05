export function fullPath(location) {
  return `${location.pathname}.json${location.search}`
}

export function isPathEqual(location, otherLocation) {
  return fullPath(location) === fullPath(otherLocation)
}
