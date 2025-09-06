import React, { useState } from "react";
import { Container, Typography, Pagination, Box } from "@mui/material";
import products from "../products.json"; // Make sure this is a valid array
import Product from "../components/Product";
import "../components/Product.css"; // Your custom CSS

function Products() {
  const [page, setPage] = useState(1);
  const productsPerPage = 6; // 2 rows × 3 columns

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        gutterBottom
      >
        Our Products
      </Typography>

      <div className="product-grid">
        {currentProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <Product {...product} />
          </div>
        ))}
      </div>

      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={Math.ceil(products.length / productsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </Container>
  );
}

export default Products;
