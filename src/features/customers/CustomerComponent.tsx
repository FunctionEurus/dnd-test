import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createCustomer } from "./customerSlice";
import { AppDispatch, RootState } from "../../store";

function CustomerComponent() {
  const [name, setName] = useState("");
  const [nationID, setNationID] = useState("");
  const customer = useSelector((store: RootState) => store.customer);
  const dispatch = useDispatch<AppDispatch>();

  function handleSubmit() {
    if (!name || !nationID) return;
    dispatch(createCustomer(name, nationID));
    setName("");
    setNationID("");
  }

  return (
    <>
      <div>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>NationID</label>
        <input value={nationID} onChange={(e) => setNationID(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Submit</button>

      {customer.fullName && (
        <p>
          Hello, {customer.fullName}. You come from {customer.nationID}
        </p>
      )}
    </>
  );
}

export default CustomerComponent;
