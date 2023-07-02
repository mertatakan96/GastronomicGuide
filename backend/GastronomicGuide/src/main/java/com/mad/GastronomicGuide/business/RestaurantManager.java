package com.mad.GastronomicGuide.business;

import com.mad.GastronomicGuide.dataAccess.RestaurantDao;
import com.mad.GastronomicGuide.entities.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestaurantManager implements RestaurantService{

    private RestaurantDao restaurantDao;
    
    @Autowired
    public RestaurantManager(RestaurantDao restaurantDao) {
        this.restaurantDao = restaurantDao;
    }

    
    @Override
    public List<Restaurant> getAll() {
        Sort sort = Sort.by(Sort.Direction.ASC, "id");
        return this.restaurantDao.findAll(sort);
    }

    @Override
    public List<Restaurant> getByCity(String city) {
        Sort sort = Sort.by(Sort.Direction.ASC, "id");
        return this.restaurantDao.getByCity(city, sort);
    }

    @Override
    public Optional<Restaurant> getById(int id) {
        return this.restaurantDao.findById(id);
    }

    @Override
    public List<String> getCities() {
        return this.restaurantDao.getCities();
    }
}
