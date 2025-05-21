package com.ja.spring_boot_react_demo.db;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "client")
@Data
public class Client {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String email;

    // getter, setters, contructors
}