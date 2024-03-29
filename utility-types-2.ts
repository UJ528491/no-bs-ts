type Name = {
  first: string
  last: string
}

function addFullName(name: Name): Name & {
  fullName: string
} {
  return {
    ...name,
    fullName: `${name.first} ${name.last}`,
  }
}

function permuteRows<T extends (...args: any[]) => any>(
  iteratorFunc: T,
  data: Parameters<T>[0][]
): ReturnType<T>[] {
  return data.map(iteratorFunc)
}

console.log(permuteRows(addFullName, [{ first: "jack", last: "herrington" }]))
