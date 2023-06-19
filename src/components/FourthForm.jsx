import submitBg from "../assets/submitBg.svg";

export default function FourthForm({ countPage, formik, setCountPage }) {
  return (
    <div
      className="form-content"
      style={{ display: countPage === 4 ? "block" : "none" }}
    >
      <div className="form-range">
        <div className="rangeNumFull">1</div>
        <div className="range">
          <div className="rangeInnerFull"></div>
        </div>
        <div className="rangeNumFull">2</div>
        <div className="range">
          <div className="rangeInnerFull"></div>
        </div>
        <div className="rangeNumFull">3</div>
        <div className="range">
          <div className="rangeInnerFull"></div>
        </div>
        <div className="rangeNumFull">4</div>
      </div>
      <div className="form-content-submit">
        <img src={submitBg} alt="#" />
        <h3 className="headerFourth">Submit your quote request</h3>
        <p className="descriptionFourth">
          Please review all the information you previously typed in the past
          steps, and if all is okay, submit your message to receive a project
          quote in 24 - 48 hours.
        </p>
      </div>
      <button
        className="previous-step"
        type="button"
        style={{ visibility: countPage === 1 ? "hidden" : "visible" }}
        onClick={() => setCountPage((prev) => prev - 1)}
      >
        Previous Step
      </button>
      <button
        className="next-step"
        type="button"
        style={{
          bottom: countPage === 4 ? "125px" : "-112px",
          right: countPage === 4 ? "495px" : "-45px",
        }}
        onClick={() => {
          console.log(formik.values);
        }}
      >
        {countPage === 4 ? "Submit" : "Next Step"}
      </button>
    </div>
  );
}
