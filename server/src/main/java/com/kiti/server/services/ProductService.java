package com.kiti.server.services;

import com.kiti.server.models.Product;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ProductService {
    public List<Product> getAllProducts() {
        LocalDate addedDate = LocalDate.now();
        return List.of(new Product("pd1", 30.0, addedDate, 3),
                new Product("pd2", 35.0, addedDate, 5));
    }
}
