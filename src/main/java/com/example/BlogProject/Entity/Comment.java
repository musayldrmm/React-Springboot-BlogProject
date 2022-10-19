package com.example.BlogProject.Entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "Comment")
@Getter
@Setter
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "Comment",length = 200)
    private String comment;

    @OneToOne(cascade = CascadeType.MERGE)
    private User user;


    @ManyToOne(cascade = CascadeType.MERGE)
    private Post post;
}
