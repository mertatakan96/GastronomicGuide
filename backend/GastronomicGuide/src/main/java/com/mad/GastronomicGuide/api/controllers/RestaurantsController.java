package com.mad.GastronomicGuide.api.controllers;

import com.mad.GastronomicGuide.business.RestaurantService;
import com.mad.GastronomicGuide.entities.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/restaurants/")
@CrossOrigin
public class RestaurantsController {
    
    private RestaurantService restaurantService;

    @Autowired
    public RestaurantsController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @GetMapping("/getall")
    public List<Restaurant> getAll(){
        return this.restaurantService.getAll();
    }

    @GetMapping("/getByCity")
    public List<Restaurant> getByCity(@RequestParam String city){
        return this.restaurantService.getByCity(city);
    }

    @GetMapping("/getById")
    public Optional<Restaurant> getById(@RequestParam int id){
        return this.restaurantService.getById(id);
    }

    @GetMapping("/cities")
    public List<String> getCities(){
        return restaurantService.getCities();
    }
}
