import { request, gql } from 'graphql-request'

export const buildQuery = (countryCode: string, indicatorCode: string, startingYear: string, endingYear: string) => (
  gql`
  {
    ${countryCode}: getWorldBankIndicators(country_iso_code: "${countryCode}", indicator_code: "${indicatorCode}", starting_year: "${startingYear}", ending_year: "${endingYear}") {
      year
      value
    }
  }
  `
)

function compareYear(a: any, b: any) {
  const aYearInt = parseInt(a.year)
  const bYearInt = parseInt(b.year)

  if (aYearInt > bYearInt) {
    return 1
  }

  if (aYearInt < bYearInt) {
    return -1
  }
  return 0
}

export type ProtoDataset = {
  labels: string[]
  data: number[]
}

function resultToProtoDataset(result: any[]) {
  let buf: ProtoDataset = {
    labels: [],
    data: []
  }
  result.forEach((res: any) => {
    buf.labels.push(res.year)
    buf.data.push(res.value)
  })

  return buf
}

export const fetcher = async ([countryCode, indicatorCode, startingYear, endingYear]: string[]) => {
  console.log('startingYear', startingYear)
  console.log('endingYear', endingYear)
  let res = await request('/api/graphql', buildQuery(countryCode, indicatorCode, startingYear, endingYear))
  res = (res as any)[countryCode]
  res = (res as any[]).sort(compareYear)
  return resultToProtoDataset(res as any[])
}
