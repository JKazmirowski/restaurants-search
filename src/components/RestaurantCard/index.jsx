import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import { Restaurant, RestaurantInfo, Address, RestaurantPhoto } from './styles';
import Text from '../Text';


const ResturantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Text size="large">{restaurant.name}</Text>
        <ReactStars count={5} value={restaurant.rating} edit={false} isHalf activeColor="#e7711c" />
        <Address size="medium">{restaurant.formatted_address || restaurant.vicinity}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        onLoad={() => setImageLoaded(true)}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurant}
        alt="foto do restaurante"
      />
      {!imageLoaded && <ImageSkeleton width="100px" height="100px" />}
    </Restaurant>
  );
};
export default ResturantCard;
