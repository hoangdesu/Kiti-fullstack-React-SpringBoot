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

    @Bean
    CommandLineRunner commandLineRunner(ProductDAO productDAO) {

        Product p1 = new Product("pd1", "razer", 69);
        Product p2 = new Product("pd2", "logitect", 96.11);
        Product p3 = new Product("pd2", "Apple", 96.11, 20.1, LocalDate.now(), 3.5, new String[]{"img1", "img2"}, "Brian", 12);
        return args -> {
            productDAO.saveAll(
                    List.of(p1, p2, p3)
            );

//            productDAO.save(p1);
        };
    }
}
