package com.kiti.server.controllers;

import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.Map;

@RestController
@CrossOrigin
public class AppController {

    @GetMapping("/")
    public String goHome() {
        return "<h1>Welcome to Kiti's backend</h1>";
    }

    @GetMapping("/hi")
    public String hiBack() {
        return "Spring is saying hi :D!";
    }

    @GetMapping("/testapi")
    public Map<String, Object> testAPI() {
        Map<String, Object> testData = new LinkedHashMap<>();
        testData.put("name", "Brian");
        testData.put("date", LocalDate.now());
        testData.put("time", LocalTime.now());
        testData.put("datetime", LocalDateTime.now());
        testData.put("images", new String[]{"hi", "hello"});
        return testData;
    }

    @PostMapping("testapi")
    public void testPostAPI(@RequestBody Map<String, Object> data) {
        System.out.println(data);
    }

    @GetMapping("*")
    public String errorNotFound() {
    return "<h1>Not found :(</h1><img src=\"https://cdn.tgdd.vn/hoi-dap/580732/loi-404-not-found-la-gi-9-cach-khac-phuc-loi-404-not-3-800x534.jpg\"></img";
    }
}
