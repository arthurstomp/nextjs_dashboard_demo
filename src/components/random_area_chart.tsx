import React, { useState, useEffect, PropsWithoutRef, useContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import useSWR from 'swr'
import { fetcher } from '@/utils/world_bank_client'
import { YearRangeContext } from '@/pages/dashboard_demo'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
      text: 'Fixed broadband subscriptions Vs. Mobile cellular subscriptions',
    },
  },
};

export default function App() {
  const [labels, setLabels] = useState<string[]>([])
  const [chinaDatasetMobile, setChinaDatasetMobile] = useState<number[]>([])
  const [chinaDatasetBroadband, setChinaDatasetBroadband] = useState<number[]>([])
  const [indiaDatasetMobile, setIndiaDatasetMobile] = useState<number[]>([])
  const [indiaDatasetBroadband, setIndiaDatasetBroadband] = useState<number[]>([])
  const { startingYear, endingYear } = useContext(YearRangeContext)

  const { data: dataChnMobile , error: errorChnMobile } = useSWR(['CHN', "IT.CEL.SETS", startingYear, endingYear], fetcher)
  const { data: dataChnBroadband , error: errorChnBroadband } = useSWR(['CHN', "IT.NET.BBND", startingYear, endingYear], fetcher)
  const { data: dataIndMobile , error: errorIndMobile } = useSWR(['IND', "IT.CEL.SETS", startingYear, endingYear], fetcher)
  const { data: dataIndBroadband , error: errorIndBroadband } = useSWR(['IND', "IT.NET.BBND", startingYear, endingYear], fetcher)

  useEffect(() => {
    setLabels(dataChnMobile?.labels || [])
    setChinaDatasetMobile(dataChnMobile?.data || [])
  }, [dataChnMobile])

  useEffect(() => {
    setLabels(dataChnBroadband?.labels || [])
    setChinaDatasetBroadband(dataChnBroadband?.data || [])
  }, [dataChnBroadband])

  useEffect(() => {
    setLabels(dataIndMobile?.labels || [])
    setIndiaDatasetMobile(dataIndMobile?.data || [])
  }, [dataIndMobile])

  useEffect(() => {
    setLabels(dataIndBroadband?.labels || [])
    setIndiaDatasetBroadband(dataIndBroadband?.data || [])
  }, [dataIndBroadband])

  if (errorChnMobile || errorChnBroadband || errorIndMobile || errorIndBroadband) {
    if (errorChnMobile) {
      console.log(errorChnMobile)
    }
      if (errorChnBroadband) {
        console.log(errorChnBroadband)
      }

    if (errorIndMobile) {
      console.log(errorIndMobile)
    }
    if (errorIndBroadband) {
      console.log(errorIndBroadband)
    }
  }
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'China mobile cellular subscription',
        data: chinaDatasetMobile,
        borderColor: 'rgb(216, 27, 96)',
        backgroundColor: 'rgba(216, 27, 96, 0.5)',
      },
      {
        fill: true,
        label: 'China fixed broadband subscription',
        data: chinaDatasetBroadband,
        borderColor: 'rgb(230, 81, 0)',
        backgroundColor: 'rgba(230, 81, 0, 0.5)',
      },
      {
        fill: true,
        label: 'India mobile cellular subscription',
        data: indiaDatasetMobile,
        borderColor: 'rgb(104, 159, 56)',
        backgroundColor: 'rgba(104, 159, 56, 0.5)',
      },
      {
        fill: true,
        label: 'India fixed broadband subscription',
        data: indiaDatasetBroadband,
        borderColor: 'rgb(3, 155, 229)',
        backgroundColor: 'rgba(3, 155, 229, 0.5)',
      }
    ],
  };

  return <Line options={options} data={data} />;
}

