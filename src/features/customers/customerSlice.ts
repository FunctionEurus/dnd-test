interface createCustomerAction {
  type: "customer/createCustomer";
  payload: CustomerState;
}

interface updateNameAction {
  type: "customer/updateName";
  payload: {
    fullName: string;
  };
}

export type CustomerAction = createCustomerAction | updateNameAction;

interface CustomerState {
  fullName: string;
  nationID: string;
  createdAt: string;
}

const initialCustomerState: CustomerState = {
  fullName: "",
  nationID: "",
  createdAt: "",
};

export default function customerReducer(
  state: CustomerState = initialCustomerState,
  action: CustomerAction
) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationID: action.payload.nationID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload.fullName,
      };
    default:
      return state;
  }
}

function createCustomer(fullName: string, nationID: string): CustomerAction {
  const action: createCustomerAction = {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationID,
      createdAt: new Date().toISOString(),
    },
  };
  return action;
}

function updateName(fullName: string): CustomerAction {
  const action: updateNameAction = {
    type: "customer/updateName",
    payload: {
      fullName,
    },
  };
  return action;
}

export { createCustomer, updateName };
