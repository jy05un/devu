package com.devu.backend.service;

import com.devu.backend.common.exception.TagNotFoundException;
import com.devu.backend.entity.PostTag;
import com.devu.backend.entity.Tag;
import com.devu.backend.repository.PostRepository;
import com.devu.backend.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class TagService {

    private final TagRepository tagRepository;
    private final PostRepository postRepository;

    @Transactional
    public List<Tag> findTags(List<String> tags) {
        List<Tag> findTags = new ArrayList<>();
        for (String tag : tags) {
            if (tagRepository.findTagByName(tag).isEmpty()) {
                tagRepository.save(Tag.builder().name(tag).build());
            }
            findTags.add(tagRepository.findTagByName(tag).get());
        }
        return findTags;
    }

    public String findTagName(PostTag postTag) {
        Tag tag = tagRepository.findById(postTag.getTag().getId()).orElseThrow(TagNotFoundException::new);
        return tag.getName();
    }


}
