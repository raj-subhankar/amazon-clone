import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return(
        <div className='home'>
            <div className='home__container'>
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Coolie/launch/WP/1500x600_Hero-Tall_WP._CB412534930_.jpg" alt="" />
            
                <div className='home__row'>
                    <Product id="123" title="The lean startup" price={630} image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_QL65_.jpg" rating={5}/>
                    <Product id="124" title="Dyson V7 Animal Cord-Free Vacuum (Purple)" price={29900} image="https://m.media-amazon.com/images/I/51-Xiz66bzL._AC_UY327_QL65_.jpg" rating={4}/>
                    <Product id="125" title="Redmi Note 9 Pro (Glacier White, 4GB RAM, 64GB Storage)" price={12900} image="https://images-na.ssl-images-amazon.com/images/I/81rpzlanj1L._SL1500_.jpg" rating={4}/>

                </div>
            </div>
        </div>
    )
}

export default Home