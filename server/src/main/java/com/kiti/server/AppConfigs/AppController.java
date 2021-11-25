package com.kiti.server.AppConfigs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

    @GetMapping("/")
    public String goHome() {
        return "<h1>Welcome to Kiti's backend</h1>";
    }

    @GetMapping("*")
    public String errorNotFound() {
    return "<h1>Not found :(</h1><img src=\"https://cdn.tgdd.vn/hoi-dap/580732/loi-404-not-found-la-gi-9-cach-khac-phuc-loi-404-not-3-800x534.jpg\"></img";
    }
}
