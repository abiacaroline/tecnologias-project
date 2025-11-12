import styles from "./Home.module.css";
import Header from "../../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type {Extension } from "../../hooks/useExtensions";
import useExtensions from "../../hooks/useExtensions";

function Index() {
  const [filter, setFilter] = useState("all");
  const {extensions, onDeleteExtension, handleToggleActive} =useExtensions();
  const navigate = useNavigate();

  const filteredExtensions = extensions.filter((extension) => {
    if (filter === "active") return extension.isActive;
    if (filter === "inactive") return !extension.isActive;
    return true;
  });

  function onNavigate(extension: Extension) {
    navigate(
      `/extension?title=${extension.title}&description=${extension.description}`
    );
  }
  
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.menu}>
          <h1 className={styles.h1}>Extensions List</h1>
          <div className={styles.filters}>
            <button
              onClick={() => setFilter("all")}
              className={`${styles.btn} ${styles.allBtn} ${filter === "all" ? styles.active : ""}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("active")}
              className={`${styles.btn} ${styles.activeBtn} ${
                filter === "active" ? styles.active : ""
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter("inactive")}
              className={`${styles.btn} ${styles.inactiveBtn} ${
                filter === "inactive" ? styles.active : ""
              }`}
            >
              Inactive
            </button>
          </div>
        </div>
        <div className={styles.extensionsColumn}>
          {filteredExtensions.map((extension) => (
            <div
              onClick={() => onNavigate(extension)}
              key={extension.id}
              className={styles.extensionCard}
            >
              <extension.icon size={22}/>

              <h3>{extension.title}</h3>
              <p className={styles.p}>{extension.subtitle}</p>
              <div className={styles.removeAndCheckbox}>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    onDeleteExtension(extension.id);
                  }}
                  className={styles.removeBtn}
                >
                  Remove
                </button>
                <label className={styles.switch} onClick={(e) => e.stopPropagation()} >
                <input
                  type="checkbox"
                  checked={extension.isActive}
                  onChange={(e) =>{
                    e.stopPropagation();
                    handleToggleActive(extension.id, !extension.isActive)
                  }}
                />
                 <span className={styles.slider}></span>
                </label>
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  );
}

export default Index;
