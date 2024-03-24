import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useState } from "react";
import { deposit, withdraw } from "./accountSlice";

function AccountComponent() {
  const [value, setValue] = useState("");
  const account = useSelector((store: RootState) => store.account);
  const dispatch = useDispatch<AppDispatch>();
  //   console.log(account);

  function handleDeposit() {
    if (value === "") return;
    dispatch(deposit(Number(value)));
  }

  function handleWithdraw() {
    if (value === "" || account.balance < Number(value)) return;
    dispatch(withdraw(Number(value)));
  }

  return (
    <>
      <div>
        <label>Deposit&Withdraw</label>
        <input value={value} onChange={(e) => setValue(e.target.value)}></input>
        <button onClick={handleDeposit}>deposit</button>
        <button onClick={handleWithdraw}>withdraw</button>
      </div>
      <p>You have {account.balance} in your account.</p>
    </>
  );
}

export default AccountComponent;
