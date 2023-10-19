import Header from "../../components/Header"
import './about.css'
import HeaderImage from '../../images/image2.jpg'
import StoryImage from '../../images/profile.jpg'
import VisionImage from '../../images/profile.jpg'
import MissionImage from '../../images/profile.jpg'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
    Welcome to Rentals, where finding your ideal home is made simple. Explore thoughtfully curated rentals, enjoy transparent processes, and experience personalized support. Discover the joy of hassle-free renting with us.
    </Header>

    <section className="about_story">
      <div className="container about_story-container">
        <div className="about_section-img">
          <img src={StoryImage} alt="soryImg"/>
        </div>
        <div className="about_section-content">
          <h1>Our Story</h1>
          <p>
          At Rentals, our journey began with a simple belief: finding the perfect home should be a joyful experience. Fueled by this vision, we set out to redefine the rental landscape, creating a platform that prioritizes your comfort and convenience.
          </p>
          <p>
          Our story is one of passion for connecting people with their ideal living spaces. We curate a diverse range of rental properties, ensuring that every home reflects our commitment to quality and excellence. Whether you're a first-time renter or a seasoned tenant, our user-friendly platform empowers you to discover the perfect rental with ease.
          </p>
          <p>
          What sets us apart is our dedication to transparency and customer satisfaction. We believe in providing clear information, fair terms, and unwavering support at every step of your rental journey.
          </p>
        </div>
      </div>
    </section>

    <section className="about_vision">
      <div className="container about_vision-container">
      
        <div className="about_section-content">
          <h1>Our Vision</h1>
          <p>
          At Rentals, our vision is to redefine the way you experience the journey of finding a home. We aspire to be the beacon of innovation in the rental landscape, creating a platform where simplicity, transparency, and customer satisfaction are paramount.
          </p>
          <p>
          We envision a future where every user effortlessly discovers their perfect living space, guided by a seamless and intuitive rental process. Our commitment extends beyond providing a transactional service; we strive to create an environment where your comfort and happiness take center stage.
          </p>
        </div>
        <div className="about_section-img">
          <img src={VisionImage} alt="VisionImg"/>
        </div>
      </div>
    </section>
    

    <section className="about_mission">
      <div className="container about_mission-container">
        <div className="about_section-img">
          <img src={MissionImage} alt="soryImg"/>
        </div>
        <div className="about_section-content">
          <h1>Our mission</h1>
          <p>
          At Rentals, our mission is to transform the rental experience into a seamless and joyful journey. We are dedicated to curating an extensive collection of rental properties that not only meet but exceed your expectations.
          </p>
          <p>
          We aim to empower you with user-friendly tools and transparent information, ensuring you make informed decisions with confidence. Our commitment extends to providing personalized support at every step, making the process of finding and securing your dream home a pleasant and stress-free endeavor.
          </p>
          <p>
          Through innovation, transparency, and a customer-centric approach, we strive to set a new standard in the rental industry. Join us in our mission to redefine the way you find and experience your next home.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
