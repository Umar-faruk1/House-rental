import {FaQuoteLeft} from 'react-icons/fa'
import {FaQuoteRight} from 'react-icons/fa'
import Profile from '../images/profile.jpg'
import Rating15 from '../images/rating-15.png'
import Rating30 from '../images/rating-30.png'
import Rating45 from '../images/rating-45.png'

const Testimonials = () => {
  return (
    <div class="testimonial">
    <div class="small-container">
      <h2>Testimonials</h2>
        <div class="row">
            <div class="col-3">
                <FaQuoteLeft/>
                <p>Our real estate agent, Umar Faruk, went above and beyond to find us the perfect home. Their knowledge of the market, negotiation skills, and genuine commitment to our needs were outstanding. We're grateful for their expertise and highly recommend them to anyone buying or selling</p>
                <div class="rating">
                    <img src={Rating15} alt='rating'/>
                </div>
                <img src={Profile} alt='profile'/>
                <h3>Umar Faruk</h3>
            </div>
            <div class="col-3">
                <FaQuoteRight/>
                <p>Rahman Jalil took the time to understand our needs and preferences, ensuring that every property they showed us aligned with our vision of the perfect home. Their knowledge of the local real estate market was impressive, and they guided us through the entire process with confidence and professionalism.</p>
                <div class="rating">
                    <img src={Rating30} alt=''/>
                </div>
                <img src={Profile} alt=''/>
                <h3>Umar Faruk</h3>
            </div>
            <div class="col-3">
                <FaQuoteLeft/>
                <p>When it came time to negotiate, Abdul Rahman demonstrated skill and finesse. Their ability to navigate negotiations resulted in a deal that we were thrilled with. It was evident that Abdul Rahman had our best interests at heart and was dedicated to securing the best possible outcome for us.</p>
                <div class="rating">
                    <img src={Rating45} alt=''/>
                </div>
                <img src={Profile} alt=''/>
                <h3>Abdul Rahman</h3>
            </div>
        </div>
    </div>
</div>

  )
}

export default Testimonials
