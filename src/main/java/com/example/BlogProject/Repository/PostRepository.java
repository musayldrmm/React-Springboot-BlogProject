package com.example.BlogProject.Repository;

import com.example.BlogProject.Entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {

}
