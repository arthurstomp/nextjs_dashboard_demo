import React, { PropsWithoutRef, useContext, useEffect, useState } from 'react';
import useSWR from 'swr'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { fetcher } from '@/utils/world_bank_client'
import { YearRangeContext } from '@/pages/dashboard_demo'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Net migration',
    },
  },
};

export default function HorizontalBarChart({className: wrapperClassName}: PropsWithoutRef<any>): JSX.Element {
  const [labels, setLabels] = useState<string[]>([])
  const [chinaDataset, setChinaDataset] = useState<number[]>([])
  const [indiaDataset, setIndiaDataset] = useState<number[]>([])
  const { startingYear, endingYear } = useContext(YearRangeContext)
  const { data: dataChn , error: errorChn } = useSWR(['CHN', "SM.POP.NETM", startingYear, endingYear], fetcher)
  const { data: dataInd , error: errorInd } = useSWR(['IND', "SM.POP.NETM", startingYear, endingYear], fetcher)

  useEffect(() => {
    setLabels(dataChn?.labels || [])
    setChinaDataset(dataChn?.data || [])
  }, [dataChn])

  useEffect(() => {
    setLabels(dataInd?.labels || [])
    setIndiaDataset(dataInd?.data || [])
  }, [dataInd])

  if (errorChn) {
    console.log(errorChn)
  }

  if (errorInd) {
    console.log(errorInd)
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'China',
        data: chinaDataset,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'India',
        data: indiaDataset,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <div className={wrapperClassName}>
      <Bar options={options} data={data} />;
    </div>
  )
}
