import Hero from "../Hero/Hero"
import NavBar from "../NavBar/NavBar"

const Header = () => {
    return (
        <>
            <NavBar
                bannerText="Admission is Open, Grab your seat now"
                logo="/assets/imgs/Logo.png"
                items={["Home", "About Us", "Academics", "Admissions", "Student Life", "Contact"]}
            />
            <Hero 
            heroImg="/assets/imgs/Hero-image.png"
            subTitle="Welcome to Little Learners Academy"
            title="Where Young Minds Blossom and "
            titleSpan="Dreams Take Flight."
            heroP="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
            HeroCards={[
                {
                title:"+7000",
                desc:"Students Passed Out"
                },
                {
                title:"+37",
                desc:"Awards & Recognitions"
                },
                {
                title:"+15",
                desc:"Experience Educators"
                }
            ]}

            
            />
        </>
    )
}

export default Header