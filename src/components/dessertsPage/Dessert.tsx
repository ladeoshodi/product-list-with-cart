interface Iimage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

interface IDessert {
  image: Iimage;
  name: string;
  category: string;
  price: number;
}

function Dessert({ image, name, category, price }: IDessert) {
  return (
    <div>
      <img
        src={image.desktop}
        alt={name}
        sizes="(max-width: 500px) 400px, (max-width: 800px) 424px, 480px"
        srcSet={`${image.mobile} 400w, ${image.tablet} 424w, ${image.desktop} 480w`}
      />
      <p>{name}</p>
    </div>
  );
}

export default Dessert;
