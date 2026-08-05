import type React from "react";

export interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  subcaption?: string;
}

export interface CarouselGallery {
  id: string;
  title: string;
  category?: string;
  icon?: React.ReactNode;
  description: string;
  images: CarouselImage[];
}

export interface CarouselModalState {
  gallery: CarouselGallery;
  imageIndex: number;
}
