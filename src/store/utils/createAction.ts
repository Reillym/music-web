interface Action {
  type: string;
  payload?: any;
  meta?: object;
}

export default function createAction(type: string) {
  const payloadCreator = (value: any) => value;
  const typeString = type.toString();

  const actionCreator = (payload: any) => {
    const action: Action = { type };

    if (payload !== undefined) {
      action.payload = payloadCreator(payload);
    }

    return action;
  };

  actionCreator.toString = () => typeString;

  return actionCreator;
}
