import firstNames from '../data/firstWords'
import secondNames from '../data/secondWords'

let elements = ['Water', 'Air', 'Fire', 'Earth']

const rand = (x) => Math.floor(Math.random() * (x - 1))

const createName = () => `${firstNames[rand(firstNames.length)]} ${secondNames[rand(secondNames.length)]}`

const createElement = () => elements[rand(elements.length)]

// const addKeys = (val, key) => ({key, ...val
// })

let i = 0
const createContact = () => ({
    key: i++,
    name: createName(),
    element: createElement()
  })

export const compareNames = (obj1, obj2) => obj1.name > obj2.name
export const compareElements = (obj1, obj2) => obj1.element > obj2.element

let contactArr = Array.from({ length: 500 }, createContact)
export default contactArr