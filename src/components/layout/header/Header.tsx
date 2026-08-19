import cn from "classnames"
import { Container } from "../container/Container"
import styles from "./Header.module.css"

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn(styles.header, className)}>
      <Container>
        <div className={styles.headerContent}>
          <a href="/" target="_self" className={styles.logoContainer}>
            <img
              src="/logo.png"
              alt="News Portal Logo"
              className={styles.logo}
            />
            <h1 className={styles.title}>NewsPortal</h1>
          </a>
        </div>
      </Container>
    </header>
  )
}
