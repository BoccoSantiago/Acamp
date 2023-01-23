import { Header, Card, Footer, HorizontalCards } from "../components";
import { useParams } from "react-router-dom";
import data from "../data/data.json";

function Alt() {
  const { id } = useParams();
  console.log(id);

  const propertyData = data.properties.filter((x) => x.id === id);
  const accommodationTypes = propertyData[0].accommodationTypes;
  const image = propertyData[0].coverImage;
  const title = propertyData[0].title;
  const address = propertyData[0].formattedAddress;
  const description = propertyData[0].description;
  const price = propertyData[0].toPrice;
  const currency = propertyData[0].currency;
  const rating = propertyData[0].rating;
  const hasElectricity = propertyData[0].hasElectricity;
  const lat = propertyData[0].location.lat;
  const lng = propertyData[0].location.lng;

  return (
    <>
      <Header />
      <Card
        image={image}
        title={title}
        address={address}
        lat={lat}
        lng={lng}
        description={description}
        price={price}
        currency={currency}
        rating={rating}
        accommodationTypes={accommodationTypes}
        hasElectricity={hasElectricity}
      />
      <HorizontalCards />
      <Footer />
    </>
  );
}

export default Alt;
