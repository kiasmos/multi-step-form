import { useRef } from "react";

export default function FormFirst({ countPage, formik, setCountPage }) {
  return (
    <div
      className="form-content"
      style={{ display: countPage === 1 ? "block" : "none" }}
    >
      <div className="form-range">
        <div className="rangeNumFull">1</div>
        <div className="range">
          <div className="rangeInnerHalf"></div>
        </div>
        <div className="rangeNumEmpty">2</div>
        <div className="range">
          <div className=""></div>
        </div>
        <div className="rangeNumEmpty">3</div>
        <div className="range">
          <div className=""></div>
        </div>
        <div className="rangeNumEmpty">4</div>
      </div>
      <div className="solid"></div>
      <div>
        <h3>Contact details</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisc.</p>

        <div className="form-body">
          <label htmlFor="name" className="name">
            Name
          </label>
          <input
            className="firstpageinputs"
            type="text"
            name="name"
            id="name"
            placeholder="John Carter"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small className="error-name">
            {formik.touched.name && formik.errors.name && formik.errors.name}
          </small>

          <label htmlFor="email" className="email">
            Email
          </label>
          <input
            className="firstpageinputs"
            type="text"
            name="email"
            id="email"
            placeholder="Email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small className="error-email">
            {formik.touched.email && formik.errors.email && formik.errors.email}
          </small>

          <label htmlFor="phone" className="number">
            Phone Number
          </label>
          <input
            className="firstpageinputs"
            type="text"
            name="phone"
            id="phone"
            placeholder="0705086020"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small className="error-phone">
            {formik.touched.phone && formik.errors.phone && formik.errors.phone}
          </small>

          <label htmlFor="company" className="compname">
            Company
          </label>
          <input
            className="firstpageinputs"
            type="text"
            name="company"
            id="company"
            placeholder="Company name"
            value={formik.values.company}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small className="error-company">
            {formik.touched.company &&
              formik.errors.company &&
              formik.errors.company}
          </small>
        </div>
      </div>
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

// style={{ display: "none" }}
