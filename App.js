import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, StatusBar, ScrollView } from 'react-native';

export default function App() {

  // 🖱️ Función que se ejecuta al presionar el botón de contacto
  const manejarContacto = () => {
    alert('📩 ¡Gracias por tu interés! gcolladojimenez@gmail.com');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* 📜 ScrollView: permite hacer scroll si el contenido es largo */}
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* 🖼️ Foto de perfil */}
        <View style={styles.photoContainer}>
          <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/247020432?v=4' }}
            style={styles.photo}
          />
        </View>

        {/* 👤 Info personal */}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Gregory Collado J.</Text>
          <Text style={styles.title}>Estudiante de Programación</Text>
          <Text style={styles.bio}>
            🚀 Aprendiendo apps móviles con Expo{'\n'}
            💡 Mi meta: crear algo revolucionario.
          </Text>
        </View>

        {/* 🏷️ Badges / Habilidades */}
        <View style={styles.skillsContainer}>
          <Text style={styles.sectionTitle}>Mis habilidades</Text>
          
          <View style={styles.badge}>
            <Text style={styles.badgeText}>💻 Java</Text>
          </View>
          
          <View style={styles.badge}>
            <Text style={styles.badgeText}>👨‍💻HTML, CSS</Text>
          </View>
        </View>

        {/* 🔗 Botones de acción */}
        <View style={styles.actionsContainer}>
          
          {/* Botón principal: Contáctame */}
          <Pressable style={styles.buttonPrimary} onPress={manejarContacto}>
            <Text style={styles.buttonPrimaryText}>📩 Contáctame</Text>
          </Pressable>

          {/* Botón secundario: Portafolio */}
          <Pressable 
            style={styles.buttonSecondary}
            onPress={() => alert('🔗 Próximamente: mi portafolio')}
          >
            <Text style={styles.buttonSecondaryText}>🌐 Mi portafolio</Text>
          </Pressable>

        </View>

        {/* 🛟 Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Creado con ❤️ en Snack.expo.dev{'\n'}
            📅 {new Date().getFullYear()}
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },

  // 📜 ESTILOS PARA SCROLLVIEW
  scrollContent: {
    paddingBottom: 20, // Espacio extra al final para que no quede pegado
  },

  // 🖼️ ESTILOS PARA LA FOTO
  photoContainer: {
    alignItems: 'center',
    paddingTop: 60, 
    paddingBottom: 10,
  },
  photo: {
    width: 120,          // Ancho en píxeles
    height: 120,         // Alto en píxeles
    borderRadius: 60,    // ¡Mitad del ancho = círculo perfecto!
    borderWidth: 4,      // Grosor del borde
    borderColor: '#2196F3', // Color del borde (azul)
  },

  // 👤 INFORMACIÓN PERSONAL
  infoContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  name: {
    fontSize: 30,        // Letra grande
    fontWeight: 'bold',  // Texto en negrita
    color: '#1a1a1a',    // Color casi negro
    marginBottom: 8,     // Espacio debajo del nombre
  },
  title: {
    fontSize: 16,
    color: '#2196F3',    // Azul para destacar
    fontWeight: '500',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#666666',    // Gris para texto secundario
    textAlign: 'center', // Centra el texto
    lineHeight: 20,      // Espacio entre líneas
  },

  // 🏷️ HABILIDADES (BADGES)
  skillsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
  },
  badge: {
    backgroundColor: '#E3F2FD', // Fondo azul muy claro
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,           // Forma de píldora
    marginBottom: 8,
    alignSelf: 'center',    // Alinea a la izquierda
  },
  badgeText: {
    fontSize: 14,
    color: '#1565C0',           // Azul oscuro para texto
    fontWeight: '500',
  },

  // 🔗 BOTONES DE ACCIÓN
  actionsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  buttonPrimary: {
    backgroundColor: '#2196F3', // Azul principal
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',        // Centra el texto dentro del botón
    marginBottom: 12,
  },
  buttonPrimaryText: {
    color: '#ffffff',            // Texto blanco
    fontSize: 16,
    fontWeight: '600',
  },
  buttonSecondary: {
    backgroundColor: '#ffffff',  // Fondo blanco
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,              // Borde de 2 píxeles
    borderColor: '#2196F3',      // Borde azul
  },
  buttonSecondaryText: {
    color: '#2196F3',            // Texto azul
    fontSize: 16,
    fontWeight: '600',
  },

  // 🛟 FOOTER
  footer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
});


