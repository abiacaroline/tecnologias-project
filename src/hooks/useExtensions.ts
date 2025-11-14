import { useState } from "react";
import type { IconType } from "react-icons";
import { FaReact, FaVuejs, FaAngular, FaSass, FaNodeJs } from "react-icons/fa";
import {SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiVite, SiWebpack, SiJest,} from "react-icons/si";

export type Extension = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  isActive: boolean;
  nmCategory: string;
  icon: IconType;
  color: string;
};

function useExtensions() {
  const [extensions, setExtensions] = useState<Extension[]>([
    {
      id: 1,
      title: "React.js",
      subtitle: "Biblioteca para interfaces de usuário",
      description:
        "React é uma biblioteca JavaScript usada para criar interfaces dinâmicas baseadas em componentes reutilizáveis.",
      isActive: true,
      nmCategory: "Front End",
      icon: FaReact,
      color: "bg-blue-400"
    },
    {
      id: 2,
      title: "Vue.js",
      subtitle: "Framework progressivo para construção de interfaces",
      description:
        "Vue é um framework leve e reativo para criar aplicações web modernas com JavaScript.",
      isActive: false,
      nmCategory: "Front End",
      icon: FaVuejs,
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Angular",
      subtitle: "Framework completo mantido pelo Google",
      description:
        "Angular é um framework TypeScript que facilita o desenvolvimento de aplicações escaláveis.",
      isActive: true,
      nmCategory: "Front End",
      icon: FaAngular,
      color: "bg-red-600"
    },
    {
      id: 4,
      title: "Next.js",
      subtitle: "Framework para React com renderização no servidor",
      description:
        "Next.js simplifica o desenvolvimento de aplicações React com SSR, SSG e rotas automáticas.",
      isActive: true,
      nmCategory: "Front End",
      icon: SiNextdotjs,
      color: "bg-gray-500"
    },
    {
      id: 5,
      title: "Sass",
      subtitle: "Pré-processador CSS",
      description:
        "Sass é uma extensão do CSS que permite o uso de variáveis, mixins e aninhamento para facilitar o design responsivo.",
      isActive: false,
      nmCategory: "Front End",
      icon: FaSass,
      color: "bg-pink-400"
    },
    {
      id: 6,
      title: "Tailwind CSS",
      subtitle: "Framework utilitário de CSS",
      description:
        "Tailwind CSS permite construir interfaces modernas com classes utilitárias diretamente no HTML.",
      isActive: true,
      nmCategory: "Front End",
      icon: SiTailwindcss,
      color: "bg-sky-400"
    },
    {
      id: 7,
      title: "TypeScript",
      subtitle: "Superconjunto do JavaScript com tipagem estática",
      description:
        "TypeScript ajuda a reduzir erros e melhorar a manutenção de código em aplicações front-end e back-end.",
      isActive: true,
      nmCategory: "Front End",
      icon: SiTypescript,
      color: "bg-blue-600"
    },
    {
      id: 8,
      title: "Redux",
      subtitle: "Gerenciamento de estado global",
      description:
        "Redux é uma biblioteca que facilita o controle do estado global de aplicações React e outras bibliotecas.",
      isActive: false,
      nmCategory: "Front End",
      icon: SiRedux,
      color: "bg-purple-600"
    },
    {
      id: 9,
      title: "Vite",
      subtitle: "Ferramenta de build rápida",
      description:
        "Vite acelera o processo de desenvolvimento front-end com um ambiente de build leve e rápido.",
      isActive: true,
      nmCategory: "Front End",
      icon: SiVite,
      color: "bg-yellow-400"
    },
    {
      id: 10,
      title: "Webpack",
      subtitle: "Empacotador de módulos",
      description:
        "Webpack é uma ferramenta usada para empacotar arquivos JavaScript e recursos estáticos em aplicações web.",
      isActive: false,
      nmCategory: "Front End",
      icon: SiWebpack,
      color: "bg-blue-500"
    },
    {
      id: 11,
      title: "Jest",
      subtitle: "Framework de testes para JavaScript",
      description:
        "Jest é usado para escrever e executar testes unitários e de integração em projetos JavaScript e React.",
      isActive: true,
      nmCategory: "Front End",
      icon: SiJest,
      color: "bg-red-500"
    },
    {
      id: 12,
      title: "Node.js",
      subtitle: "Ambiente de execução JavaScript no servidor",
      description:
        "Node.js permite executar JavaScript no lado do servidor, oferecendo alta escalabilidade e desempenho.",
      isActive: true,
      nmCategory: "Back End",
      icon: FaNodeJs,
      color: "bg-green-600"
    },
  ]);

  function onDeleteExtension(extensionId: number) {
    const newExtensions = extensions.filter(
      (extension) => extension.id !== extensionId
    );
    setExtensions(newExtensions);
  }

  function handleToggleActive(id: number, isChecked: boolean) {
    const updatedExtensions = extensions.map((extension) =>
      extension.id === id ? { ...extension, isActive: isChecked } : extension
    );
    setExtensions(updatedExtensions);
  }

  return { extensions, onDeleteExtension, handleToggleActive };
}

export default useExtensions;
