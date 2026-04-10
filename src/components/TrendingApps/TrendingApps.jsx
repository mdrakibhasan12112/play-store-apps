import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa6';

const TrendingApps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      setApps(data);
    };
    fetchData();
  }, []);
  console.log(apps);
  return (
    <div className='container mx-auto'>
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold mb-2">Trending Apps</h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {apps.map(app => (
          <div key={app.id}>
            <div className="card bg-base-100 shadow-sm">
              <figure>
                <img src={app.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{app.title}</h2>

                <div className="flex justify-between items-center gap-4">
                  <span className="text-green-400 bg-gray-200 py-1 px-2 flex gap 1 items-center rounded-md">
                    <FaDownload />
                    {app.downloads}
                  </span>
                  <span className="text-orange-400 bg-gray-200 py-1 px-2 flex gap-1 items-center rounded-md">
                    <FaStar />
                    {app.ratingAvg}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingApps;
