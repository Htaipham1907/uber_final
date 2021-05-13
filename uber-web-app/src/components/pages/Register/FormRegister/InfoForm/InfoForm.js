import "./InfoForm.css";
import Male from "../../../../../resource/images/male-icon.png";
import FeMale from "../../../../../resource/images/female.png";
import Camera from "../../../../../resource/images/compact-camera.png";

const InfoForm = (props) => {
  return (
    <div>
      <p style={{ marginLeft: "20px", marginTop: "20px", fontSize: "28px" }}>
        Enter your information
        </p>
      <div>
        <div className="Card-Info">
          <input
            id="userName"
            name="userName"
            type="text"
            onBlur={props.formik.handleBlur}
            onChange={props.formik.handleChange}
            placeholder="Enter your full name here"
          />
          {props.formik.touched.userName && props.formik.errors.userName && (
            <span>{props.formik.errors.userName}</span>
          )}
        </div>
        <p style={{ margin: " 20px" }}>Select gender</p>
        <div className="Card-SelectGender">
          <img
            alt="Male"
            src={Male}
            id="image"
            name="image"
            onBlur={props.formik.handleBlur}
            onChange={props.formik.handleChange}
          />
          {console.log(props.formik.values)}
          <img alt="Female" src={FeMale} />
        </div>
        <div className="Card-Camera">
          <img alt="Camera" src={Camera} />
          <p>Upload profile picture</p>
        </div>
        {props.formik.isValid && props.formik.dirty ? (
          <button onClick={props.onclick}>
            <i className="fa fa-2x fa-arrow-right"></i>
          </button>
        ) : (
          <button onClick={props.onclick} disabled>
            <i className="fa fa-2x fa-arrow-right"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default InfoForm;
