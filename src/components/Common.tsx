import useSelectorHook from '@/store/useSelectorHook';
import { isShowSpinner } from '../store/features/global';
import Loader from './Loader';

const GlobalCommon = () => {
  const isShow = useSelectorHook(isShowSpinner);
  return <>{isShow && <Loader />}</>;
};

export default GlobalCommon;
