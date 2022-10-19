package com.example.BlogProject.Service;

import com.example.BlogProject.Entity.Post;
import com.example.BlogProject.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public Post addPost(Post post) {
        return postRepository.save(post);
    }

    public List<Post> findAllPost() {
        return postRepository.findAll();
    }

    public Post getByIdPost(Long postId) {
        return postRepository.findById(postId).get();
    }

    public void removePost(Long postId) {
        postRepository.deleteById(postId);
    }

    public Post updatePost(Post post) {
        Post record = postRepository.findById(post.getId()).orElseThrow(() -> new EntityNotFoundException(post.getId() + "numaralı post yok."));
        record.setId(post.getId());
        record.setTitle(post.getTitle());
        record.setDescription(post.getDescription());
        record.setImageUrl(post.getImageUrl());
        record.setCreationDate(post.getCreationDate());
        return postRepository.save(record);
    }
}
