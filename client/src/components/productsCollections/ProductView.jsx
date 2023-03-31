import React from 'react';
import {
  Typography,
  Box,
  Toolbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { useState } from 'react';
import { Input, CircularProgress, Slider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import ProductCollectionCard from './ProductCollectionCard';
import { minMaxValueOfKeyFromArrayOfObject } from '../../shared/common';
import CircularLoader from '../common/Loader';

export default function ProductView({ Product, MainTitle }) {
  const [productCollection, setProductCollection] = useState([...Product]);

  const price = minMaxValueOfKeyFromArrayOfObject(
    'product_selling_price',
    productCollection
  );
  const [range, setRange] = useState([price.min, price.max]);
  const [timerId, setTimerId] = useState(null);
  const [loading, setLoading] = useState(false);

  let filterProductByPrice = (data) => {
    const [min, max] = data;
    setLoading(true);
    const product = Product.filter((product) => {
      return (
        product.product_selling_price >= min &&
        product.product_selling_price <= max
      );
    });
    setProductCollection(product);
    setLoading(false);
  };

  const handleSliderChange = (event, newValue) => {
    setRange(newValue);
  };

  const handleSliderChangeCommitted = (event, newValue) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    setLoading(true);
    setTimerId(
      setTimeout(() => {
        filterProductByPrice(newValue);
        setLoading(false);
      }, 1000)
    );
  };
  const handleInputChange = (event, inputIndex) => {
    const value = Number(event.target.value);
    const newRange = [...range];
    newRange[inputIndex] = value;
    setRange(newRange);
    setLoading(true);
    filterProductByPrice(newRange);
    setLoading(false);
  };
  const handleBlur = (event, inputIndex) => {
    const value = Number(event.target.value);
    if (value < 0) {
      setRange(['', range[1]]);
    } else {
      const newRange = [...range];
      newRange[inputIndex] = value;
      setRange(newRange);
      setLoading(true);
      filterProductByPrice(newRange);
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: '90%', margin: 'auto' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar className='MuiAutocomplete-endAdornment'>
          <Box></Box>
          <Box>
            <Typography variant='h5' className='main-title'>
              {MainTitle}
            </Typography>
          </Box>
          <Box></Box>
        </Toolbar>
      </Box>

      <Box className='product-collection-product-view'>
        <Box className='thiner-box-shadow padding-top-none'>
          <div>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography>COLLECTION</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel2a-content'
                id='panel2a-header'
              >
                <Typography>VENDOR</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel2a-content'
                id='panel2a-header'
              >
                <Typography>PRICE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box className='flex-space-between'>
                  <Input
                    value={range[0]}
                    margin='dense'
                    sx={{
                      width: '45%',
                      marginBottom: '10px',
                    }}
                    onChange={(event) => handleInputChange(event, 0)}
                    onBlur={(event) => handleBlur(event, 0)}
                    // inputProps={{
                    //   step: 1,
                    //   min: 0,
                    //   max: 100,
                    //   type: 'number',
                    // }}
                  />
                  <Input
                    value={range[1]}
                    margin='dense'
                    sx={{
                      width: '45%',

                      marginBottom: '10px',
                    }}
                    onChange={(event) => handleInputChange(event, 1)}
                    onBlur={(event) => handleBlur(event, 1)}
                    type='number'
                  />
                </Box>
                <Slider
                  sx={{ color: '#3e8e41' }}
                  value={range}
                  onChange={handleSliderChange}
                  min={100}
                  step={0.1}
                  max={10000}
                  valueLabelDisplay='auto'
                  onChangeCommitted={handleSliderChangeCommitted}
                />
                <Box>
                  <Typography variant='span'>{100}</Typography>

                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    {10000}
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel2a-content'
                id='panel2a-header'
              >
                <Typography>AVAILABILITY</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel2a-content'
                id='panel2a-header'
              >
                <Typography>READY TO SHIP</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel2a-content'
                id='panel2a-header'
              >
                <Typography>SIZE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='span'>
                    <input type='checkbox' />
                  </Typography>
                  <Typography variant='span' padding='0 0 0 5px'>
                    Home Best Seller
                  </Typography>
                  <Typography
                    variant='span'
                    padding='0 0 0 5px'
                    sx={{ float: 'right' }}
                  >
                    (5)
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          </div>
        </Box>
        {!loading && productCollection && productCollection.length == 0 && (
          <Typography
            variant='h2'
            sx={{ textAlign: 'center', padding: '15rem 0' }}
          >
            No Product Found ...
          </Typography>
        )}
        {loading ? (
          <CircularLoader />
        ) : (
          <Box className='col-size-four'>
            {productCollection &&
              productCollection.map((product) => {
                return (
                  <Link
                    to={`/product/${product.product_id}`}
                    className='underline-none card-container-padding-size-four'
                  >
                    <ProductCollectionCard product={product} />
                  </Link>
                );
              })}
          </Box>
        )}
      </Box>
    </Box>
  );
}
