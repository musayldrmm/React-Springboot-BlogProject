package com.example.BlogProject.Controller;

import com.example.BlogProject.Entity.Comment;
import com.example.BlogProject.Service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comment")
@CrossOrigin(origins = {"http://localhost:3000"})
public class CommentController {
    @Autowired
    private CommentService commentService;

    @PostMapping("/save")
    public ResponseEntity<Comment> addComment(@RequestBody Comment comment){
        return ResponseEntity.ok(commentService.addComment(comment));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Comment>>getAllComment(){
        return ResponseEntity.ok(commentService.findAllComment());
    }

    @GetMapping("/find-comment/{id}")
    public ResponseEntity<List<Comment>>getAllComment(@PathVariable Long id){
        return ResponseEntity.ok(commentService.findByIdAllComment(id));
    }

    @DeleteMapping("/remove-comment/{id}")
    public ResponseEntity<Comment> removeByIdPost(@PathVariable Long id){
        commentService.removeCommit(id);
        return new ResponseEntity<Comment>(HttpStatus.ACCEPTED);
    }
}
