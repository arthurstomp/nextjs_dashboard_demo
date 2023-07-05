import React, { useState, useEffect, PropsWithoutRef } from 'react';
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
import useSWR from 'swr'
import { fetcher } from '@/utils/world_bank_client'
import { Props } from 'next/script';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Crop production index (2014-2016 = 100)',
    },
  },
};

export default function VerticalBarChart({className: wrapperClassName}: PropsWithoutRef<any>): JSX.Element {
  const [labels, setLabels] = useState<string[]>([])
  const [chinaDataset, setChinaDataset] = useState<number[]>([])
  const [indiaDataset, setIndiaDataset] = useState<number[]>([])
  const { data: dataChn , error: errorChn } = useSWR(['CHN', "AG.PRD.CROP.XD"], fetcher)
  const { data: dataInd , error: errorInd } = useSWR(['IND', "AG.PRD.CROP.XD"], fetcher)

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

