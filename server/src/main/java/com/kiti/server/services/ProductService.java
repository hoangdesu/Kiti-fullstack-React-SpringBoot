package com.kiti.server.services;

import com.kiti.server.models.Product;
import com.kiti.server.repositories.ProductDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@Service
public class ProductService {
    private final ProductDAO productDAO;

    @Autowired
    public ProductService(ProductDAO productDAO) {
        this.productDAO = productDAO;
    }

    // GET mapping
    public List<Product> getAllProducts() {
        return productDAO.findAll();
    }
//    public List<Product> getProduct

    // POST mapping
    public void saveProduct(Product product) {
        productDAO.save(product);
    }

    // DELETE mapping
    public void deleteProduct(Long pid) {
        // first check if the product id is valid
        if (!productDAO.existsById(pid)) {
            throw new IllegalStateException("Product id " + pid + " does not exist");
        } else {
            productDAO.deleteById(pid);
        }
    }

    // PUT mapping
    @Transactional
    public void updateProduct(Long pid,
                              String name,
                              String category,
                              Double price,
                              Double discount,
                              LocalDate addedDate,
//                              Double rating,
                              String image,
                              String seller
//                              Integer stock
                              ) {
        Product product = productDAO.findById(pid).
                orElseThrow(() -> new IllegalStateException(
                        "Product with id " + pid + " does not exist"
                ));

        if (name != null && name.length() > 0 && !Objects.equals(product.getName(), name)) {
            String formattedName = name.substring(0, 1).toUpperCase() + name.substring(1);
            product.setName((formattedName));
        }

        if (category != null && category.length() > 0 && !Objects.equals(product.getCategory(), category)) {
            // capitalize first letter
            String formattedCategory = category.substring(0, 1).toUpperCase() + category.substring(1);
            product.setCategory(formattedCategory);
        }

        if (price > 0) {
            product.setPrice(price);
        }

        if (discount > 0) {
            product.setDiscount(discount);
        }

        if (image != null) {
            product.setImage(image);
        }

        if (addedDate != null) {
            product.setAddedDate(addedDate);
        }

//        if (rating > 0) {
//            product.setRating(rating);
//        }

        if (seller != null) {
            product.setSeller(seller);
        }

//        if (stock > 0) {
//            product.setStock(stock);
//        }
    }
}
