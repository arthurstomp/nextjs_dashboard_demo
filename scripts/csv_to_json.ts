import * as fs from 'fs';
import * as path from 'path';

const filePath = process.argv[2]
console.log("Converting CSV to JSON...")
console.log("CSV filepath: ", filePath)

const file = fs.readFileSync(filePath, 'utf-8')
console.log("File line count: ", file.length)
const lines = file.split(/\r?\n/)
console.log('lines length', lines.length)
const headersLine = lines.shift()
console.log("Headers Line")
console.log(headersLine)
const headers = headersLine?.split(',').map((header) => {
  return header.replace(' ', '')
})
console.log("Headers")
console.log(headers)

// Discard one line
lines.shift()
// Discard last line
lines.pop()

const data = lines.map(line => {
  if (line.length === 0) {
    return null
  }
  const columns = line.split(',')
  let buf: any = {}

  headers?.forEach((header: string, index: number) => {
    buf[header] = columns[index]
  })
  return buf
})

console.log('Converted data', JSON.stringify(data, null, 2))

const convertedJson = {
  headers,
  data
}

const convertedFilePath = filePath.replace('.csv', '.json')

console.log('converted file path', convertedFilePath)

fs.writeFileSync(convertedFilePath, JSON.stringify(convertedJson, null, 2))

export default {}
