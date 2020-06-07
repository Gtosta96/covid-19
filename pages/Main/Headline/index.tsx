import styles from "./headline.module.css";

const Headline: React.FC = () => {
  return (
    <section className={styles.headline}>
      <hgroup>
        <h1>36078</h1>
        <h4>+ 867 nas últimas 25 horas</h4>
      </hgroup>

      <div>
        <div>
          <span>33274</span>
          <span>foi o pico de novos casos em um único dia (30/05)</span>
        </div>
        <div>
          <span>1473</span>
          <span>foi o pico de mortes em um único dia (04/06)</span>
        </div>
      </div>
    </section>
  );
};

export default Headline;
