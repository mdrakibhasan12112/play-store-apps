import React from 'react';
import Banner from '../../components/Banner/Banner';
import Stats from '../../components/Stats/Stats';
import TrendingApps from '../../components/TrendingApps/TrendingApps';

const HomePage = () => {
 return (
   <div>
     <Banner></Banner>
     <Stats></Stats>
     <TrendingApps></TrendingApps>
   </div>
 );
};

export default HomePage;