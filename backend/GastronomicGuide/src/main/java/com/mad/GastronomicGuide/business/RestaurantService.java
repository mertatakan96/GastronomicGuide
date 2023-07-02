package com.mad.GastronomicGuide.business;

import com.mad.GastronomicGuide.entities.Restaurant;

import java.util.List;
import java.util.Optional;

public interface RestaurantService {
    
    List<Restaurant> getAll();
    
    List<Restaurant> getByCity(String city);
    
    Optional<Restaurant> getById(int id);

    List<String> getCities();
}
