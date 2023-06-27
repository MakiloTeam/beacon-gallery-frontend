'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/beacons');
      const { data } = response;

      setData(data.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  if (typeof window !== 'undefined') {
    window.beaconFound = (macAddress, rssi) => {
      setData([...data, { macAddress: macAddress, rssi: rssi }]);
    };
  } else {
    console.log('window is undefined');
  }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="mx-auto p-5 max-w-xl">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Mac Address</th>
            <th className="border px-4 py-2">RSSI</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.macAddress}</td>
              <td className="border px-4 py-2">
                {/* <img
                  src={item.image_url}
                  className="w-24 h-auto"
                /> */}
                {item.rssi}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="my-2 p-2 border-solid border-2 border-lime-700 bg-lime-500 text-black bg-"
        onClick={() => fetchData()}
      >
        Fetch Data
      </button>
    </div>
  );
}
