package com.example.BlogProject.Service;

import com.example.BlogProject.Entity.Comment;
import com.example.BlogProject.Repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;


    public Comment addComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public List<Comment> findAllComment(){
        return commentRepository.findAll();
    }

    public List <Comment> findByIdAllComment(Long id){
        return commentRepository.findAllBypost_Id(id);
    }
    public void removeCommit(Long commitId) {
        commentRepository.deleteById(commitId);
    }
}
