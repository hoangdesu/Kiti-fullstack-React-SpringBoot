package com.kiti.server.controllers;

import com.kiti.server.models.Product;
import com.kiti.server.repositories.ProductDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.kiti.server.services.ProductService;

import java.time.LocalDate;
import java.util.List;

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
    public String addProduct(@RequestBody Product product) {
        String response = product.getName() + " has been added to the database! :D";
        productService.saveProduct(product);
//        System.out.println(response);
        return response ;
    }

    @DeleteMapping(path = "/delete/{productID}")
    public String deleteProduct(@PathVariable Long productID) {
        productService.deleteProduct(productID);
        return "Product id: " + productID + " has been deleted!";
    }

    @PutMapping("/update/{productID}")
    public String updateProduct(@PathVariable Long productID,
                                @RequestParam(required = false, value = "name") String name,
                                @RequestParam(required = false, value = "category") String category,
                                @RequestParam(required = false, value = "price") Double price,
                                @RequestParam(required = false, value = "discount") Double discount,
                                @RequestParam(required = false, value = "addedDate") LocalDate addedDate,
                                @RequestParam(required = false, value = "rating") Double rating,
                                @RequestParam(required = false, value = "image") String image,
                                @RequestParam(required = false, value = "seller") String seller,
                                @RequestParam(required = false, value = "stock") Integer stock
                                ) {

        productService.updateProduct(productID,
                name,
                category,
                price,
                discount,
                addedDate,
//                rating,
                image,
                seller
//                stock
        );

        return "Updated info:\n"
                + "ID: " + productID + "\n"
                + "Name: " + name + "\n"
                + "Category: " +  category + "\n"
                + "Price: " + price + "\n"
                + "Discount: " + discount + "\n"
                + "Image URL: " + image + "\n";
    }
}
