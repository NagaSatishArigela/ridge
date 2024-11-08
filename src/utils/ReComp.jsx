export const CustomCard = ({ image, title, description, altText }) => {
  return (
    <div className="card">
      <img src={image} alt={altText} className="card-image" loading="lazy" />
      <div className="card-content">
        <h5 className="card-title" style={{ textAlign: "center" }}>
          {title}
        </h5>
        {description && <p className="card-description">{description}</p>}
      </div>
    </div>
  );
};
