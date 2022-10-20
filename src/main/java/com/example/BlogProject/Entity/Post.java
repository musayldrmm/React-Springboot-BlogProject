package com.example.BlogProject.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "Post")
@Getter
@Setter
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "Title", length = 40)
    private String title;

    @Column(name = "Description", length = 500)
    private String description;

    @Column(name = "Creation_Date")
    private Date creationDate;

    @Column(name = "image_url", length = 500)
    private String imageUrl;

    @OneToOne(cascade = CascadeType.MERGE)
    @JsonIgnoreProperties(value = "password")
    private User user;

}

