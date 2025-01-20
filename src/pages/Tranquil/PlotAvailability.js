import './PlotAvailability.css';

const PlotAvailability = ({openModal}) => {
  return (
    <section className="plot-availability">
      <h2 className="plot-title">PLOT AVAILABILITY</h2>
      <div className="plot-cards">
        <div className="plot-card total">
          <p className="number">225</p>
          <p className="label">Total Plots</p>
        </div>
        <div className="plot-card sold">
          <p className="number">196</p>
          <p className="label">Sold</p>
        </div>
        <div className="plot-card available">
          <p className="number">29</p>
          <p className="label">Available Plots</p>
        </div>
      </div>
      <div className="plot-buttons">
        <button className="plot-button" onClick={() => openModal()}>Check Plot Availability</button>
        <button className="plot-button" onClick={() => openModal()}>View Original Layout</button>
      </div>
    </section>
  );
};

export default PlotAvailability;
