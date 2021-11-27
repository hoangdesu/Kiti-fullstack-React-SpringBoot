package com.kiti.server.models;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
public class Product {
    @Id
    @SequenceGenerator(
            name = "product_sequence",
            sequenceName = "product_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "product_sequence"
    )
    private Long id;
    private String name;
    private String category;
    private double price;
    private double discount;
    private LocalDate addedDate;
    private double rating;
    private String image;
    private String seller;
    private int stock;

    public Product() {

    }

    public Product(String name, String category, double price, double discount, LocalDate addedDate, double rating, String image, String seller, int stock) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.discount = discount;
        this.addedDate = addedDate;
        this.rating = rating;
        this.image = image;
        this.seller = seller;
        this.stock = stock;
    }

    // for testing
    public Product(String name, String category, double price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getDiscount() {
        return discount;
    }

    public void setDiscount(double discount) {
        this.discount = discount;
    }

    public LocalDate getAddedDate() {
        return addedDate;
    }

    public void setAddedDate(LocalDate addedDate) {
        this.addedDate = addedDate;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String images) {
        this.image = images;
    }

    public String getSeller() {
        return seller;
    }

    public void setSeller(String seller) {
        this.seller = seller;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int sold) {
        this.stock = sold;
    }
}
