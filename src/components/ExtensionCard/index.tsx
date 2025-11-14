import { useSearchParams } from "react-router-dom";

function ExtensionPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const nmCategory = searchParams.get("nmCategory");

  return (
    <div>
      <h1 >{title}</h1> 
      <p>{description}</p>
      <p>{nmCategory}</p>
    </div>
  );
}

export default ExtensionPage;
