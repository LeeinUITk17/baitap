import React, { useState } from 'react';
import { View, Text, Switch, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navbar from '@/components/baitapComponent/navbar';
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [feedback, setFeedback] = useState(''); 
  const [feedbackList, setFeedbackList] = useState([]); 

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled);

  const handleSendFeedback = () => {
   if(!notificationsEnabled){
    if (feedback.trim()) {
        setFeedbackList([...feedbackList, feedback]);
        setFeedback('');      
      } 
   }
   else{
    if (feedback.trim()) {
        setFeedbackList([...feedbackList, feedback]);
        setFeedback('');
        alert('Feedback Sent!');
      } else {
        alert('Please enter your feedback.');
      }
   }
  };

  const styles = darkMode ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      <Navbar/>
      <StatusBar style={darkMode ? 'light' : 'dark'} />
      <View style={styles.header}>
        <Text style={styles.logoText}>React Native App</Text>
      </View>

      <View style={styles.settings}>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={toggleDarkMode} />
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Notifications</Text>
          <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
        </View>

        <Text style={styles.label}>Feedback</Text>
        <TextInput
          style={styles.input}
          placeholder="Your feedback here..."
          placeholderTextColor={darkMode ? "#ddd" : "#999"}
          value={feedback}
          onChangeText={setFeedback}
          multiline
        />

        <Button title="SEND FEEDBACK" onPress={handleSendFeedback} />
      </View>

      <Text style={styles.faq}>Frequently Asked Questions</Text>
 
      <Text style={styles.label}>Comments</Text>
      <ScrollView>
        {feedbackList.map((item, index) => (
          <Text key={index} style={styles.commentText}>{item}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  settings: {
    marginBottom: 30,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  settingText: {
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  faq: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  commentText: {
    fontSize: 14,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  settings: {
    marginBottom: 30,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  settingText: {
    fontSize: 16,
    color: '#fff',
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    height: 80,
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#333',
    color: '#fff',
  },
  faq: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#fff',
    textAlign: 'center',
  },
  commentText: {
    fontSize: 14,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    color: '#fff',
  },
});
