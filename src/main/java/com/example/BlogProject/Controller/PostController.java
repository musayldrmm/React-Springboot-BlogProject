package com.example.BlogProject.Controller;

import com.example.BlogProject.Entity.Post;
import com.example.BlogProject.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/post")
@CrossOrigin(origins = {"http://localhost:3000"})
public class PostController {
    @Autowired
    private PostService postService;

    @PostMapping("/save")
    public ResponseEntity <Post> addPost(@RequestBody Post post){
        return ResponseEntity.ok(postService.addPost(post));
    }
    @GetMapping("/all")
    public ResponseEntity <List<Post>> findAllPost(){
        return ResponseEntity.ok(postService.findAllPost());
    }
    @GetMapping("/find-post/{id}")
    public ResponseEntity <Post> findByIdPost(@PathVariable Long id){
        return ResponseEntity.ok(postService.getByIdPost(id));
    }

    @DeleteMapping("/remove-post/{id}")
    public ResponseEntity<Post> removeByIdPost(@PathVariable Long id){
        postService.removePost(id);
        return new ResponseEntity<Post>(HttpStatus.ACCEPTED);
    }
    @PutMapping("/update-post")
    public ResponseEntity <Post> updatePost(@RequestBody Post post){
        return ResponseEntity.ok(postService.updatePost(post));
    }
}
