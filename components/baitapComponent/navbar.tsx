import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Modal from 'react-native-modal';
const { width } = Dimensions.get('window');

const Navbar: React.FC = () => {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false); 

  const openSidebar = () => {
    setShowSidebar(true); 
  };

  const handleOptionSelect = (route: string) => {
    setShowSidebar(false); 
    router.push(route as any);
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={openSidebar} style={styles.menuButton}>
        <Ionicons name="menu" size={32} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>My App</Text>
      <Modal
        isVisible={showSidebar}
        onBackdropPress={() => setShowSidebar(false)}
        onBackButtonPress={() => setShowSidebar(false)}
        swipeDirection="right"
        onSwipeComplete={() => setShowSidebar(false)}
        animationIn="slideInLeft"
        animationInTiming={500}
        animationOut="slideOutLeft"
        animationOutTiming={500}
        backdropTransitionOutTiming={500}
        backdropOpacity={0.4}
        style={styles.sidebarModal} 
      >
        <View style={styles.sidebarContent}>
          <Text style={styles.sidebarTitle}>Menu Options</Text>
          <Pressable
            style={styles.option}
            onPress={() => handleOptionSelect('/(tabs)')}
          >
            <Ionicons name="home" size={24} color="gray" />
            <Text style={styles.optionText}>Home</Text>
          </Pressable>
          <Pressable
            style={styles.option}
            onPress={() => handleOptionSelect('/(tabs)/baitap2')}
          >
            <Ionicons name="fitness" size={24} color="gray" />
            <Text style={styles.optionText}>Gym</Text>
          </Pressable>
          <Pressable
            style={styles.option}
            onPress={() => handleOptionSelect('/(routes)/todo')}
          >
            <Ionicons name="list" size={24} color="gray" />
            <Text style={styles.optionText}>Todo</Text>
          </Pressable>
          <Pressable
            style={styles.option}
            onPress={() => handleOptionSelect('/(tabs)/baitap3')}
          >
            <Ionicons name="settings" size={24} color="gray" />
            <Text style={styles.optionText}>Settings</Text>
          </Pressable>
         

        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'bisque',
    paddingHorizontal: 15,
    height: 60,
  },
  menuButton: {
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sidebarModal: {
    margin: 0, 
    width: width * 0.75, 
    height: '100%',
    justifyContent: 'flex-start', 
    backgroundColor: 'white', 
    position: 'absolute', 
    right: 0, 
  },
  sidebarContent: {
    flex: 1,
    padding: 20,
    backgroundColor: 'bisque',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100%',
  },
  sidebarTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    marginVertical: 10,
  },
  optionText: {
    color: 'gray',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default Navbar;
