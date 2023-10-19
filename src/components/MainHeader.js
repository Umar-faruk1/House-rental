import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className='main_header'>
    <div className='main_header-right'>
      <img src="https://media.istockphoto.com/id/1490140364/photo/modern-beach-hotel-with-sea-view-swimming-pool.webp?b=1&s=170667a&w=0&k=20&c=wog-dRoJPer4VNQ1MzoZ2KGNhtbXknfASg0E6JKucJY=" alt='header-img'/>
      </div>
      <div className='main_header-left'>
      <h1>Come explore With Us</h1>
      <p>Welcome to our House Rental Adventure! Are you craving an unforgettable escape to recharge, explore new horizons, or simply unwind? Look no further – we're your gateway to discovering the ideal vacation rental for your next adventure.</p>
      <Link to='/residencies' className='btn'>Get Started</Link>
      </div>
      

    </header>
    
    
    // <header className='main_header'>
    //   <div className='container main_header-container'>
    //     <div className='main_header-left'>
    //       <h1>gdhgksdjgdsgghdghjds</h1>
    //       <p>lorem ipsum gdghdhhsgdmbcdhvchsvdhsvshvdbmnvhvhvdmjhdbvvvvvvvvvvvvvvvvvvvhvdshvsmsdjvmshvjvhdshsdvd</p>
    //       <Link className='btn' to="/residencies">Get Started</Link>
    //     </div>
    //     <div className='main_header-right'>
    //       <div className='main_header-image'>
    //         <img src="https://media.istockphoto.com/id/1490140364/photo/modern-beach-hotel-with-sea-view-swimming-pool.webp?b=1&s=170667a&w=0&k=20&c=wog-dRoJPer4VNQ1MzoZ2KGNhtbXknfASg0E6JKucJY=" alt='header-img'/>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  )
}

export default MainHeader
