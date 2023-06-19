import { useRef } from "react";

import companysvg from "../assets/development.svg";
import websvg from "../assets/web.svg";
import marketingsvg from "../assets/marketing.svg";
import settingsvg from "../assets/Setting.svg";

export default function SecondForm({ countPage, formik, setCountPage }) {
  return (
    <div
      className="form-content"
      style={{ display: countPage === 2 ? "block" : "none" }}
    >
      <div className="form-range">
        <div className="rangeNumFull">1</div>
        <div className="range">
          <div className="rangeInnerFull"></div>
        </div>
        <div className="rangeNumFull">2</div>
        <div className="range">
          <div className="rangeInnerHalf"></div>
        </div>
        <div className="rangeNumEmpty">3</div>
        <div className="range">
          <div className=""></div>
        </div>
        <div className="rangeNumEmpty">4</div>
      </div>

      <div className="solid"></div>
      <div>
        <h3>Our services</h3>
        <p>Please select which service you are interested in.</p>

        <div className="form-body">
          <article className="secondpagearticle">
            <input
              type="checkbox"
              name="services"
              id="development"
              className="secondpageinputs"
              value="development"
              onChange={formik.handleChange}
            />
            <label htmlFor="development" className="secondlabels">
              <img src={companysvg} alt="" />
              <span>Development</span>
            </label>
          </article>

          <article className="secondpagearticle">
            <input
              type="checkbox"
              name="services"
              id="webDesign"
              value="webDesign"
              className="secondpageinputs"
              onChange={formik.handleChange}
            />
            <label htmlFor="webDesign" className="secondlabels">
              <img src={websvg} alt="" />
              <span>Web Design</span>
            </label>
          </article>

          <article className="secondpagearticle">
            <input
              type="checkbox"
              name="services"
              id="marketing"
              value="marketing"
              className="secondpageinputs"
              onChange={formik.handleChange}
            />
            <label htmlFor="marketing" className="secondlabels">
              <img src={marketingsvg} alt="" />
              <span>Marketing</span>
            </label>
          </article>

          <article className="secondpagearticle">
            <input
              type="checkbox"
              name="services"
              id="other"
              value="other"
              className="secondpageinputs"
              onChange={formik.handleChange}
            />
            <label htmlFor="other" className="secondlabels">
              <img src={settingsvg} alt="" />
              <span>Other</span>
            </label>
          </article>
        </div>
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
            : countPage === 2 && formik.values.services.length !== 0 //2ci sehifedeki checkboxlardan azi 1i doludursa PageCount 3 olur
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
