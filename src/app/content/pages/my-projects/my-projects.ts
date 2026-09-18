import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../../language.service';

export interface ProjectTech {
  name: string;
  icon: string;
  invertDark?: boolean;
}

export interface ProjectLink {
  labelFr: string;
  labelEn: string;
  url: string;
}

export type ProjectCategoryKey = 'all' | 'theory' | 'software' | 'systems';

export interface ProjectCategory {
  key: ProjectCategoryKey;
  labelFr: string;
  labelEn: string;
}

export interface Project {
  id: string;
  titleFr: string;
  titleEn: string;
  categoryKey: ProjectCategoryKey;
  categoryFr: string;
  categoryEn: string;
  icon?: string;
  iconType: 'img' | 'emoji' | 'svg';
  iconClass?: string;
  iconEmoji?: string;
  descFr: string;
  descEn: string;
  techs: ProjectTech[];
  linksPrefix?: string;
  links?: ProjectLink[];
  tagFr?: string;
  tagEn?: string;
}

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.html',
  styleUrls: ['./my-projects.scss']
})
export class MyProjects implements OnInit {

  selectedCategory: ProjectCategoryKey = 'all';

  categories: ProjectCategory[] = [
    { key: 'all', labelFr: 'Tous', labelEn: 'All' },
    { key: 'theory', labelFr: 'Fondamentaux Théoriques', labelEn: 'Theoretical Foundations' },
    { key: 'software', labelFr: 'Développement Logiciel', labelEn: 'Software Development' },
    { key: 'systems', labelFr: 'Systèmes & Réseaux', labelEn: 'Systems & Networks' }
  ];

