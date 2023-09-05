import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Aplicando DevOps com Docker&nbsp;</p>
        <div>By Leonardo Dantas</div>
      </div>

      <div className={styles.center}>
        <strong style={{ fontSize: 64 }}>
          Dibas Store - Versão Homologação/Testes
        </strong>
      </div>

      <div></div>
    </main>
  )
}
