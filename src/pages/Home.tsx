import BenefitsSection from "../components/BenefitsSection/BenefitsSection"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Navigate from "../components/Navigate/Navigate"
import Questions from "../components/Questions/Questions"
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Home = () => {
  return (
    <>
      <Header />
      <section className="section">
        <div className="container">
          <BenefitsSection
            BenefitsCards={[
              {
                icon: "/assets/imgs/Graduated.png",
                title: "Holistic Learning Approach",
                desc: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education."
              },
              {
                icon: "/assets/imgs/crown.png",
                title: "Experienced Educators",
                desc: "Our passionate and qualified teachers create a supportive and stimulating learning environment."
              },
              {
                icon: "/assets/imgs/facemask.png",
                title: "Nurturing Environment",
                desc: "We prioritize safety and provide a warm and caring atmosphere for every child."
              },
              {
                icon: "/assets/imgs/flag.png",
                title: "Play-Based Learning",
                desc: "We believe in the power of play to foster creativity, problem-solving skills, and imagination."
              },
              {
                icon: "/assets/imgs/ball.png",
                title: "Individualized Attention",
                desc: "Our small class sizes enable personalized attention, catering to each child's unique needs."
              },
              {
                icon: "/assets/imgs/people.png",
                title: "Parent Involvement",
                desc: "We foster a strong parent-school partnership to ensure seamless communication and collaboration."
              }
            ]} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <TestimonialsSection
            TestimonialsCards={[
              {
                img: "/assets/imgs/Jennifer.png",
                name: "Jennifer B",
                rating: 5,
                desc: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
              },
              {
                img: "/assets/imgs/David.png",
                name: "David K",
                rating: 5,
                desc: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
              },
              {
                img: "/assets/imgs/Emily.png",
                name: "Emily L",
                rating: 5,
                desc: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
              },
              {
                img: "/assets/imgs/Jennifer.png",
                name: "Rasha H",
                rating: 4,
                desc: "Great academy and a very positive experience for my child, but I wish there was a bit more focus on some outdoor activities. Overall, I’m happy with the progress I see in him every day."
              },
              {
                img: "/assets/imgs/David.png",
                name: "Omar H",
                rating: 3,
                desc: "The place is nice and the staff are helpful, but I think there’s room for improvement in terms of activity variety and communication with parents. My child benefited, but not as much as I had hoped."
              },
            ]} />
        </div>
      </section>
      <section className="section">
          <div className="container">
          <Questions
            questions={[
              {
                question: "What are the school hours at Little Learners Academy?",
                answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
              },
              {
                question: "How do you handle food allergies and dietary restrictions?",
                answer:"We don’t provide meals during courses, but we allow students to bring their own snacks, and our venue is nut‑free."
              },
              {
                question: "Is there a uniform policy for students?",
                answer:"No formal uniform is required, but we recommend smart casual attire for a professional learning environment."
              },
              {
                question: "What is the teacher-to-student ratio at Little Learners Academy?",
                answer:"Our average class size is 8–12 students per instructor to ensure personalized attention."
              },
                            {
                question: "What extracurricular activities are available for students?",
              },
                            {
                question: "How do you handle discipline and behavior management?",
              },
                            {
                question: "What extracurricular activities are available for students?",
              },
                            {
                question: "How do I apply for admission to Little Learners Academy?",
              }
            ]} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Navigate 
          pageCards={[
          {
            pageTitle: "About Us",
            pageDesc: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
            pageBtn: "Learn More",
          },
          {
            pageTitle: "Academics",
            pageDesc: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
            pageBtn: "Learn More"
          },
          {
            pageTitle: "Student Life",
            pageDesc: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
            pageBtn: "Learn More"
          },
          {
            pageTitle: "Admissions",
            pageDesc: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
            pageBtn: "Learn More"
          },
          ]}
          />
        </div>
      </section>
      <Footer 
      logo="/assets/imgs/Logo.png"
      footerDesc="We believe in the power of play to foster creativity, problem-solving skills, and imagination."
      email="hello@littlelearners.com"
      phone="+91 91813 23 2309"
      location="Somewhere in the World"
      sections={[
    {
      title: "Home",
      items: ["Features", "Our Testimonials", "FAQ"],
    },
    {
      title: "About Us",
      items: ["Our Mission", "Our Vission","Awards and Recognitions","History","Teachers"],
    },
    {
      title: "Academics",
      items: ["Special Features", "Gallery"],
    },
    {
      title: "Contact Us",
      items: ["Information", "Map & Direction"],
    }
  ]}
      privacy={["Terms of Service","Privacy Policy","Cookie Policy"]}
      social={[
        <FaFacebook />,
        <FaTwitter />,
        <FaLinkedin />
      ]}
      copyRight="Copyright © [2023] Little Learners Academy. All rights reserved."
      />
    </>
  )
}

export default Home