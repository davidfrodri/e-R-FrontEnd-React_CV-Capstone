import Main from "../Main/Main"
import Panel from "../../components/Panel/Panel"
	

const Inner = (): JSX.Element => {
  return (
    <div className="inner">
      <Panel />
      <Main />
    </div>
  );
};

export default Inner;