import cn from "classnames"
import styles from "./Header.module.css"
import { Container } from "../container/Container"

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn(styles.header, className)}>
      <Container>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <img src="/logo.png" alt="News Portal Logo" className={styles.logo} />
            <h1 className={styles.title}>NewsWave</h1>
          </div>
        </div>
      </Container>
    </header>
  )
}
