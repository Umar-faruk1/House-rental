import './contact.css'
import Header from '../../components/Header'
import HeaderImg from '../../images/image2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
  return (
    <>
    <Header title="Get in Touch" image={HeaderImg}>
    Lorem ipsum dolor sit, ametconsectetur adipisicing
    elit. Delectus minima quos doloribus repellat harum null
    </Header>

    <section className='contact'>
      <div className='container contact_container'>
        <div className='contact_wrapper'>
          <a href='mailto:yungfard530@gmail.com' target='_blank' rel='noreferrer noopener'><MdEmail/></a>
          <a href='https://m.me/umarfaruk' target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
          <a href='https://wa.me/+233557190530' target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
