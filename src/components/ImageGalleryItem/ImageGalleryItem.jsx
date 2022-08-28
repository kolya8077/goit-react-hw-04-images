import PropTypes from 'prop-types'
import {
  GalleryItem,
  GalleryItemImg,
} from 'components/ImageGalleryItem/ImageGalleryItem.style';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onClick }) => (
  <GalleryItem
    className="gallery-item"
    onClick={() => {
      onClick(largeImageURL);
    }}
  >
    <GalleryItemImg src={webformatURL} alt={tags} />
  </GalleryItem>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
