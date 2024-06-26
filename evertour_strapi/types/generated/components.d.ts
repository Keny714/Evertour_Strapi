import type { Schema, Attribute } from '@strapi/strapi';

export interface HotelHotel extends Schema.Component {
  collectionName: 'components_hotel_hotels';
  info: {
    displayName: 'Hotel';
    icon: 'house';
    description: '';
  };
  attributes: {
    HotelName: Attribute.String;
    Description: Attribute.Text;
    acco1: Attribute.String;
    acco2: Attribute.String;
    acco3: Attribute.String;
    day1: Attribute.String;
    day2: Attribute.String;
    day3: Attribute.String;
    day4: Attribute.String;
    day5: Attribute.String;
    review: Attribute.Text;
    Price: Attribute.BigInteger;
    HotelNum: Attribute.String;
    Image1: Attribute.Media<'images'>;
    Image2: Attribute.Media<'images'>;
    Image3: Attribute.Media<'images' | 'videos'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hotel.hotel': HotelHotel;
    }
  }
}
