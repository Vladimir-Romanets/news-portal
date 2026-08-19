import cn from "classnames"
import { useState } from "react"
import { Button, Icon } from "@/components/common"
import { SearchForm } from "@/components/SearchForm/SearchForm"
import { PersonalizedFeedForm } from "@/components/PersonalizedFeedForm/PersonalizedFeedForm"
import styles from "./Sidebar.module.css"

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [activeTab, setActiveTab] = useState<"search" | "feed">("search")

  return (
    <>
      <input type="checkbox" id="sidebar-toggle" hidden />
      <label htmlFor="sidebar-toggle" className={styles.overlay} />
      <label
        htmlFor="sidebar-toggle"
        className={styles.toggleTab}
        aria-label="Open Menu"
      >
        <Icon size={20} name="chevron-right" />
      </label>
      <aside className={cn(styles.sidebar, className)}>
        <div className={styles.tabs}>
          <Button
            variant={activeTab === "search" ? "primary" : "outline"}
            onClick={() => setActiveTab("search")}
          >
            Search
          </Button>
          <Button
            variant={activeTab === "feed" ? "primary" : "outline"}
            onClick={() => setActiveTab("feed")}
          >
            My Feed
          </Button>
        </div>
        <div className={styles.tabContent}>
          {activeTab === "search" ? <SearchForm /> : <PersonalizedFeedForm />}
        </div>
      </aside>
    </>
  )
}
