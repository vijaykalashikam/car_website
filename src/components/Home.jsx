import React from 'react';

const Home = () => {
  return (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "10px" }}>
    <div style={{ display: "flex", flexDirection: "column",padding: "10px"}}>
      <h1 style={{ textAlign: "center" }}>Carteryans</h1>
      <p>
      Welcome to Carteryans, your one-stop destination for premium car care and automotive services at the best prices. We're not just another carwash service; we're your trusted partner in keeping your vehicle in top shape. Our expert team ensures that your car receives the royal treatment it deserves, with high-quality carwash services that leave your vehicle sparkling.</p>
      <p>
      But that's not all – we also offer a wide range of spare parts and affordable car servicing options, delivering efficient and reliable work. Carteryans is the most trustable name in car care, providing timely services to keep your vehicle in top shape. Our conveniently located service centers are spread all over the place. We take pride in our responsive and responsible team, committed to delivering the best in car care services. Experience the convenience, quality, and affordability of Carteryans, and let us take the hassle out of car care, so you can hit the road with confidence.
      </p>
    </div>
    <div>
      <img src="https://3.bp.blogspot.com/-sJCcrwKL89U/VH299lQiv0I/AAAAAAAAA1w/vhmsTkueIxg/s1600/cool-car-wallpaper-animated-race.jpg" alt="Your Image" style={{ width: "100%", height: "400px" }} />
    </div>
  </div>
)};

export default Home;
