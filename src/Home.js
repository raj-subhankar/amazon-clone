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
                <div className='home__row'>
                    <Product id='126' title='Apple New MacBook Pro with M1 Chip' price={122900} image='https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._SX679_.jpg' rating={5} />
                    <Product id='127' title='AMD Ryzen 7 3700X Desktop Processor' price={28500} image='https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._SL1092_.jpg' rating={4} />
                    <Product id='128' title='Redragon Kumara K552 LED Backlit Mechanical Gaming Keyboard' price={4200} image='https://images-na.ssl-images-amazon.com/images/I/71cngLX2xuL._SL1500_.jpg' rating={4} />
                    <Product id='129' title='Herman Miller Mirra 2 Task Chair' price={89106} image='https://images-na.ssl-images-amazon.com/images/I/71ymJ2xH82L._SL1500_.jpg' rating={5} />
                </div>
                <div className='home__row'> 
                    <Product id='130' title='LG 29 inch Ultrawide Full HD IPS Gaming' price={17571} image='https://images-na.ssl-images-amazon.com/images/I/81t1tAzEgGL._SL1500_.jpg' rating={3} />
                    <Product id='131' title='MSI NVIDIA GeForce RTX 3070 Gaming X Trio ' price={72499} image='https://images-na.ssl-images-amazon.com/images/I/81x58onMLBL._SL1500_.jpg' rating={4} />
                    

                </div>
            </div>
        </div>
    )
}

export default Home