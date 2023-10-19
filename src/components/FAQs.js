import { faqs } from "../data"
import { FaQuestion } from "react-icons/fa"
import FAQ from "./FAQ"
const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs_container">
        <h2>FAQs</h2>
        <div className="faqs_wrapper">
          {
            faqs.map(({id, question, answer}) => {
              return <FAQ key={id} question={question} answer={answer}/>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default FAQs
