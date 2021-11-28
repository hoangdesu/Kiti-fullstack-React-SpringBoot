package com.kiti.server.repositories;

import com.kiti.server.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductDAO extends JpaRepository<Product, Long> {

    // SELECT * FROM product WHERE name = ?
    @Query("SELECT p FROM Product p WHERE p.name = ?1")
    Optional<Product> findProductByName(String name);
}
