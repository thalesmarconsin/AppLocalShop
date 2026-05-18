import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#444', marginTop: 15 },
  input: { 
    borderWidth: 1, borderColor: '#ddd', borderRadius: 8, 
    padding: 12, marginTop: 5, fontSize: 16 
  },
  button: { 
    backgroundColor: '#27ae60', padding: 15, borderRadius: 8, 
    alignItems: 'center', marginTop: 30 
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});

export default styles;