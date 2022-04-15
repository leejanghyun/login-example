interface LoginActionPayload {
  id: string;
  password: string;
}

interface LoginAction extends IAction {
  payload: LoginActionPayload;
}

interface SetUserIdActionPayload {
  id: string;
}

interface SetUserIdAction extends IAction {
  payload: SetUserIdActionPayload;
}
