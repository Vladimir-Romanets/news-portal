import { Header, Container, Sidebar } from "@/components/layout"
import { NewsList } from "@/components/News/NewsList/NewsList"
import styles from "./Home.module.css"

export const Home = () => {
  return (
    <div className={styles.homeLayout}>
      <Header />
      <Container className={styles.mainContainer}>
        <Sidebar />
        <main className={styles.mainContent}>
          <NewsList />
        </main>
      </Container>
    </div>
  )
}
