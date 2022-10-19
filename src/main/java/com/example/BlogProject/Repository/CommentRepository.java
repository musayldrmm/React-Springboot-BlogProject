package com.example.BlogProject.Repository;

import com.example.BlogProject.Entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findAllBypost_Id(Long id);
}
