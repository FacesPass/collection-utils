interface targetObj extends Object {
  [key: string]: any
}

function removeProperty(target: targetObj, toBeRemoved: string) {
  const { [toBeRemoved]: _, ...newTarget } = target

  return newTarget
}


