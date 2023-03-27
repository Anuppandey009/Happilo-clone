import React, { useEffect, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import {
  Box,
  Button,
  Typography,
  ImageList,
  ImageListItem,
} from '@mui/material';
import styled from '@emotion/styled';

import Header from '../header/Header';
import { availableSizes, DESCRIPTION, itemData } from '../../shared/constant';
import ReasonToBuy from './ReasonToBuy';

const ColorButton = styled(Button)(({ theme }) => ({
  padding: '-20px !important',
  '&:hover': {
    backgroundColor: '#00523b',
    color: 'white',
  },
}));

const ProductDescription = () => {
  const [currentImage, setCurrentImage] = useState({ ...itemData[0] });
  const [addToCartQuantity, setaddToCartQuantity] = useState(0);
  const [currentPackSize, setCurrentPackSize] = useState({
    ...availableSizes[0],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Header />
      <Box
        sx={{
          width: '90%',
          margin: 'auto',
          padding: '12rem 0 0 0rem',
          display: 'flex',
        }}
      >
        <Box>
          <ImageList sx={{ width: ' 10rem', height: 500 }} cols={1}>
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                sx={{ width: '85%', margin: 'auto', borderRadius: 2 }}
              >
                <img
                  onClick={() => setCurrentImage(item)}
                  className='description-image'
                  src={`${item.img}`}
                  srcSet={`${item.img}`}
                  alt={item.title}
                  loading='lazy'
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        <Box sx={{ padding: ' 0 3rem' }}>
          <Box
            style={{
              borderRadius: '15px',
              backgroundColor: 'white',
              width: '30rem',
            }}
          >
            <ReactImageMagnify
              {...{
                smallImage: {
                  isFluidWidth: true,
                  src: currentImage.img,
                  srcSet: `${currentImage.img} 1200w`,
                  sizes:
                    '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
                },
                largeImage: {
                  src: currentImage.img,
                  width: 1200,
                  height: 1800,
                },
                enlargedImageContainerDimensions: {
                  width: '173%',
                  height: '100%',
                },
                enlargedImageContainerClassName:
                  'enlarged-image-container description-image',
              }}
            />
          </Box>
        </Box>

        <Box>
          <Typography variant='h6' sx={{ fontWeight: 600 }}>
            Happilo 100% Natural Premium California Almonds
          </Typography>
          <Typography variant='h6' sx={{ fontWeight: 600 }}>
            ₹ {currentPackSize.price.toFixed(2)}
          </Typography>
          <br />
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ fontWeight: 600 }}>Size </Typography>
            <Typography sx={{ padding: '0px 10px 10px 10px' }}>
              {currentPackSize.quantity}
            </Typography>
          </Box>
          <Box>
            {availableSizes.map((product) => {
              return (
                <ColorButton
                  onClick={() => setCurrentPackSize(product)}
                  style={{ textTransform: 'none' }}
                  sx={{ margin: '0 6px 6px 6px', backgroundColor: 'white' }}
                  variant='contained'
                >
                  {product.quantity}
                </ColorButton>
              );
            })}
          </Box>
          <br />
          <br />
          <Box sx={{ display: 'flex' }}>
            <ColorButton
              onClick={() =>
                addToCartQuantity > 0 &&
                setaddToCartQuantity(addToCartQuantity - 1)
              }
              style={{ textTransform: 'none' }}
              sx={{ margin: '0 15px 6px 6px', backgroundColor: 'white' }}
              variant='contained'
            >
              <Typography
                variant='h5'
                sx={{ fontSize: '15px !important', fontWeight: 500 }}
              >
                -
              </Typography>
            </ColorButton>
            <Typography variant='h5'>{addToCartQuantity}</Typography>
            <ColorButton
              onClick={() => setaddToCartQuantity(addToCartQuantity + 1)}
              style={{ textTransform: 'none' }}
              sx={{ margin: '0 15px 6px 15px', backgroundColor: 'white' }}
              variant='contained'
            >
              <Typography
                variant='h5'
                sx={{ fontSize: '15px !important', fontWeight: 500 }}
              >
                +
              </Typography>
            </ColorButton>
            <ColorButton
              // onClick={() => setaddToCartQuantity(addToCartQuantity + 1)}

              sx={{ margin: '0 15px 6px 15px', backgroundColor: '#ffd200' }}
              variant='contained'
            >
              <Typography
                variant='h5'
                sx={{ fontSize: '15px !important', fontWeight: 500 }}
              >
                Add To Cart
              </Typography>
            </ColorButton>
            <ColorButton
              // onClick={() => setaddToCartQuantity(addToCartQuantity + 1)}

              sx={{ margin: '0 15px 6px 15px', backgroundColor: '#ffd200' }}
              variant='contained'
            >
              <Typography
                variant='h5'
                sx={{ fontSize: '15px !important', fontWeight: 500 }}
              >
                Buy it now
              </Typography>
            </ColorButton>
          </Box>
          <br />
          <br />
          <Typography
            sx={{ height: '0.2px', backgroundColor: 'black' }}
          ></Typography>
          <br />
          <Typography>{DESCRIPTION.product_description}</Typography>
          <ReasonToBuy reason_details={DESCRIPTION.reasons_to_buy} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDescription;
