package com.kiti.server.Products;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {
    @GetMapping("/hi")
    public String hello() {
        return "Hellu!";
    }

//    @GetMapping("/products")
    @RequestMapping("/products")
    public String[] getProducts() {
        return new String[]{"razer", "logitect", "msi", "keychron", "ricacdo", "doroke"};
    }
}
