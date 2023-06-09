import Layout from "../../components/Layout/Layout";
import styles  from './Country.module.css';
import { useEffect, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

function CountryMain({country}) {
    const [borders, setBorders] = useState([]);
    console.log(country);
  return (
    <Layout title={country.name} >
 
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div className={styles.overview_panel}>
          <img src={country.flag} alt={country.name}></img>

          <h1 className={styles.overview_name}>{country.name}</h1>
          <div className={styles.overview_region}>{country.region}</div>

          <div className={styles.overview_numbers}>
            <div className={styles.overview_population}>
              <div className={styles.overview_value}>
                {country.population}
              </div>
              <div className={styles.overview_label}>Population</div>
            </div>

            <div className={styles.overview_area}>
              <div className={styles.overview_value}>{country.area}</div>
              <div className={styles.overview_label}>Area</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container_right}>
        <div className={styles.details_panel}>
          <h4 className={styles.details_panel_heading}>Details</h4>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Capital</div>
            <div className={styles.details_panel_value}>
              {country.capital}
            </div>
          </div>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Languages</div>
            <div className={styles.details_panel_value}>
              {country.languages.map(({ name }) => name).join(", ")}
            </div>
          </div>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Currencies</div>
            <div className={styles.details_panel_value}>
              {country.currencies.map(({ name }) => name).join(", ")}
            </div>
          </div>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Native name</div>
            <div className={styles.details_panel_value}>
              {country.nativeName}
            </div>
          </div>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Gini</div>
            <div className={styles.details_panel_value}>{country.gini} %</div>
          </div>
         

          
        </div>
        {/* <Button style={{marginTop:"1rem",backgroundColor:"#21b6b7",color:"white"}} variant="contained" endIcon={<ArrowBackIcon />}> <Link  href="/">Go Back</Link> </Button> */}

      </div>
    </div>
  </Layout>
  )
}

export default CountryMain;

export const getServerSideProps = async({params})=>{
    const res=await fetch(`https://restcountries.com/v2/alpha/${params.id}`);
    const country= await res.json();

     return{
        props:{
            country,
        },
     };


}

