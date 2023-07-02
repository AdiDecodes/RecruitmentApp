import styles from "../Styles/home.module.css";
import { IoRocketOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.primary_hero}>
        <IoRocketOutline />
        <h3>
          Hiring Reinvented <br />
          for the Modern
          <br /> World
        </h3>
        <div className={styles.btnContainer}>
          <div className={styles.btnStarted}>Get started</div>
          <div className={styles.btnLearnMore}>Learn More</div>
        </div>
        <div className={styles.Loaderwrapper}>
          <div className={styles.loader}></div>
        </div>
      </div>
      <div className={styles.LowerHero}>
        <h3 className={styles.heading}>Discover Unparalleled Efficiency</h3>
        <p className={styles.para}>
          Tired of wasting time sorting through applicants manually? Our online
          recruitment solution streamlines the hiring process and saves
          countless hours for hiring managers and HR professionals alike.
        </p>
        <div className={styles.ClientsInfo}>
          <div className={styles.infoWrapper}>
            <h3 className={styles.numbers}>200</h3>
            <h3 className={styles.title}>Happy Clients</h3>
          </div>
          <div className={styles.infoWrapper}>
            <h3 className={styles.numbers}>1200</h3>
            <h3 className={styles.title}>Successful Placements</h3>
          </div>
          <div className={styles.infoWrapper}>
            <h3 className={styles.numbers}>100</h3>
            <h3 className={styles.title}>Percent Satisfaction</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
