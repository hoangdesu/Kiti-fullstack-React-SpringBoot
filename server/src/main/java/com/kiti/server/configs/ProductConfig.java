package com.kiti.server.configs;

import com.kiti.server.models.Product;
import com.kiti.server.repositories.ProductDAO;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class ProductConfig {

    @Bean
    CommandLineRunner commandLineRunner(ProductDAO productDAO) {

        List<Product> sampleProducts = List.of(
                new Product("pd1", "razer", 69),
                new Product("pd2", "logitect", 96.11),
                new Product("pd2", "Apple", 96.11, 20.1, LocalDate.of(2021, 2, 26), 3.5, new String[]{"img1", "img2"}, "Brian", 12),
                new Product("pd2", "Apple", 96.11, 20.1, LocalDate.of(2021, 2, 26), 3.5, new String[]{"img1", "img2"}, "Brian", 12),
                new Product("pd2", "Apple", 96.11, 20.1, LocalDate.of(2021, 2, 26), 3.5, new String[]{"img1", "img2"}, "Brian", 12),
                new Product("pd2", "Apple", 96.11, 20.1, LocalDate.of(2021, 5, 14), 3.5, new String[]{"img1", "img2"}, "Brian", 12)
        );
        return args -> {
            productDAO.saveAll(sampleProducts);

//            productDAO.save(p1);
        };
    }
}
