import { useRef } from "react";

export default function ThirdForm({ countPage, formik, setCountPage }) {
  return (
    <div
      className="form-content"
      style={{ display: countPage === 3 ? "block" : "none" }}
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
          <div className="rangeInnerHalf"></div>
        </div>
        <div className="rangeNumEmpty">4</div>
      </div>
      <div className="solid"></div>
      <div>
        <h3>What’s your project budget?</h3>
        <p>Please select the project budget range you have in mind.</p>

        <div className="form-body">
          <article className="thirdpagearticle">
            <input
              name="budget"
              id="5-10"
              value="5-10"
              type="radio"
              className="thirdpageinputs"
              onChange={formik.handleChange}
            />
            <label htmlFor="5-10">
              <span>$5.000 - $10.000</span>
            </label>
          </article>

          <article className="thirdpagearticle">
            <input
              name="budget"
              id="10-20"
              value="10-20"
              type="radio"
              className="thirdpageinputs"
              onChange={formik.handleChange}
            />
            <label htmlFor="10-20">
              <span>$10.000 - $20.000</span>
            </label>
          </article>

          <article className="thirdpagearticle">
            <input
              name="budget"
              id="20-50"
              value="20-50"
              type="radio"
              className="thirdpageinputs"
              onChange={formik.handleChange}
            />
            <label htmlFor="20-50">
              <span>$20.000 - $50.000</span>
            </label>
          </article>

          <article className="thirdpagearticle">
            <input
              name="budget"
              id="50"
              value="50"
              type="radio"
              className="thirdpageinputs"
              onChange={formik.handleChange}
            />
            <label htmlFor="50">
              <span>$50.000 +</span>
            </label>
          </article>
        </div>
        <div>{formik.errors.budget}</div>
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
        onClick={
          countPage === 1 &&
          !(
            formik.errors.name ||
            formik.errors.email ||
            formik.errors.phone ||
            formik.errors.company
          ) //1ci sehifedeki validation duzgundurse pageCount 2 olur
            ? () => {
                setCountPage(2);
              }
            : countPage === 2 && formik.values.length !== 0 //2ci sehifedeki checkboxlardan azi 1i doludursa PageCount 3 olur
            ? () => {
                setCountPage(3);
              }
            : countPage === 3 && !formik.errors.budget // eger budget'den 1i secilibse error yoxdur demekdir ve pageCount 4 olur. yeni sonuncu sehife acilir
            ? () => {
                setCountPage(4);
              }
            : undefined // Remove the onClick listener if none of the conditions match
        }
      >
        {countPage === 4 ? "Submit" : "Next Step"}
      </button>
    </div>
  );
}
