// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Define types for our translation resources
declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: {
        welcome: string;
        appStore: string;
        categories: {
          discover: string;
          arcade: string;
          create: string;
          work: string;
          manage: string;
          updates: string;
          recentlyAdded: string;
        };
        content: {
          discover: string;
          arcade: string;
          create: string;
          work: string;
          manage: string;
          updates: string;
          recentlyAdded: string;
        };
        featured: {
          title: string;
          description: string;
          button: string;
        };
        featuredApps: string;
        username: string;
        viewProfile: string;
      };
    };
  }
}

// Translation files (you can expand these later)
const resources = {
  en: {
    translation: {
      welcome: "Welcome to my app!",
      appStore: "App Store",
      categories: {
        discover: "Discover",
        arcade: "Arcade",
        create: "Create",
        work: "Work",
        manage: "Manage",
        updates: "Updates",
        recentlyAdded: "Recently Added"
      },
      content: {
        discover: "Discover featured content",
        arcade: "Apple Arcade games",
        create: "Creative apps",
        work: "Productivity apps",
        manage: "Manage",
        updates: "App updates",
        recentlyAdded: "Recently added apps"
      },
      featured: {
        title: "Featured App of the Week",
        description: "Explore apps handpicked by our editors",
        button: "View Details"
      },
      featuredApps: "Featured Apps",
      username: "Username",
      viewProfile: "View Profile"
    },
  },
  zh: {
    translation: {
      welcome: "欢迎使用我的应用！",
      appStore: "App Store",
      categories: {
        discover: "发现",
        arcade: "Arcade",
        create: "创作",
        work: "工作",
        manage: "管理",
        updates: "更新",
        recentlyAdded: "最近添加"
      },
      content: {
        discover: "发现精选内容",
        arcade: "Apple Arcade 游戏",
        create: "创作类应用",
        work: "办公效率应用",
        manage: "管理",
        updates: "应用更新",
        recentlyAdded: "最近添加的应用"
      },
      featured: {
        title: "本周精选应用",
        description: "探索由编辑精心挑选的精彩应用",
        button: "查看详情"
      },
      featuredApps: "精选应用",
      username: "用户名",
      viewProfile: "查看个人资料"
    },
  },
  es: {
    translation: {
      welcome: "¡Bienvenido a mi aplicación!",
      appStore: "App Store",
      categories: {
        discover: "Descubrir",
        arcade: "Arcade",
        create: "Crear",
        work: "Trabajo",
        updates: "Actualizaciones",
        recentlyAdded: "Añadido recientemente"
      },
      content: {
        discover: "Descubrir contenido destacado",
        arcade: "Juegos de Apple Arcade",
        create: "Aplicaciones creativas",
        work: "Aplicaciones de productividad",
        updates: "Actualizaciones de aplicaciones",
        recentlyAdded: "Aplicaciones añadidas recientemente"
      },
      featured: {
        title: "Aplicación destacada de la semana",
        description: "Explora aplicaciones seleccionadas por nuestros editores",
        button: "Ver detalles"
      },
      featuredApps: "Aplicaciones destacadas",
      username: "Nombre de usuario",
      viewProfile: "Ver perfil"
    },
  },
};

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n to React
  .init({
    resources,
    fallbackLng: "en", // Default language if detection fails
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
