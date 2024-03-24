interface requestLoanAction {
  type: "account/requestLoan";
  payload: {
    amount: number;
    purpose: string;
  };
}

interface depositAction {
  type: "account/deposit";
  payload: number;
}

interface withdrawAction {
  type: "account/withdraw";
  payload: number;
}

interface payLoanAction {
  type: "account/payLoan";
}

type AccountAction =
  | requestLoanAction
  | depositAction
  | withdrawAction
  | payLoanAction;

interface AccountState {
  balance: number;
  loan: number;
  loanPurpose: string;
}

const initialStateAccount: AccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(
  state = initialStateAccount,
  action: AccountAction
) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

function deposit(amount: number): AccountAction {
  const action: depositAction = { type: "account/deposit", payload: amount };
  return action;
}

function withdraw(amount: number): AccountAction {
  const action: withdrawAction = { type: "account/withdraw", payload: amount };
  return action;
}
function requestLoan(amount: number, purpose: string): AccountAction {
  const action: requestLoanAction = {
    type: "account/requestLoan",
    payload: {
      amount,
      purpose,
    },
  };
  return action;
}
function payLoan(): AccountAction {
  const action: payLoanAction = { type: "account/payLoan" };
  return action;
}

export { deposit, withdraw, requestLoan, payLoan };
