import { ThreeDots } from 'react-loader-spinner';
import { LoaderEl } from './loader.style';

export const Loader = () => {
  return (
    <LoaderEl>
      <ThreeDots />
    </LoaderEl>
  )
}