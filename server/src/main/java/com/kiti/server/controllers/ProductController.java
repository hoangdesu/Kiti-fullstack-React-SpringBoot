package com.kiti.server.controllers;

import com.kiti.server.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.kiti.server.services.ProductService;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {
    
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

   @GetMapping("/api/products")
    public List<Product> getProducts() {
        return productService.getAllProducts();
    }
}
