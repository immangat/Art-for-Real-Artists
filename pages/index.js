import Image from 'next/image'
import styles from "../styles/home.module.css"
import Banner from '../components/banner'



export default function Home() {

  const handleOnBannerButtonClick = () => {
    console.log("Hi banner Button")
  }
  return (
    <main className={styles.main}>
      <Banner buttonText = "View Real Art Nearby" handleOnClick =
      {handleOnBannerButtonClick}/>
    </main>  
  );
}

