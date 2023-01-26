import { Header, Card, Footer, HorizontalScroll } from "../components";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import { useEffect } from "react";

function Details() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  const { id } = useParams();

  const propertyData = data.properties.filter((x) => x.id === id);

  const {
    coverImage,
    title,
    formattedAddress,
    location,
    description,
    rating,
    price,
    currency,
    accommodationTypes,
    hasElectricity,
  } = propertyData[0];

  return (
    <>
      <Header />
      <Card
        image={coverImage}
        title={title}
        address={formattedAddress}
        lat={location.lat}
        lng={location.lng}
        description={description}
        rating={rating}
        price={price}
        currency={currency}
        accommodationTypes={accommodationTypes}
        hasElectricity={hasElectricity}
      />
      <HorizontalScroll />
      <Footer />
    </>
  );
}

export default Details;
