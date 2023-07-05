import { gql } from 'graphql-tag';

export const typeDefs = gql`
type WorldBankDSLine {
  country_name: String
  country_iso_code: String
  year: String
  indicator_name: String
  indicator_code: String
  value: Float
  unity: String
}

type Query {
  getWorldBankIndicators(country_iso_code: String!, indicator_code: String!, year: String): [WorldBankDSLine]
}
`
