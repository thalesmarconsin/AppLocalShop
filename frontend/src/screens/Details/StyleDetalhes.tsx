import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 250
  },
  content: { 
    padding: 20 
  },
  nome: { 
    fontSize: 26, 
    fontWeight: 'bold' 
  },
  categoria: { fontSize: 18, 
    color: '#666', 
    marginBottom: 15 
  },
  descricao: { 
    fontSize: 16, 
    lineHeight: 24, 
    marginBottom: 20, 
    color: '#444' 
  },
  botaoEditar: {
  backgroundColor: '#27ae60',
  padding: 12,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 12,
},
botaoDeletar: {
  backgroundColor: '#e74c3c',
  padding: 12,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 8,
},
botaoVoltar: {
  backgroundColor: '#95a5a6',
  padding: 12,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 8,
},
botaoTexto: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
},
});

export default styles;