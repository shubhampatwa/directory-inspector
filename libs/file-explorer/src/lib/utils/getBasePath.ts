import { sep } from 'path-browserify'

const getBasePath = (path: string): string => {
  const [_, basepath] = path.split(sep)
  return basepath;
}

export default getBasePath;
