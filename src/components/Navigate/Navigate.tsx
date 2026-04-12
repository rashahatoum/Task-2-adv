import styles from "./Navigate.module.css"
import HeaderSections from "../HeaderSections/HeaderSections"
import { FaArrowRight } from "react-icons/fa6";

interface pageCard {
    pageTitle: string;
    pageDesc: string;
    pageBtn: string;
}
interface NavigateProps {
    pageCards: pageCard[];
}

const Navigate = ({ pageCards }: NavigateProps) => {
    return (
        <div>
            <HeaderSections
                sectionBtn="Explore More"
                sectionTitle="Navigate through our Pages"
                sectionParagraph="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
            />
            <div className={styles.pageCards}>
            {pageCards.map((pageCard, index) => {
                return (
                    <div className={styles.pageCard} key={index}>
                        <h2>{pageCard.pageTitle}</h2>
                        <div className={styles.groupLine}>
                            <div className={`${styles.circle} ${styles.circleR}`}></div>
                            <div className={styles.lines}>
                            {Array(6).fill(0).map((_, index) => (
                                <div key={index} className={styles.line}></div>
                            ))}
                            </div>
                            <div className={`${styles.circle} ${styles.circleL}`}></div>
                        </div>
                        <p>{pageCard.pageDesc}</p>
                        <button className={styles.pageBtn}>{pageCard.pageBtn} <FaArrowRight /></button>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Navigate