package com.mad.GastronomicGuide.dataAccess;

import com.mad.GastronomicGuide.entities.Restaurant;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RestaurantDao extends JpaRepository<Restaurant, Integer>{

    List<Restaurant> getByCity(String city, Sort sort);

    @Query("SELECT DISTINCT r.city FROM Restaurant r ORDER BY r.city ASC")
    List<String> getCities();

}
