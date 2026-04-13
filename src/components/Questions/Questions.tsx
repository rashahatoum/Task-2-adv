import { useState } from "react";
import HeaderSections from "../HeaderSections/HeaderSections"
import styles from "./Questions.module.css"
import { FiPlus } from "react-icons/fi";
import { BiMinus } from "react-icons/bi";




interface question {
    question: string;
    answer?: string;
}
interface questionsProps {
    questions: question[]
}


const Questions = ({ questions }: questionsProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <HeaderSections
                sectionBtn="Solutions For The Doubts"
                sectionTitle="Frequently Asked Questions"
                sectionParagraph="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
            />
            <div className={styles.freqCards}>
                {questions.map((question, index) => {
                    return (
                        <div className={`${styles.freqCard} ${openIndex === index ? styles.opened : ""}`} key={index}>                            <div className={styles.asked} onClick={() => toggleOpen(index)}>
                                <p className={styles.question}>{question.question}</p>
                                <div className={styles.askedIcon}>
                                    {openIndex === index ? (
                                        <BiMinus />
                                    ) : (
                                        <FiPlus />
                                    )}
                                </div>
                            </div>
                            {openIndex === index && <p className={styles.answer}>{question.answer}</p>}
                            </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Questions