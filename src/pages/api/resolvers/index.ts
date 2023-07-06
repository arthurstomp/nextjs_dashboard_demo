import { promises as fs } from 'fs';
import * as path from 'path';

const chinaIndicatorsFilePath = path.join(process.cwd(), 'src/assets/graphql/world_bank_indicators/world_bank_indicators_chn.json')
const indiaIndicatorsFilePath = path.join(process.cwd(), 'src/assets/graphql/world_bank_indicators/world_bank_indicators_ind.json')

export const resolvers = {
  Query: {
    getWorldBankIndicators: async (_: never, args: any) => {
      try {
        let choosenFilePath

        if (args.country_iso_code === 'CHN') {
          choosenFilePath = chinaIndicatorsFilePath
        } else {
          choosenFilePath = indiaIndicatorsFilePath
        }

        const file = await fs.readFile(choosenFilePath, { encoding: 'utf-8'})
        if (file) {
          const indicatorsJson = JSON.parse(file)
          const data = indicatorsJson.data
          const filteredData = data.filter((d: any) => {
            return d.IndicatorCode === args.indicator_code
          })

          return filteredData.map((d: any) => ({
            country_name: d.CountryName,
            country_iso_code: d.CountryISO3,
            year: d.Year,
            indicator_name: d.IndicatorName,
            indicator_code: d.IndicatorCode,
            value: d.Value
          }))
        } else {
          return []
        }
      } catch (error) {
        throw error;
      }
    }
  }
};
