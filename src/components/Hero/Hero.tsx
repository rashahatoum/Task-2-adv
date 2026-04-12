import styles from "./Hero.module.css"

interface HeroCards {
    title: string;
    desc: string;
}

interface HeroProps {
    heroImg: string;
    subTitle: string;
    title: string;
    titleSpan: string;
    heroP: string;
    HeroCards: HeroCards[]
}

const Hero = ({ heroImg, subTitle, title, titleSpan, heroP, HeroCards }: HeroProps) => {
    return (
        <div className={styles.hero}>
            <img src={heroImg} alt="hero" className={styles.heroImg}/>
            <div className={styles.heroText}>
                <p className={styles.subTitle}>{subTitle}</p>
                <h1 className={styles.heroTitle}>{title}<span className={styles.heroSpan}>{titleSpan}</span></h1>
                <p className={styles.heroP}>{heroP}</p>
                <div className={styles.heroCards}>
                    {HeroCards.map((card, index) => {
                        return (
                            <div key={index} className={styles.heroCard}>
                                <h3 className={styles.heroCardT}>{card.title}</h3>
                                <p className={styles.heroCardD}>{card.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Hero