package com.kiti.server.controllers;

import com.kiti.server.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.kiti.server.services.ProductService;

import java.util.List;
import java.util.logging.Logger;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("")
    public List<Product> getProducts() {
        return productService.getAllProducts();
    }

    @PostMapping("/add")
    public String add(@RequestBody Product product) {
        String response = product.getName() + " has been added to the database!";
        System.out.println("GOT A NEW PRODUCT ADDED!!! :D");
        productService.saveProduct(product);
        return response ;
    }
}
