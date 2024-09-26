import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import Post from '@/components/baitapComponent/post';

const Index = () => {
  const [like, setLike] = useState(false);
const [comment, setComment] = useState(false);
const [share, setShare] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: 'Tam',
      avatar: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1718691428/ymijup68uyjglfikvfqx.jpg',
      title: 'Enjoying the sunshine!',
      image: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1718692404/eqwdwlz0pvqduq5tgha1.jpg',
      likes: 10,
      comments: 2,
      shares: 5,
    },
    {
      id: 2,
      name: 'Gia Huy',
      avatar: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1718691706/fzdshubq3bldznbuvpuo.jpg',
      title: 'Great day at the beach!',
      image: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1718814010/ea7w3hzmxcew8yzuuhom.jpg',
      likes: 22,
      comments: 5,
      shares: 8,
    },
  ]);

  const handleLike = (postId: number) => {
   if(like){
   setPosts(posts.map(post => 
      post.id === postId? {...post, likes: post.likes - 1 } : post
    ))
    setLike(false);
   }else{
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
    setLike(true);
   }
  };
  const handleComment = (postId: number) => {
    if(comment){
      setPosts(posts.map(post => 
        post.id === postId? {...post, comments: post.comments - 1 } : post
      ))
      setComment(false);
    }else{
      setPosts(posts.map(post => 
        post.id === postId ? { ...post, comments: post.comments + 1 } : post
      ));
      setComment(true);
    }
  };
  const handleShare = (postId: number) => {
   if(share){
    setPosts(posts.map(post => 
      post.id === postId? {...post, shares: post.shares - 1 } : post
    ))
    setShare(false);
  }else{
      setPosts(posts.map(post => 
        post.id === postId ? { ...post, shares: post.shares + 1 } : post
      ));
      setShare(true);
    }
  };


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Social Media Feed</Text>
      {posts.map(post => (
       <Post key={post.id} data={post} 
          onLike={() => handleLike(post.id)}  
          onComment={() => handleComment(post.id)}
          onShare={() => handleShare(post.id)}
          like={like}
          comment={comment}
          share={share}  
          />

      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 30,
    borderWidth: 1,
    borderBlockColor: 'black',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Index;