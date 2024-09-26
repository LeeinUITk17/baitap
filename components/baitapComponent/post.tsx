import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PostProps {
  data: {
    name: string;
    avatar: string;
    title: string;
    image: string;
    likes: number;
    comments: number;
    shares: number;
  };
  onLike: () => void;
  onComment: () => void;
  onShare: () => void;
  like: boolean;
  comment: boolean;
  share: boolean;
}

const Post: React.FC<PostProps> = ({ data, onLike, onComment, onShare, like, comment, share }) => {
  const { name, avatar, title, image, likes, comments, shares } = data;
  return (
    <View style={styles.newContainer}>
      <View style={styles.newHead}>
        <Image source={{ uri: avatar }} style={styles.iconAvatar} />
        <Text style={styles.modalTitle}>{name}</Text>
      </View>

      <View style={styles.newBody}>
        <Text style={styles.newTitle}>{title}</Text>
        <Image source={{ uri: image }} style={styles.avatar} />

        <View style={styles.interactionContainer}>
          <Text style={styles.interactionText} onPress={onLike}>Likes: {likes}</Text>
          <Text style={styles.interactionText} onPress={onComment}>Comments: {comments}</Text>
          <Text style={styles.interactionText} onPress={onShare}>Shares: {shares}</Text>
        </View>

        <View style={styles.line}></View>

        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={onLike}>
            <Ionicons name="thumbs-up-outline" color={like ? "blue" : "black"} size={15} /> Like
          </Text>
          <Text style={styles.buttonText} onPress={onComment}>
            <Ionicons name="chatbubble-outline" color={comment ? "blue" : "black"} size={15} /> Comment
          </Text>
          <Text style={styles.buttonText} onPress={onShare}>
            <Ionicons name="share-social-outline" color={share ? "blue" : "black"} size={15} /> Share
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '90%',
    height: 'auto',
    margin: 10,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
  iconAvatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderColor: 'orange',
    borderWidth: 1,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  newHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    marginTop: 10,
  },
  newBody: {
    flexDirection: 'column',
    width: '100%',
    marginTop: 5,
  },
  avatar: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  interactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  interactionText: {
    fontSize: 16,
  },
  line: {
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  newTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});

export default Post;