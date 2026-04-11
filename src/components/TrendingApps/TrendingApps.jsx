import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa6';
import { ColorRing } from 'react-loader-spinner';

const TrendingApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      setApps(data);

      setTimeout ( () => {
        setApps(data);
        setLoading(false);
      },2000);
    };
    fetchData();
  }, []);
  console.log(apps);
  return (
    <div className="container mx-auto py-12">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold mb-2">Trending Apps</h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      {loading ? (
       
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        
      ) : (
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
      )}
    </div>
  );
};

export default TrendingApps;
