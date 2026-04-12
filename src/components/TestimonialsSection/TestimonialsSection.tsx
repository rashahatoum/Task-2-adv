import styles from "./TestimonialsSection.module.css"
import HeaderSections from "../HeaderSections/HeaderSections"
import { VscStarFull } from "react-icons/vsc";
import { VscStarEmpty } from "react-icons/vsc";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";




interface TestimonialsCard {
    img: string;
    name: string;
    rating: number;
    desc: string
}

interface TestimonialsSectionProps {
    TestimonialsCards: TestimonialsCard[];
}

const TestimonialsSection = ({ TestimonialsCards }: TestimonialsSectionProps) => {
    const sliderRef = useRef<HTMLDivElement>(null);

        const getMoveAmount = () => {
        if (!sliderRef.current) return 0;
        const firstCard = sliderRef.current.children[0] as HTMLElement;
        const cardWidth = firstCard.offsetWidth;
        const styles = window.getComputedStyle(sliderRef.current);
        const gap = parseFloat(styles.gap);

        return cardWidth + gap;
    };

    const getVisibleCards = () => {
        if (!sliderRef.current) return 3;
        const wrapperWidth = sliderRef.current.parentElement?.offsetWidth ?? 0;
        const firstCard = sliderRef.current.children[0] as HTMLElement;
        const cardWidth = firstCard.offsetWidth;
        const computedStyles = window.getComputedStyle(sliderRef.current);
        const gap = parseFloat(computedStyles.gap);

        return Math.max(1, Math.floor((wrapperWidth + gap) / (cardWidth + gap)))
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [move, setMove] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    const maxIndex = Math.max(0 , TestimonialsCards.length - visibleCards);

    useEffect(() => {
        const update=()=> {
        setMove(getMoveAmount());
        setVisibleCards(getVisibleCards());
        }
        update();
        window.addEventListener("resize",update);
        return()=>window.removeEventListener("resize",update);
    }, []);

    useEffect(()=>{
        if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
    },[maxIndex,currentIndex])

    return (
        <>
            <HeaderSections
                sectionBtn="Their Happy Words 🤗"
                sectionTitle="Our Testimonials"
                sectionParagraph="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
            />
            <div className={styles.sliderContainer}>
                <button className={`${styles.sliderBtn} ${styles.lapLeftBtn}`} onClick={() =>
                    setCurrentIndex(prev => prev === 0 ? maxIndex : prev - 1)}><FaArrowLeft /></button>
                <div className={styles.sliderWrapper}>
                    <div className={styles.cardsSlider}
                        ref={sliderRef}
                        style={{
                            transform: `translateX(-${currentIndex * move}px)`
                        }}>
                        {TestimonialsCards.map((TestimonialsCard, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.profile}>
                                    <img src={TestimonialsCard.img} alt={TestimonialsCard.name} className={styles.profileImg} />
                                    <h3>{TestimonialsCard.name}</h3>
                                </div>
                                <div className={styles.stars}>
                                    {Array(5).fill(0).map((_, index) => (
                                        <div key={index}>
                                            {index < TestimonialsCard.rating ? <VscStarFull /> : <VscStarEmpty />}
                                        </div>
                                    ))}
                                </div>
                                <p>{TestimonialsCard.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.btnGroup}>
                <button className={`${styles.sliderBtn} ${styles.mobileLeftBtn}`} onClick={() =>
                    setCurrentIndex(prev => prev === 0 ? maxIndex : prev - 1)}><FaArrowLeft /></button>
                <button className={styles.sliderBtn} onClick={() => setCurrentIndex(prev => prev === maxIndex ? 0 : prev + 1)}>
                    <FaArrowRight /></button>
                </div>
            </div>
        </>
    )
}

export default TestimonialsSection