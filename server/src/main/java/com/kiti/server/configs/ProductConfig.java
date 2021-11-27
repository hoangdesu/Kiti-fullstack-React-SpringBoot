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

        // populate database
        List<Product> sampleProducts = List.of(
                new Product("Apple AirPods (2nd Generation)", "Electronics", 2890000, 5, LocalDate.of(2018, 6, 26), 4.5, "https://m.media-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg", "Apple", 120),
                new Product("Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!", "Books", 690000, 0, LocalDate.of(2017, 4, 11), 4, "https://images-na.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SX330_BO1,204,203,200_.jpg", "Robert Kiyosaki", 71),
                new Product("Apple iPhone 13 Pro Max (256GB, Gold)", "Cell phones", 24900000, 12, LocalDate.of(2011, 10, 19), 4.5, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000", "Apple", 262),
                new Product("Apple Macbook Pro 16 inch (M1 Max) 2021 - RAM 32GB / SSD 1TB", "Computers", 93000000, 2, LocalDate.of(2021, 11, 7), 4.0, "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/1000x/040ec09b1e35df139433887a97daa66f/m/a/macbook-pro-2021-005_3.jpg", "Apple", 3120),
                new Product("Apple Pencil (2nd Generation)", "Electronics", 2890000, 5, LocalDate.of(2018, 6, 26), 4.5, "https://m.media-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg", "Apple", 198),
                new Product("Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB", "Electronics", 5890000, 0, LocalDate.of(2017, 4, 14), 3.5, "https://m.media-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg", "Oculus", 38),
                new Product("Keychron K2 Wireless Mechanical Keyboard (Version 2)", "Electronics", 3425000, 45, LocalDate.of(2020, 8, 19), 5.0, "https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-K2-wireless-mechanical-keyboard-for-Mac-Windows-iOS-Gateron-switch-blue-with-type-C-RGB-white-backlight_7247ac65-e246-451e-b367-cd6c5b6411be_1800x1800.jpg?v=1621223999", "Keychron", 83),
                new Product("Curnon Kashmir", "Watches", 250000, 12, LocalDate.of(2020, 2, 20), 3.0, "https://curnonwatch.com/_next/image?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fr%2Fi%2Frise_3.jpg&w=1920&q=75", "Curnon", 1),
                new Product("DW Petite Amber", "Watches", 440000, 25, LocalDate.of(2021, 10, 18), 3.5, "https://www.danielwellington.com/product-images/DW00100476_Petite_Am-TUctOpEV.png?ecom2=true&format=jpg&canvas=1:1&width=800&quality=80&bg-color=FFFFFF", "Daniel Wellington", 19),
                new Product("Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones", "Books", 435000, 45, LocalDate.of(2019, 6, 21), 5.0, "https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg", "James Clear", 5611)
        );
        return args -> {
            productDAO.saveAll(sampleProducts);
        };
    }
}
