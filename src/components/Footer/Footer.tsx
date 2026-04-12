import styles from "./Footer.module.css"
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";




interface FooterSection {
    title: string;
    items: string[];
}

interface footerProps {
    logo: string;
    footerDesc: string;
    email: string;
    phone: string;
    location: string;
    sections: FooterSection[];
    privacy: Array<string>;
    social: Array<React.ReactNode>;
    copyRight: string;
}


const Footer = ({ logo, footerDesc, email, phone, location, sections, privacy, social, copyRight }: footerProps) => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.info}>
                    <div className={styles.footerHead}>
                    <img src={logo} alt="logo" />
                    <p className={styles.footerDesc}>{footerDesc}</p>
                    </div>
                    <div className={styles.contactInfo}>
                        <div className={styles.email}>
                            <MdEmail className={styles.contentIcon} />
                            <p> {email}</p>
                        </div>
                        <div className={styles.phone}>
                            <FaPhoneAlt className={styles.contentIcon} />
                            <p> {phone}</p>
                        </div>
                        <div className={styles.location}>
                            <FaLocationDot className={styles.contentIcon} />
                            <p> {location}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.sectionsList}>
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h4>{section.title}</h4>

                            <ul className={styles.list}>
                                {section.items.map((item, i) => (
                                    <li key={i} className={styles.itemList}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.footerPolicy}>
                <ul className={styles.policyList}>
                    {privacy.map((item, index) => (
                        <li key={index} className={styles.policyItem}>{item}</li>
                    ))}
                </ul>
                <div className={styles.socialContainer}>
                    {social.map((icon, index) => (
                        <div key={index} className={styles.socialIcon}>{icon}</div>
                    ))}
                </div>
            </div>
            <p className={styles.copyRight}>{copyRight}</p>
        </div>
    )
}

export default Footer