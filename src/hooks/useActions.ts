import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

export const useActions = () => {
  const dispatch = useDispatch();

  //Lists all action-creators passed in and binds them with dispatch
  return bindActionCreators(actionCreators, dispatch);
  //{searchRepositories: dispatch(searchRepositories(repo)) }
};
