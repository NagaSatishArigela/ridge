const AreaDivison = ({openModal}) => {
  return (
    <section className="plot-availability">
      <h2 className="plot-title">Area Divison</h2>
      <div className="plot-cards">
        <div className="plot-card total">
          <p className="number">150 Acres</p>
          <p className="label">Total Estimated Area</p>
        </div>
        <div className="plot-card sold">
          <p className="number">31 Acres</p>
          <p className="label">Phase 1</p>
        </div>
        <div className="plot-card available">
          <p className="number">4 Acres</p>
          <p className="label">Estimated Resort Area</p>
        </div>
        <div className="plot-card available">
          <p className="number">151</p>
          <p className="label">Plot units for Phase 1</p>
        </div>
        <div className="plot-card available">
          <p className="number">3 Acres</p>
          <p className="label">Park</p>
        </div>
      </div>
    </section>
  );
};

export default AreaDivison;
