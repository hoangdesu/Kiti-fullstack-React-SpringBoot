package com.kiti.server.configs;

import com.kiti.server.models.Product;
import com.kiti.server.repositories.ProductDAO;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class ProductConfig {

//    @Bean
//    CommandLineRunner commandLineRunner(ProductDAO productDAO) {
////        List<Product> productsTest = List.of(
//////                new Product("pd1", 30.0, LocalDate.now(), 3),
//        Product p1 = new Product("pd1", 30.0, "mouse", LocalDate.now(), 3);
//        Product p2 = new Product("pd2", 35.0, "keyboard", LocalDate.of(2021, Month.FEBRUARY, 25), 5);
//        return args -> {
//            productDAO.saveAll(
//                    List.of(p1, p2)
//            );
//
////            productDAO.save(p1);
//        };
//    }
}
