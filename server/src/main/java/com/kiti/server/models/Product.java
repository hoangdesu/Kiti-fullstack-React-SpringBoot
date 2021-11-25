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
    private Double price;
    private String category;
    private LocalDate addedDate;
    private int rating;



    public Product() {

    }

    public Product(String name, Double price, String category, LocalDate addedDate, int rating) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.addedDate = addedDate;
        this.rating = rating;
    }

    public Product(Long id, String name, Double price, LocalDate addedDate, int rating) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.addedDate = addedDate;
        this.rating = rating;
    }


    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }


    public LocalDate getAddedDate() {
        return addedDate;
    }

    public void setAddedDate(LocalDate addedDate) {
        this.addedDate = addedDate;
    }



    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }



    @Override
    public String toString() {
        return "Product{" +
                "name='" + name + '\'' +
                ", price=" + price +
                ", rating=" + rating +
                '}';
    }

    public void setId(Long id) {
        this.id = id;
    }

}
