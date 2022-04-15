interface IAction {
  type: string;
}

// Spinner 보여주기/숨김
interface ShowSpinnerActionPayload {
  isShowSpinner: boolean;
}

interface ShowSpinnerAction extends IAction {
  payload: ShowSpinnerActionPayload;
}
