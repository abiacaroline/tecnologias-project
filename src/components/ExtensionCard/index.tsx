import { useSearchParams } from "react-router-dom";
import styles from "./Extension.module.css";

function ExtensionPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const nmCategory = searchParams.get("nmCategory");

  return (
    <div className={styles.page}>
      <h1 className={styles.h1}>{title}</h1> 
      <p className={styles.description}>{description}</p>
      <p>{nmCategory}</p>
    </div>
  );
}

export default ExtensionPage;
