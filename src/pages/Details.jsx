import { Header, Card, Footer, HorizontalScroll } from "../components";
import { useParams } from "react-router-dom";
import data from "../data/data.json";

function Alt() {
  const { id } = useParams();

  const propertyData = data.properties.filter((x) => x.id === id);

  return (
    <>
      <Header />
      <Card data={propertyData[0]} />
      <HorizontalScroll />
      <Footer />
    </>
  );
}

export default Alt;
