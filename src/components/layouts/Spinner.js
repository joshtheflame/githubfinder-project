import Loader from "react-loader-spinner";

const spinnerstyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%",
};
const Spinner = () => (
  <div style={spinnerstyle}>
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      margin="auto"
    />
  </div>
);

export default Spinner;
