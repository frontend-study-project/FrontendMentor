import { useContext } from "react";
import { GlobalContext } from "./../../contexts/GlobalContext";
import styles from "./home.module.css";
import Header from "../../components/header";
import Input from "../../components/Input";
import Filter from "../../components/filter";
import Item from "../../components/Item";

const Home = () => {
  const { data, darkTheme, loading } = useContext(GlobalContext);

  return (
    <>
      <Header />
      <main
        className={`${styles.main} ${
          darkTheme ? styles.mainDark : styles.mainLight
        }`}
      >
        <div className={styles.container}>
          <div className={styles.search}>
            <Input />
            <Filter />
          </div>
          {loading ? (
            <div className={styles.loader}></div>
          ) : (
            <div className={styles.items}>
              {data.map((item) => {
                return (
                  <Item
                    key={item.name}
                    name={item.name}
                    alpha={item.alpha2Code}
                    population={item.population}
                    region={item.region}
                    capital={item.capital}
                    flag={item.flags.svg}
                  />
                );
              })}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
