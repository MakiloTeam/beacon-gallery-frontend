import { NextResponse } from 'next/server';

export async function GET() {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
  // const data = await res.json();

  const data = [
    {
      macAddress: 'Beacon 1',
      rssi: -50,
    },
    {
      macAddress: 'Beacon 2',
      rssi: -60,
    },
  ];

  return NextResponse.json({ data });
}
