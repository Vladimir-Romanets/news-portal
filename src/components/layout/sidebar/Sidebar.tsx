import cn from "classnames"
import styles from "./Sidebar.module.css"

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <>
      <input type="checkbox" id="sidebar-toggle" hidden />
      <label htmlFor="sidebar-toggle" className={styles.overlay} />
      <label
        htmlFor="sidebar-toggle"
        className={styles.toggleTab}
        aria-label="Open Menu"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </label>
      <aside className={cn(styles.sidebar, className)}>
        {/* Filter and user's feed will be added here */}
      </aside>
    </>
  )
}
