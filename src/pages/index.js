import { style } from "@mui/system";
import { useState } from "react";
import CountryTable from "../components/CountryTable/CountryTable";
import Layout from "../components/Layout/Layout"
import SearchInput from "../components/SearchInput/SearchInput";
import styles from '../styles/Home.module.css'

function Index({countries}) {

  const [keyword, setKeyword] = useState("");


  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );
  
  const inputchange =(e)=>{
    e.preventDefault();
    setKeyword(e.target.value);
};
  return (
     <>
      
         <Layout>
         <div className={styles.inputContainer}>
           <div className={styles.counts}>Found {countries.length} countries</div>
            <div className={styles.input}>
            <SearchInput onChange={inputchange}  placeholder="Filter by Name, Region, or SubRegion" />
          </div>
           
         </div>
         <CountryTable countries={filteredCountries} />
         </Layout>
    </>
  )
}

export const getStaticProps =async()=>{
    const res=await fetch("https://restcountries.com/v2/all");
    
    const countries=await res.json();
    // console.log(countries);
    return{
     props:{
      countries,
    }
  }

}

export default Index