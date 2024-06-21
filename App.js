import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("./assets/perfilWn.jpeg")} style={styles.image} />
      <Text style={styles.header}>Wanessa Nicolly Maria Pereira de Souza</Text>
      <Text style={styles.subheader}>
        Análise e desenvolmento de Sistemas 
      </Text>
      <Text style={styles.subheader}>
        Objetivo
      </Text>
      <Text style={styles.paragraph}>
      Meu objetivo é me desenvolver na área da tecnologia, em design (em especial web design) e banco de dados. Busco uma posição que me permita aplicar e expandir meus conhecimentos em um ambiente colaborativo. Valorizo o trabalho em equipe e tenho facilidade em aprender na prática. Também tenho interesse em gerenciar equipes, sempre visando a entrega de soluções criativas e inovadoras.
      </Text>
      <Text style={styles.subheader}>
        Habilidades
      </Text>
      <Text style={styles.listItem}>
        • Soft Skills: Trabalho em equipe, Resolução de problemas, Fácil aprendizagem.
      </Text>
      <Text style={styles.listItem}>
        • Hard Skills: HTML5, CSS3, Figma, SQL, PowerBI, Wordpress + Elementor.
      </Text>
    </ScrollView>
  );
}

function ExperienceScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subheader}>
        Inspetoria Salesiana do Nordeste do Brasil 
        <Text style={styles.listItem}></Text>Jovem aprendiz | 
        Assistente administrativo | Início: Dez/2020 - Fim: Abril/2022 | 
        Com prática no TRT6 - Tribunal do Trabalho da Sexta Região | Utilizei Power BI, bizagi e excel para análise de dados.
      </Text>
      <Text style={styles.subheader}>
      Wise Marketing | Estágio | Desenvolvimento web estagiária | Início: Nov/2023 - Fim: Abril/2024.
      </Text>
      <Text style={styles.subheader}>
      Wise Marketing | Desenvolvedora web junior | Início: Mai/2024 - Fim: Atual | 
      Utilizei no estágio e uso o Wordpress e elementor para desenvolmento de sites.
      </Text>
      </ScrollView>
  );
}

function EducationScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.paragraph}>Formação </Text>
      <Text style={styles.subheader}>
        Análise e Desenvolvimento de Sistemas
      </Text>
      <Text style={styles.paragraph}>
        Faculdade Senac Pernambuco | Início: Mar/2023 - Fim: Jun/2025. 
      </Text>
      <Text style={styles.paragraph}>Cursos </Text>
      <Text style={styles.paragraph}>
      Construindo primeiros relatórios com Power BI (EaD) | Escola Judicial do Tribunal do Trabalho | Carga horária: 20h | 01 - 30/09/2021.
      </Text>
      <Text style={styles.paragraph}>
      Assistente administrativo | Curso técnico | Carga horária: 1.280h | Módulo teórico: Escola Dom Bosco | Módulo prático: TRT6 - Tribunal Regional do Trabalho da Sexta Região | Início: Dez/2020 - Fim: Abr/2022.
      </Text>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Perfil") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Experiência") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            } else if (route.name === "Formação") {
              iconName = focused ? "school" : "school-outline";
            }

            const iconSize = focused ? 30 : 25;

            return <Ionicons name={iconName} size={iconSize} color={color} />;
          },
          tabBarActiveTintColor: "#bd2fc2",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#f8f8f8",
            borderTopWidth: 0,
          },

          headerStyle: {
            backgroundColor: "#bd2fc2",
          },
          headerTintColor: "#fff",
        })}
      >
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="Experiência" component={ExperienceScreen} />
        <Tab.Screen name="Educação" component={EducationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "##E0D0FF",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subheader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "justify",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
  },
  listItem: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: "justify",
  },
  link: {
    color: "#1C0052",
    textDecorationLine: "underline",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#008080",
    alignSelf: "center",
    marginBottom: 20,
  },
});
