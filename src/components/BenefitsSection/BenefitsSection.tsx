import styles from "./BenefitsSection.module.css"
import HeaderSections from "../HeaderSections/HeaderSections"

interface BenefitsCards {
    icon:string;
    title: string;
    desc: string;
}
interface BenefitsProps {
    BenefitsCards : BenefitsCards[]
}

const BenefitsSection = ({BenefitsCards}:BenefitsProps) => {
    return (
        <>
        <HeaderSections
            sectionBtn="Children Deserve Bright Future"
            sectionTitle="Our Benefits"
            sectionParagraph="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
        />
        <div className={styles.BenefitsCards}>
            {BenefitsCards.map((BenefitsCard , index)=>{
                return(
                <div key={index} className={styles.BenefitsCard}>
                    <div className={styles.CardIcon}>
                    <img src={BenefitsCard.icon} alt=""className={styles.icon} />
                    </div>
                    <h2 className={styles.CardT}>{BenefitsCard.title}</h2>
                    <p>{BenefitsCard.desc}</p>
                </div>
                )
            })}
        </div>
        </>
    )
}

export default BenefitsSection