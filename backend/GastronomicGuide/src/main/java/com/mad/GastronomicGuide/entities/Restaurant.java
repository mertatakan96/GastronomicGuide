package com.mad.GastronomicGuide.entities;

import lombok.*;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "restaurants")
public class Restaurant {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "restaurant_id")
    private int id;
    
    @Column(name = "name")
    private String name;

    @Column(name = "city")
    private String city;

    @Column(name = "lat")
    private double latitude;

    @Column(name = "long")
    private double longitude;

    @Column(name = "info")
    private String info;

    @Column(name = "address")
    private String address;

    @Column(name = "phone")
    private String phone;
    
}
