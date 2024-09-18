import React from "react";

// interface Stats {
//   player: string;
//   level: number;
//   kills: number;
//   deaths: number;
//   assists: number;
//   networth: number;
//   lhDn: string;
//   gpm: number;
//   xpm: number;
// }
export default function StatsTable(props: any) {
  const { stats } = props;
  {
    console.log(stats);
    console.log(stats?.players[0].hero_kills);
  }
  // Sample data for the table
  const data = [
    {
      player: "Player 1",
      level: 25,
      kills: 10,
      deaths: 2,
      assists: 15,
      networth: 25000,
      lhDn: "300/50",
      gpm: 600,
      xpm: 550,
    },
    {
      player: "Player 2",
      level: 23,
      kills: 8,
      deaths: 5,
      assists: 12,
      networth: 18000,
      lhDn: "200/30",
      gpm: 500,
      xpm: 450,
    },
    // Add more player data as needed
  ];

  return (
    <div className="overflow-x-auto">
      <table className=" table-auto border-collapse border border-gray-700 shadow-lg">
        <thead>
          <tr className="bg-[#303249] text-[#888a97]">
            {" "}
            {/* Dark Dota background and gold text */}
            <th className="px-4 py-2 border border-gray-700">Player</th>
            <th className="px-4 py-2 border border-gray-700">Level</th>
            <th className="px-4 py-2 border border-gray-700">Kills</th>
            <th className="px-4 py-2 border border-gray-700">Deaths</th>
            <th className="px-4 py-2 border border-gray-700">Assists</th>
            <th className="px-4 py-2 border border-gray-700">Networth</th>
            <th className="px-4 py-2 border border-gray-700">LH/DN</th>
            <th className="px-4 py-2 border border-gray-700">GPM</th>
            <th className="px-4 py-2 border border-gray-700">XPM</th>
          </tr>
        </thead>
        <tbody>
          {data.map((stat, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-[#383a50]" : "bg-[#2a2c42]"}
            >
              {" "}
              {/* Alternating dark shades */}
              <td className="px-4 py-2 border border-gray-700 text-white">
                {stat.player}
              </td>
              <td className="px-4 py-2 border border-gray-700 text-white">
                {stat.level}
              </td>
              <td className="px-4 py-2 border border-gray-700 text-white">
                {/* {stats.players[0].hero_kills} */}
              </td>
              <td className="px-4 py-2 border border-gray-700 text-white">
                {stat.deaths}
              </td>
              <td className="px-4 py-2 border border-gray-700 text-white">
                {stat.assists}
              </td>
              <td className="px-4 py-2 border border-gray-700 text-white">
                {stat.networth}
              </td>
              <td className="px-4 py-2 border border-gray-700 text-white">
                {stat.lhDn}
              </td>
              <td className="px-4 py-2 border border-gray-700 text-white">
                {stat.gpm}
              </td>
              <td className="px-4 py-2 border border-gray-700 text-white">
                {stat.xpm}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
