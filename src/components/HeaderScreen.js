import useCalculator from "../hooks/useCalculator";
import { cnst_borrar } from "../constant/utility";
import { Button } from "./Button";

const HeaderScreen = () => {
  const [val] = useCalculator();
  return (
    <div className="input-group input-group-lg mb-2">
      <input
        type="text"
        className="form-control bg-dark text-white p-2 fs-4"
        disabled
        value={val}
      />
      <Button
        props={{
          value: <i className="fa-solid fa-delete-left"></i>,
          typeButton: cnst_borrar,
        }}
      />
    </div>
  );
};

export default HeaderScreen;
