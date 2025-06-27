package com.hbk.restboot.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hbk.restboot.entity.Product;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @GetMapping
    public List<Product> getProducts() {
        List<Product> products = new ArrayList<>();

        for (int i = 1; i <= 10; i++) {
            products.add(new Product(
                    (long) i,
                    "상품 " + i,
                    "이것은 상품 " + i + "의 설명입니다.",
                    i * 1000,
                    "https://picsum.photos/200/200?random=" + i
            ));
        }

        return products;
    }
}