  projects: Project[] = [
    {
      id: 'article-scientifique',
      titleFr: 'Article Scientifique',
      titleEn: 'Scientific Paper',
      categoryKey: 'theory',
      categoryFr: 'Fondamentaux Théoriques',
      categoryEn: 'Theoretical Foundations',
      iconType: 'img',
      icon: 'assets/project_icon/article_scientifique_preview.png',
      descFr: "Amélioration d'algorithmes de recherche 2D en utilisant des prédictions mathématiques. Rédaction d'un article scientifique sur les résultats et avancées obtenues.",
      descEn: "Improving 2D search algorithms using mathematical predictions. Co-authored a scientific paper on the results and advances achieved.",
      techs: [
        { name: 'Python', icon: 'assets/icon/python_icon.png' },
        { name: 'GeoGebra', icon: 'assets/icon/geogebra.svg' }
      ],
      links: [
        { labelFr: 'Article →', labelEn: 'Paper →', url: 'assets/article_scientifique.pdf' }
      ]
    },
    {
      id: 'alwide',
      titleFr: 'Alwide',
      titleEn: 'Alwide',
      categoryKey: 'software',
      categoryFr: 'Développement Logiciel',
      categoryEn: 'Software Development',
      iconType: 'img',
      icon: 'assets/project_icon/al_icon.png',
      iconClass: 'invert-dark',
      descFr: "Éditeur de texte performant en C (autodidacte) : gestion des buffers, coloration syntaxique temps réel, auto-complétion, etc.",
      descEn: "High-performance terminal text editor in C (self-taught): buffers management, real-time syntax highlighting, auto-completion, etc.",
      techs: [
        { name: 'C', icon: 'assets/icon/c.png' }
      ],
      links: [
        { labelFr: 'Site', labelEn: 'Website', url: 'https://alwide.arnaud-dev.fr/' },
        { labelFr: 'GitHub →', labelEn: 'GitHub →', url: 'https://github.com/arnauda-gh/Alwide' }
      ]
    },
    {
      id: 'librairie-graphique',
      titleFr: 'Librairie Graphique',
      titleEn: 'Graphical Library',
      categoryKey: 'systems',
      categoryFr: 'Systèmes & Réseaux',
      categoryEn: 'Systems & Networks',
      iconType: 'emoji',
      iconEmoji: '🎨',
      descFr: "Moteur d'interface graphique complet en C : gestion d'évènements bas niveau, dessin vectoriel et système de widgets. Projet ENSIMAG.",
      descEn: "Complete GUI engine in C: low-level event handling, vector drawing, and widget system. ENSIMAG project.",
      techs: [
        { name: 'C', icon: 'assets/icon/c.png' }
      ],
      tagFr: 'Projet Ensimag',
      tagEn: 'Ensimag Project'
    },
    {
      id: 'nachos',
      titleFr: 'Nachos: Micro-Noyau',
      titleEn: 'Nachos: Micro-Kernel',
      categoryKey: 'systems',
      categoryFr: 'Systèmes & Réseaux',
      categoryEn: 'Systems & Networks',
      iconType: 'emoji',
      iconEmoji: '💻',
      descFr: "Implémentation multi-threading, ordonnancement, mémoire virtuelle (pagination) et pile réseau sécurisée en C++. Projet ENSIMAG.",
      descEn: "Operating system micro-kernel (Nachos) in C++: multi-threading, scheduling, virtual memory (paging), and secure network stack. ENSIMAG project.",
      techs: [
        { name: 'C++', icon: 'assets/icon/cpp_icon.png' },
        { name: 'Linux', icon: 'assets/icon/linux_icon.png' }
      ],
      tagFr: 'Projet Ensimag',
      tagEn: 'Ensimag Project'
    },
    {
      id: 'sandbox-physique-2d',
      titleFr: 'Sandbox Physique 2D',
      titleEn: '2D Physics Sandbox',
      categoryKey: 'theory',
      categoryFr: 'Fondamentaux Théoriques',
      categoryEn: 'Theoretical Foundations',
      iconType: 'img',
      icon: 'assets/project_icon/2d_unit_test.png',
      iconClass: 'invert-dark',
      descFr: "Moteur physique de collision expérimental 2D. En C avec openGL.",
      descEn: "Experimental 2D collision physics engine. In C with OpenGL.",
      techs: [
        { name: 'C', icon: 'assets/icon/c.png' },
        { name: 'OpenGL', icon: 'assets/icon/opengl.svg' }
      ],
      links: [
        { labelFr: 'GitHub →', labelEn: 'GitHub →', url: 'https://github.com/arnauda-gh/2D-OpenGL-Collision-Sandbox' }
      ]
    },
    {
      id: 'dbnary',
      titleFr: 'DBnary',
      titleEn: 'DBnary',
      categoryKey: 'theory',
      categoryFr: 'Fondamentaux Théoriques',
      categoryEn: 'Theoretical Foundations',
      iconType: 'svg',
      descFr: "Participation à DBnary, projet de recherche. Suite à un stage au LIG.",
      descEn: "Participation in DBnary, a research project. Following an internship at LIG.",
      techs: [
        { name: 'Java', icon: 'assets/icon/java_icon.png' }
      ],
      links: [
        { labelFr: 'Post', labelEn: 'Post', url: 'https://kaiko.getalp.org/about-dbnary/gaelic-and-catalan-editions-are-now-part-of-dbnary/' },
        { labelFr: 'GitLab →', labelEn: 'GitLab →', url: 'https://gitlab.com/gilles.serasset/dbnary/-/commit/990220776b137863553528a47812062a2a754d69' }
      ]
    },
    {
      id: 'ball-physic',
      titleFr: 'Physique Newtonienne',
      titleEn: 'Newtonian Physics',
      categoryKey: 'theory',
      categoryFr: 'Fondamentaux Théoriques',
      categoryEn: 'Theoretical Foundations',
      iconType: 'img',
      icon: 'assets/project_icon/jump_game_v2_icon.png',
      iconClass: 'invert-dark',
      descFr: "Système newtonien appliqué à une balle.",
      descEn: "Newton system on a ball.",
      techs: [
        { name: 'Java', icon: 'assets/icon/java_icon.png' }
      ],
      links: [
        { labelFr: 'GitHub →', labelEn: 'GitHub →', url: 'https://github.com/arnauda-gh/ball-platformer' }
      ]
    },
    {
      id: 'devarea-bot',
      titleFr: "Dev'Area Bot",
      titleEn: "Dev'Area Bot",
      categoryKey: 'software',
      categoryFr: 'Développement Logiciel',
      categoryEn: 'Software Development',
      iconType: 'img',
      icon: 'assets/project_icon/devarea_icon.png',
      descFr: "Plateforme de partage de projets et défis de programmation liée à Discord. Architecture backend événementielle et bot Discord en Java.",
      descEn: "Project-sharing and coding challenge platform connected to Discord. Event-driven backend architecture and Discord bot in Java.",
      techs: [
        { name: 'Java', icon: 'assets/icon/java_icon.png' }
      ],
      links: [
        { labelFr: 'GitHub →', labelEn: 'GitHub →', url: 'https://github.com/arnauda-gh/DevArea-Backend-v2.0' }
      ]
    },
    {
      id: 'devarea-site',
      titleFr: "Dev'Area Website",
      titleEn: "Dev'Area Website",
      categoryKey: 'software',
      categoryFr: 'Développement Logiciel',
      categoryEn: 'Software Development',
      iconType: 'img',
      icon: 'assets/project_icon/devarea_icon.png',
      descFr: "Plateforme web pour la communauté de développeurs Dev'Area en Angular. Interface permettant de découvrir les projets, relever des challenges de code et suivre sa progression.",
      descEn: "Web platform for the Dev'Area developer community built with Angular. Interface to explore community projects, solve coding challenges, and track user progress.",
      techs: [
        { name: 'Angular', icon: 'assets/icon/angular_icon.png' },
        { name: 'TypeScript', icon: 'assets/icon/typescript_icon.png' }
      ],
      links: [
        { labelFr: 'Site', labelEn: 'Website', url: 'https://devarea.fr/menu' },
        { labelFr: 'GitHub →', labelEn: 'GitHub →', url: 'https://github.com/arnauda-gh/DevArea-Frontend' }
      ]
    },
    {
      id: 'jazer',
      titleFr: 'Jazer',
      titleEn: 'Jazer',
      categoryKey: 'systems',
      categoryFr: 'Systèmes & Réseaux',
      categoryEn: 'Systems & Networks',
      iconType: 'img',
      icon: 'assets/project_icon/jazer_icon.png',
      iconClass: 'invert-dark',
      descFr: "Librairie réseau à mon usage personnel (TCP, TLS).",
      descEn: "Network library for my personal use (TCP, TLS).",
      techs: [
        { name: 'Java', icon: 'assets/icon/java_icon.png' }
      ],
      links: [
        { labelFr: 'GitHub →', labelEn: 'GitHub →', url: 'https://github.com/arnauda-gh/Jazer' }
      ]
    },
    {
      id: 'self-hosted-server',
      titleFr: 'Serveur Self-Hosted Familial',
      titleEn: 'Family Self-Hosted Server',
      categoryKey: 'systems',
      categoryFr: 'Systèmes & Réseaux',
      categoryEn: 'Systems & Networks',
      iconType: 'emoji',
      iconEmoji: '🗄️',
      descFr: "Mise en place d'un serveur famillial sur Raspberry Pi avec stockage raid : annuaire centralisé, drive, immich, serveur mail et plus encore.",
      descEn: "Setup of a home server on Raspberry Pi with raid storage: centralized directory, drive, immich, mail server and even more.",
      techs: [
        { name: 'Linux', icon: 'assets/icon/linux_icon.png' },
        { name: 'Docker', icon: 'assets/icon/docker.svg' },
        { name: 'Raspberry Pi', icon: 'assets/icon/raspberry-pi.svg' }
      ],
      tagFr: 'Auto-hébergement',
      tagEn: 'Self-hosting'
    },
    {
      id: 'media-synchronizer',
      titleFr: 'Synchroniseur de Médias',
      titleEn: 'Media Synchronizer',
      categoryKey: 'software',
      categoryFr: 'Développement Logiciel',
      categoryEn: 'Software Development',
      iconType: 'img',
      icon: 'assets/project_icon/transfer_image.png',
      iconClass: 'invert-dark',
      descFr: "Système de transfer de media d'un portable vers un serveur.",
      descEn: "Media transfer system from a mobile phone to a server.",
      techs: [
        { name: 'Android', icon: 'assets/icon/android.svg' },
        { name: 'Java', icon: 'assets/icon/java_icon.png' }
      ],
      linksPrefix: 'GitHub: ',
      links: [
        { labelFr: 'Client', labelEn: 'Client', url: 'https://github.com/arnauda-gh/media-synchronizer-Client' },
        { labelFr: 'Serveur', labelEn: 'Server', url: 'https://github.com/arnauda-gh/media-synchronizer-Server' }
      ]
    },
    {
      id: 'coloc-app',
      titleFr: 'Coloc App',
      titleEn: 'Coloc App',
      categoryKey: 'software',
      categoryFr: 'Développement Logiciel',
      categoryEn: 'Software Development',
      iconType: 'img',
      icon: 'assets/project_icon/coloc-app.png',
      descFr: "Application de gestion de dépenses pour colocation.",
      descEn: "Shared expense management application for flatsharing.",
      techs: [
        { name: 'Android', icon: 'assets/icon/android.svg' },
        { name: 'Flutter', icon: 'assets/icon/flutter_icon.png' },
        { name: 'Dart', icon: 'assets/icon/dart_icon.png' },
        { name: 'Java', icon: 'assets/icon/java_icon.png' }
      ],
      linksPrefix: 'GitHub: ',
      links: [
        { labelFr: 'Client', labelEn: 'Client', url: 'https://github.com/arnauda-gh/Coloc-App' },
        { labelFr: 'Serveur', labelEn: 'Server', url: 'https://github.com/arnauda-gh/Coloc-Server' }
      ]
    },
    {
      id: 'fight-land',
      titleFr: 'Fight Land',
      titleEn: 'Fight Land',
      categoryKey: 'software',
      categoryFr: 'Développement Logiciel',
      categoryEn: 'Software Development',
      iconType: 'img',
      icon: 'assets/project_icon/fight_land_icon.png',
      descFr: "Jeux de plateforme multi-joueur, 2D avec Sprites.",
      descEn: "Multiplayer 2D platformer game with sprites.",
      techs: [
        { name: 'Java', icon: 'assets/icon/java_icon.png' }
      ],
      linksPrefix: 'GitHub: ',
      links: [
        { labelFr: 'Client', labelEn: 'Client', url: 'https://github.com/arnauda-gh/FightLand-Client' },
        { labelFr: 'Serveur', labelEn: 'Server', url: 'https://github.com/arnauda-gh/FightLand-Server' }
      ]
    },
    {
      id: 'maths-writter',
      titleFr: 'Maths Writer',
      titleEn: 'Maths Writer',
      categoryKey: 'software',
      categoryFr: 'Développement Logiciel',
      categoryEn: 'Software Development',
      iconType: 'img',
      icon: 'assets/project_icon/maths_writter_icon.png',
      iconClass: 'invert-dark',
      descFr: "Petit programme pour écrire des mathématiques.",
      descEn: "A small program for writing mathematics.",
      techs: [
        { name: 'Java (Swing)', icon: 'assets/icon/java_icon.png' }
      ],
      links: [
        { labelFr: 'GitHub →', labelEn: 'GitHub →', url: 'https://github.com/arnauda-gh/Maths-Writter' }
      ]
    },
    {
      id: 'sport-planner',
      titleFr: 'Planificateur de Sport',
      titleEn: 'Workout Customizer',
      categoryKey: 'software',
      categoryFr: 'Développement Logiciel',
      categoryEn: 'Software Development',
      iconType: 'img',
      icon: 'assets/project_icon/sport_icon.png',
      iconClass: 'invert-dark',
      descFr: "Application android pour former des séances de sport.",
      descEn: "Android application for creating workout sessions.",
      techs: [
        { name: 'Android', icon: 'assets/icon/android.svg' },
        { name: 'Flutter', icon: 'assets/icon/flutter_icon.png' },
        { name: 'Dart', icon: 'assets/icon/dart_icon.png' }
      ],
      links: [
        { labelFr: 'GitHub →', labelEn: 'GitHub →', url: 'https://github.com/arnauda-gh/workout-session-customiser' }
      ]
    },
    {
      id: 'portfolio',
      titleFr: 'Site Portfolio',
      titleEn: 'Portfolio Website',
      categoryKey: 'software',
      categoryFr: 'Développement Logiciel',
      categoryEn: 'Software Development',
      iconType: 'img',
      icon: 'assets/_photo de profil.jpg',
      descFr: "Mon site web de présentation, vous êtes ici ;).",
      descEn: "My portfolio website, you are here ;).",
      techs: [
        { name: 'Angular', icon: 'assets/icon/angular_icon.png' },
        { name: 'TypeScript', icon: 'assets/icon/typescript_icon.png' }
      ],
      links: [
        { labelFr: 'GitHub →', labelEn: 'GitHub →', url: 'https://github.com/arnauda-gh/arnaud-dev' }
      ]
    },
    {
      id: 'mic-ai',
      titleFr: 'Mic Voice AI',
      titleEn: 'Mic Voice AI',
      categoryKey: 'theory',
      categoryFr: 'Fondamentaux Théoriques',
      categoryEn: 'Theoretical Foundations',
      iconType: 'img',
      icon: 'assets/project_icon/mic_icon.png',
      iconClass: 'invert-dark',
      descFr: "Test de technologies pour une IA de la reconnaissance vocale.",
      descEn: "Tech testing for a speech recognition AI.",
      techs: [
        { name: 'Java', icon: 'assets/icon/java_icon.png' }
      ],
      tagFr: 'R&D',
      tagEn: 'R&D'
    }
  ];

  constructor(public langService: LanguageService) {
  }

  ngOnInit(): void {
  }

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.categoryKey === this.selectedCategory);
  }

  setCategory(key: ProjectCategoryKey): void {
    this.selectedCategory = key;
  }
}
