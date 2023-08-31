import React from "react";
import { Link } from "react-router-dom";
import './BookingPage.css';

const Rentals = () => {
  return (
    <section id="rentals">
      <h2>Rentals</h2>
      <div className="rental-item">
        <div className="rental-images-container">
        <img
          src="https://images.unsplash.com/photo-1520869309377-88c9274a27c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="PicnicTable1"
          className="rental-image"
          />
        <img
        src="https://i0.wp.com/www.lamonluther.com/wp-content/uploads/2020/11/61-lamon-luther-porter-dining-table-reclaimed-barnwood-wood-custom-weathered-rustic-natural-90-inch-scaled.jpg?fit=2560%2C1946&ssl=1"
        alt="PicnicTable2"
        className="rental-image"
        />
       <img src="https://marvel-b1-cdn.bc0a.com/f00000000107743/www.lifetime.com/imagecache/kodachrome/product/main/94ad27bb-0c35-4d91-9d12-2152a2f1cc5a.jpg?v=20220716220221" 
       alt="PicnicTable3" 
       className="rental-image"
       />
       </div>
        <h3>Picnic Tables</h3>
        <p>Rent our picnic tables for $50 per day!</p>
        <Link to="/book">
         <button className="book-now-button">Book Now</button>
        </Link>
      </div>
      <div className="rental-item">
        <div className="rental-images-container">

        <img
src="https://media1.popsugar-assets.com/files/thumbor/7hf25JKZ_QjHIc-KFxq-tJa5ouk/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/06/09/695/n/1922794/9bc6c47e6ede753f_netimg2v0Uu3/i/Boho-Umbrella-Natural-Replacement-Umbrella-Canopy-With-Fringe.jpg"
alt="Umbrella1"
className="rental-image"
/>
<img src="https://r2.starryai.com/results/1007199767/cfcb50fe-c1e5-4032-a638-89aff69922a6.webp" 
alt="Umbrella3"
className="rental-image" 
/>
<img src="https://gardenerspath.com/wp-content/uploads/2019/05/Classic-Patio-Market-Umbrella-with-Aluminum-Pole-7-dia.jpg" 
alt="Umbrella2" 
className="rental-image"
/>
</div>
        <h3>Umbrellas</h3>
        <p>Rent our Umbrellas for $25 per day!</p>
        <Link to="/book">
         <button className="book-now-button">Book Now</button>
        </Link>
      </div>
      <div className="rental-item">
        <div className="rental-images-container">

        <img
src="https://shop.static.ingka.ikea.com/revamp/outdoor-furniture_od003.jpg"
alt="Chair1"
className="rental-image"
/>
<img src="https://images.squarespace-cdn.com/content/v1/5f55599113e50339e0c1d982/1641403858071-97SYONVUET4SWY6SMTXD/DSC_6299.jpg?format=2500w" 
alt="Umbrella3"
className="rental-image" 
/>
<img src="https://i5.walmartimages.com/asr/e2f89180-862c-4b27-846a-f0dda38c5ef9.e0cf80c4a371e754fcfbe7a3544beccc.jpeg" 
alt="Umbrella2" 
className="rental-image"
/>
</div>
        <h3>Chairs</h3>
        <p>Rent our chairs for $3 per chair a day!</p>
        <Link to="/book">
         <button className="book-now-button">Book Now</button>
        </Link>
      </div>
      <div className="rental-item">
        <div className="rental-images-container">

        <img
src="https://scontent.fslc3-2.fna.fbcdn.net/v/t45.5328-4/370748827_9931408163599213_3834716159383089282_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=SVyOCF-nFU4AX9sM-Ev&_nc_ht=scontent.fslc3-2.fna&oh=00_AfDX0XkGloLABc-WAamf49E2Ti_NJAJo3H98ax-tOAdU4Q&oe=64F6347B"
alt="Bar1"
className="rental-image"
/>
<img src="https://scontent.fslc3-1.fna.fbcdn.net/v/t45.5328-4/368792646_6727777717311506_4681930704708081996_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=z9zlDirDiioAX8m4DGR&_nc_ht=scontent.fslc3-1.fna&oh=00_AfAzVhWwrH6E3WNKfhWEYrM_8nUX1x6-AOSk-E_Bc6_h8g&oe=64F5F556" 
alt="Bar2"
className="rental-image" 
/>
<img src="https://scontent.fslc3-2.fna.fbcdn.net/v/t45.5328-4/353020427_9567966176609594_1992138268141268217_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=UVpMaSCoLN4AX_8bd54&_nc_ht=scontent.fslc3-2.fna&oh=00_AfA_krK7T-LzkFS692MA6D0o2Tl3ej1_6X6EMUcu5zj7ZQ&oe=64F547F8" 
alt="LemonadeStand" 
className="rental-image"
/>
</div>
        <h3>Party Bars</h3>
        <p>Rent our Home made Bar and Lemonad Stand today for only $50 a day!</p>
        <Link to="/book">
         <button className="book-now-button">Book Now</button>
        </Link>
      </div>
    </section>
  );
};

export default Rentals;
