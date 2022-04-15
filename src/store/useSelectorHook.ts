import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '@/store';

export default function useSelectorHook<T>(fn: (state: RootState) => T): T {
  return useSelector(fn, shallowEqual);
}
