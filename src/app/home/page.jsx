import React from 'react';
import Banner from './../../components/home/Banner';
import Seller from '@/components/home/Seller';
import ElectronicsProducts from '@/components/home/ElectronicsProducts';
import GadgetsProduct from '@/components/home/GadgetsProduct';
import AccessoriesProducts from '@/components/home/AccessoriesProducts';
import BusinessAdv from '@/components/home/BusinessAdv';
import RFQ from '@/components/home/RFQ';

const HomePage = () => {
    return (
        <div>
          <div className="container">
            <Banner/>
            <Seller/>
            <ElectronicsProducts/>
            <GadgetsProduct/>
            <AccessoriesProducts/>
            <BusinessAdv/>
            <RFQ/>
          </div>
        </div>
    );
};

export default HomePage;