import { Header, Container, Sidebar } from "@/components/layout"
import { NewsList } from "@/components/News/NewsList/NewsList"
import styles from "./Home.module.css"
import { ArticleQueryProvider } from "@/context/ArticleQueryContext"

export const Home = () => {
  return (
    <div className={styles.homeLayout}>
      <Header />
      <Container className={styles.mainContainer}>
        <ArticleQueryProvider>
          <Sidebar />
          <main className={styles.mainContent}>
            <NewsList />
          </main>
        </ArticleQueryProvider>
      </Container>
    </div>
  )
}
